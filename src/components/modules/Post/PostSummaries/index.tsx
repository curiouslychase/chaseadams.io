import { PostSummary } from "~/components/modules/Post/PostSummary";
import type { PostMeta } from "~/lib/posts/types";

export const PostSummaries = ({ posts }: { posts: Array<PostMeta> }) => {
  return (
    <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <PostSummary key={post.slug} post={post} />
      ))}
    </div>
  );
};
