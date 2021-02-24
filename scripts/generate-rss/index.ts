import fs from "fs";
import matter from "gray-matter";
import path from "path";
import RSS from "rss";
import slugify from "slugify";

import type { PostMeta } from "../../src/lib/posts";

const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

const getSlugFromFilename = (filename: string): string => {
  return filename.replace(/\.md$/, "");
};

function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(
    (filename: string): PostMeta => {
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
        tags: tags,
        description: matterResult.data.description ?? null,
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
    feed_url: "https://chaseadams.io/rss.xml",
  });

  previewItems.map((post: PostMeta) => {
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
