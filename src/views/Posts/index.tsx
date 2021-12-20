import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { Container } from "~/components/shared/Container";
import { PageContainer } from "~/components/shared/PageContainer";
import { ViewH1 } from "~/components/shared/PageTitle";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { AllPosts } from "~/lib/posts/types";

export const PostsView = ({ posts }: { posts: AllPosts }) => {
  return (
    <PageContainer>
      <SiteHeader />
      <Container>
        <ViewH1>Posts</ViewH1>
        <PostSummaries posts={posts} />
      </Container>
      <SiteFooter />
    </PageContainer>
  );
};
