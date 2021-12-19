import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { getTags } from "~/lib/posts";
import type { Tag } from "~/lib/posts/types";
import { TagsView } from "~/views/Tags";

type Props = { allTagsData: Array<Tag> };

const TagsPage: NextPage<Props> = ({ allTagsData }) => {
  return (
    <>
      <Head>
        <title>All Tags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TagsView tags={allTagsData} />
    </>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps = async () => {
  const allTagsData = getTags();

  return {
    props: {
      allTagsData,
    },
  };
};
