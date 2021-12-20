import type { GetStaticProps } from "next";

import { PageMetaHead } from "~/components/shared/PageMeta";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";
import { HomeView } from "~/views/Home";

export default function HomePage({ allPostsData }: { allPostsData: AllPosts }) {
  return (
    <>
      <PageMetaHead page={{ title: "Chase Adams" }} shouldAppendTag={false} />
      <HomeView allPostsData={allPostsData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData({ limit: 12 });

  return {
    props: {
      allPostsData,
    },
  };
};
