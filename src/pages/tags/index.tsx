import type { GetStaticProps, NextPage } from "next";

import { PageMetaHead } from "~/components/shared/PageMeta";
import { getTags } from "~/lib/posts";
import type { Tag } from "~/lib/posts/types";
import { TagsView } from "~/views/Tags";

type Props = { allTagsData: Array<Tag> };

const TagsPage: NextPage<Props> = ({ allTagsData }) => {
  return (
    <>
      <PageMetaHead page={{ title: "All Post Tags" }} />
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
