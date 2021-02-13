import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";
import slugify from "slugify";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export type Tag = {
  text: string;
  slug: string;
  posts: Array<PostMeta>;
};

export type PostMeta = {
  id: string;
  description: string | null;
  title: string;
  status: string;
  date: string;
  permalink: string;
};

export type Post = {
  id: string;
  filename: string;
  contentHtml: string;
  title: string;
  permalink: string;
  tags: Array<Tag>;
  date: string;
  description: string | null;
  status: string;
};

export type AllPosts = Array<Post>;

const getPosts = () => {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(
    (filename): Post => {
      const id = getSlugFromFilename(filename);

      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      let tags = [];
      if (matterResult.data.tags) {
        tags = matterResult.data.tags.map((tag: string) => ({
          text: tag,
          slug: `/tags/${slugify(tag.toLowerCase())}`,
        }));
      }

      return {
        id,
        filename: filename,
        date: matterResult.data.date,
        title: matterResult.data.title,
        tags: tags,
        permalink: matterResult.data.permalink,
        description: matterResult.data.description ?? null,
        contentHtml: matterResult.content,
        status: matterResult.data.status,
      };
    }
  );

  return posts;
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  let tags = [];
  if (matterResult.data.tags) {
    tags = matterResult.data.tags.map((tag: string) => ({
      text: tag,
      slug: `/tags/${slugify(tag.toLowerCase())}`,
    }));
  }

  // Combine the data with the id
  return {
    ...matterResult.data,
    id,
    contentHtml,
    tags,
  };
};

export function getAllPostIds() {
  const posts = getPosts();
  return posts.map(({ filename }) => {
    return {
      params: {
        id: getSlugFromFilename(filename),
      },
    };
  });
}

const getSlugFromFilename = (filename: string): string => {
  return filename.replace(/\.md$/, "");
};

type SortedPostsParams = {
  limit?: number;
  tagSlug?: string;
};

export function getSortedPostsData({ limit }: SortedPostsParams = {}) {
  let allPostData = getPosts();

  allPostData = allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  if (limit) {
    allPostData = allPostData.slice(0, limit + 2);
  }

  return allPostData;
}

export function getTagsMap() {
  const allPostData = getPosts();
  const allTags: { [slug: string]: Tag } = {};

  allPostData.forEach((post) => {
    const { id, tags, title, permalink, status, date, description } = post;
    if (status !== "published") {
      return;
    }

    tags.forEach((tag) => {
      if (!allTags[tag.slug]) {
        allTags[tag.slug] = tag;

        allTags[tag.slug].posts = [
          {
            id,
            title,
            permalink,
            status,
            date,
            description,
          },
        ];
      } else {
        allTags[tag.slug].posts.push({
          id,
          title,
          permalink,
          status,
          date,
          description,
        });
      }
    });
  });

  return allTags;
}

export function getTags() {
  return Object.values(getTagsMap());
}
