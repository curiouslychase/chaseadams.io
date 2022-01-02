import type { GetStaticProps } from "next";

import { PageMetaHead } from "~/components/shared/PageMeta";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";
import { PostsView } from "~/views/Posts";

const PostsPage = ({ allPostsData }: { allPostsData: AllPosts }) => {
  return (
    <>
      <PageMetaHead
        page={{
          title: "Posts",
        }}
      />
      <PostsView posts={allPostsData} />
    </>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
