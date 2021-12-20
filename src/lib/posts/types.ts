import { MDXRemoteSerializeResult } from "next-mdx-remote";

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
  description?: string;
  title: string;
  status: string;
  image?: string;
  date: string;
};

export type Post = {
  id: string;
  slug: string;
  filename: string;
  mdxSource: MDXRemoteSerializeResult;
  title: string;
  headings?: Array<{ text: string; level: number; slug: string }>;
  tags: Array<Tag>;
  date: string;
  image?: string;
  description?: string;
  status: string;
};

export type AllPosts = Array<Post>;
