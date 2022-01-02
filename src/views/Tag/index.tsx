import Link from "next/link";

import { Box } from "~/components/core/Box";
import { Container } from "~/components/core/Container";
import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { PostSummaryHeader } from "~/components/modules/Post/PostSummaryHeader";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { Tag } from "~/lib/posts/types";

type Props = { tag: Tag };

export const TagView = ({ tag }: Props) => {
  return (
    <PageContainer>
      <SiteHeader />
      <Container css={{ pb: "$10" }} size={"3"}>
        <PostSummaryHeader
          title={`Tagged with "${tag.text}"`}
          count={tag.posts.length}
        />
        <PostSummaries posts={tag.posts} />
        <Box css={{ pt: "$8" }}>
          <Link href="/tags">Back to all tags</Link>
        </Box>
      </Container>
      <SiteFooter />
    </PageContainer>
  );
};
