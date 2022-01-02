import Link from "next/link";

import { Container } from "~/components/core/Container";
import { Grid } from "~/components/core/Grid";
import { Section } from "~/components/core/Section";
import { PostSummaryHeader } from "~/components/modules/Post/PostSummaryHeader";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { Tag } from "~/lib/posts/types";

export const TagsView = ({ tags }: { tags: Tag[] }) => {
  return (
    <PageContainer>
      <SiteHeader />
      <Container size={"3"}>
        <PostSummaryHeader
          title={"Tags"}
          count={tags.length}
          identifier="Tags"
        />
        <Section css={{ pb: "$10" }}>
          <Grid
            css={{
              gap: "$6",
              gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
              "@md": { gridTemplateColumns: `repeat(2, minmax(0, 1fr))` },
              "@lg": { gridTemplateColumns: `repeat(3, minmax(0, 1fr))` },
            }}
          >
            {tags.map((tag) => (
              <div key={tag.slug}>
                <Link href={tag.slug}>
                  <a>
                    {tag.text} ({tag.posts.length})
                  </a>
                </Link>
              </div>
            ))}
          </Grid>
        </Section>
      </Container>
      <SiteFooter />
    </PageContainer>
  );
};
