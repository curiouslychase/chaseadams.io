import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export type Post = {
  id: string;
  filename: string;
  contentHtml: string;
  title: string;
  permalink: string;
  date: string;
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

      return {
        id,
        filename: filename,
        date: matterResult.data.date,
        title: matterResult.data.title,
        permalink: matterResult.data.permalink,
        contentHtml: matterResult.content,
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

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
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

export function getSortedPostsData() {
  const allPostData = getPosts();

  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
