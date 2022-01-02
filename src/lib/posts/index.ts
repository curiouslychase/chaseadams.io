import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import slugify from "slugify";

import getHeadings from "~/utils/getHeadings";

import type { PostMeta, Tag } from "./types";

const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

const getPosts = () => {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(
    (filename): PostMeta => {
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
        slug: id,
        filename: filename,
        date: matterResult.data.date,
        title: matterResult.data.title,
        image: matterResult.data.image ?? null,
        tags: tags,
        description: matterResult.data.description ?? null,
        status: matterResult.data.status,
      };
    }
  );

  return posts;
};

export const getPostData = async (id: string) => {
  let fullPath, fileContents;
  try {
    fullPath = path.join(postsDirectory, `${id}.md`);
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (err) {
    try {
      fullPath = path.join(postsDirectory, `${id}.mdx`);
      fileContents = fs.readFileSync(fullPath, "utf8");
    } catch (err) {
      throw new Error(err as string);
    }
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-toc"),
        require("remark-slug"),
        require("remark-autolink-headings"),
      ],
      rehypePlugins: [mdxPrism],
    },
    scope: matterResult.data,
  });

  let tags = [];
  if (matterResult.data.tags) {
    tags = matterResult.data.tags.map((tag: string) => ({
      text: tag,
      slug: `/tags/${slugify(tag.toLowerCase())}`,
    }));
  }

  const headings = getHeadings(matterResult.content);

  // Combine the data with the id
  return {
    ...matterResult.data,
    slug: `/posts/${id}`,
    id,
    mdxSource,
    headings,
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
  return filename.replace(/\.mdx?$/, "");
};

type SortedPostsParams = {
  limit?: number;
  tagSlug?: string;
};

export function getSortedPostsData({ limit }: SortedPostsParams = {}) {
  let allPostData = getPosts();

  allPostData = allPostData
    .filter((post) => post.status === "published")
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    allPostData = allPostData.slice(0, limit);
  }

  return allPostData;
}

export type TagWithPostsWithoutTags = {
  slug: string;
  text: string;
  posts: Array<Omit<PostMeta, "tags"> & { tags?: Array<Omit<Tag, "posts">> }>;
};

export function getTagsMap() {
  const allPostData = getSortedPostsData();
  const allTags: { [slug: string]: TagWithPostsWithoutTags } = {};

  allPostData.forEach((post) => {
    const { id, tags, title, status, slug, date, filename, description } = post;
    if (status !== "published") {
      return;
    }

    if (!tags) {
      return;
    }

    tags.forEach((tag) => {
      const currentTagSlug = tag.slug;

      const otherTags = tags
        .filter((tag) => tag.slug !== currentTagSlug)
        .map((tag) => ({ text: tag.text, slug: tag.slug }));

      if (!allTags[currentTagSlug]) {
        allTags[currentTagSlug] = { ...tag };

        allTags[currentTagSlug].posts = [
          {
            date,
            description,
            filename,
            id,
            slug,
            status,
            tags: otherTags,
            title,
          },
        ];
      } else {
        allTags[currentTagSlug].posts.push({
          date,
          description,
          filename,
          id,
          status,
          slug,
          tags: otherTags,
          title,
        });
      }
    });
  });

  return allTags;
}

export function getTags() {
  return Object.values(getTagsMap());
}
