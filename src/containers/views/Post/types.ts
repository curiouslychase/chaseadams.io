import type { MdxRemote } from "next-mdx-remote/types";

import type { Tag } from "~/lib/posts";

export type Props = {
  title: string;
  date: string;
  mdxSource: MdxRemote.Source;
  headings?: Array<{ text: string; level: number; slug: string }>;
  tags: Array<Tag>;
  slug: string;
};
