import { Grid } from "~/components/core/Grid";
import { PostSummary } from "~/components/modules/Post/PostSummary";
import type { PostMeta } from "~/lib/posts/types";

export const PostSummaries = ({ posts }: { posts: Array<PostMeta> }) => {
  return (
    <Grid
      css={{
        gap: "$6",
        gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
        "@md": { gridTemplateColumns: `repeat(2, minmax(0, 1fr))` },
        "@lg": { gridTemplateColumns: `repeat(3, minmax(0, 1fr))` },
      }}
    >
      {posts.map((post) => (
        <PostSummary key={post.slug} post={post} />
      ))}
    </Grid>
  );
};
