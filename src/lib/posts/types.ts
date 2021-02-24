import type { MdxRemote } from "next-mdx-remote/types";

export type Tag = {
  text: string;
  slug: string;
  posts: Array<PostMeta>;
};

export type PostMeta = {
  id: string;
  slug: string;
  filename: string;
  tags?: Array<Tag>;
  description: string | null;
  title: string;
  status: string;
  image?: string;
  date: string;
};

export type Post = {
  id: string;
  slug: string;
  filename: string;
  mdxSource: MdxRemote.Source;
  title: string;
  headings?: Array<{ text: string; level: number; slug: string }>;
  tags: Array<Tag>;
  date: string;
  image?: string;
  description: string | null;
  status: string;
};

export type AllPosts = Array<Post>;
