import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { ViewH1 } from "~/components/shared/PageTitle";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { AllPosts } from "~/lib/posts/types";

export const PostsView = ({ posts }: { posts: AllPosts }) => {
  return (
    <div className="page-container">
      <SiteHeader />
      <div className="section-container">
        <ViewH1>Posts</ViewH1>
        <PostSummaries posts={posts} />
      </div>
      <SiteFooter />
    </div>
  );
};
