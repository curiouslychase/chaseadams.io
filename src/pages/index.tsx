import type { GetStaticProps } from "next";
import Head from "next/head";

import HomeView from "~/containers/views/Home";
import DefaultLayout from "~/layouts/Default";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";

export default function Home({ allPostsData }: { allPostsData: AllPosts }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Chase Adams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeView allPostsData={allPostsData} />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData({ limit: 5 });

  return {
    props: {
      allPostsData,
    },
  };
};
