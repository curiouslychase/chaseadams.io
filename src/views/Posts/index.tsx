import { Container } from "~/components/core/Container";
import { Section } from "~/components/core/Section";
import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { PostSummaryHeader } from "~/components/modules/Post/PostSummaryHeader";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { AllPosts } from "~/lib/posts/types";

export const PostsView = ({ posts }: { posts: AllPosts }) => {
  return (
    <PageContainer>
      <SiteHeader />
      <Container size={"3"}>
        <Section size={"loose"}>
          <PostSummaryHeader title={"Posts"} count={posts.length} />
          <PostSummaries posts={posts} />
        </Section>
      </Container>
      <SiteFooter />
    </PageContainer>
  );
};
