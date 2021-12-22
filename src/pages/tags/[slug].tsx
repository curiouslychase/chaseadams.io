import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { DarkModeContainer } from "~/components/shared/DarkModeContainer";
import { PageMetaHead } from "~/components/shared/PageMeta";
import { getTags, getTagsMap } from "~/lib/posts";
import type { Tag } from "~/lib/posts/types";
import { TagView } from "~/views/Tag";

type Props = { tag: Tag };

const TagPage: NextPage<Props> = ({ tag }) => {
  return (
    <DarkModeContainer>
      <PageMetaHead page={{ title: `Posts tagged with "${tag.text}"` }} />
      <TagView tag={tag} />
    </DarkModeContainer>
  );
};

export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTags().map(({ slug }) => slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let tag: Tag = {
    text: "",
    slug: "",
    posts: [],
  };

  if (params?.slug && typeof params.slug === "string") {
    tag = getTagsMap()[`/tags/${params.slug}`];
  }

  return {
    props: {
      tag,
    },
  };
};
