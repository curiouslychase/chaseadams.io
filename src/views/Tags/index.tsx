import Link from "next/link";

import { ViewH1 } from "~/components/shared/PageTitle";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { Tag } from "~/lib/posts/types";

export const TagsView = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className="page-container">
      <SiteHeader />
      <div className="section-container">
        <ViewH1>Tags</ViewH1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {tags.map((tag) => (
            <div>
              <Link href={tag.slug}>
                <a>
                  {tag.text} ({tag.posts.length})
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};
