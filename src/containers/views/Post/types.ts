import type { Tag } from "~/lib/posts";

export type Props = {
  title: string;
  date: string;
  contentHtml: string;
  tags: Array<Tag>;
  slug: string;
};
