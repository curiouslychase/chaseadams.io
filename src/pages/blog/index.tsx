import type { GetStaticProps } from "next";
import Head from "next/head";

import HeaderWrapper from "~/components/HeaderWrapper";
import PostList from "~/components/PostList";
import Title from "~/components/Title";
import DefaultLayout from "~/containers/layouts/Default";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";

export default function Home({ allPostsData }: { allPostsData: AllPosts }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Chase Adams | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderWrapper>
          <Title>Blog</Title>
        </HeaderWrapper>
        <PostList posts={allPostsData} />
      </main>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
