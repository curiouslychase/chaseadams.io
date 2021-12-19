import type { GetStaticProps } from "next";
import Head from "next/head";

import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";
import { PostsView } from "~/views/Posts";

const PostsPage = ({ allPostsData }: { allPostsData: AllPosts }) => {
  return (
    <>
      <Head>
        <title>Chase Adams | Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
