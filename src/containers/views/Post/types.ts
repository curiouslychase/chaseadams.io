import type { MdxRemote } from "next-mdx-remote/types";

import type { Tag } from "~/lib/posts";

export type Props = {
  title: string;
  date: string;
  mdxSource: MdxRemote.Source;
  tags: Array<Tag>;
  slug: string;
};
