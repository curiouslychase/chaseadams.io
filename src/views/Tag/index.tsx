import Link from "next/link";

import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { ViewH1 } from "~/components/shared/PageTitle";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { Tag } from "~/lib/posts/types";

type Props = { tag: Tag };

export const TagView = ({ tag }: Props) => {
  return (
    <div className="page-container">
      <SiteHeader />
      <div className="section-container">
        <ViewH1>
          Tagged with "{tag.text}" ({tag.posts.length})
        </ViewH1>
        <PostSummaries posts={tag.posts} />
        <div className="pt-8">
          <Link href="/tags">Back to all tags</Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};
