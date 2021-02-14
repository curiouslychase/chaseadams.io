import fs from "fs";
import matter from "gray-matter";
import path from "path";
import RSS from "rss";
import slugify from "slugify";

import type { Post } from "../../src/lib/posts";

const postsDirectory = path.join(process.cwd(), "src", "posts");

const getSlugFromFilename = (filename: string): string => {
  return filename.replace(/\.md$/, "");
};

function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(
    (filename: string): Post => {
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
        description: matterResult.data.description ?? null,
        contentHtml: matterResult.content,
        status: matterResult.data.status,
      };
    }
  );

  const allPostData = posts.sort((a: { date: string }, b: { date: string }) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return allPostData;
}

async function generate() {
  const previewItems = getSortedPostsData().filter(
    ({ status }) => status === "published"
  );
  const feed = new RSS({
    title: "Chase Adams' Blog",
    site_url: "https://chaseadams.io",
    feed_url: "https://chaseadams.io/feed.xml",
  });

  previewItems.map((post: Post) => {
    const item = {
      title: post.title,
      guid: post.id,
      url: `https://chaseadams.io/posts/${post.id}`,
      date: post.date,
      description: post.description ?? "A post by Chase Adams",
      author: "Chase Adams",
    };

    feed.item(item);
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("./public/rss.xml", rss);
}

generate();
