import type { GetStaticProps } from "next";

import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";
import HomeView from "~/views/Home";

export default function HomePage({ allPostsData }: { allPostsData: AllPosts }) {
  return <HomeView allPostsData={allPostsData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData({ limit: 9 });

  return {
    props: {
      allPostsData,
    },
  };
};
