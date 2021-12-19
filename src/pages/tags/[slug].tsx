import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { getTags, getTagsMap } from "~/lib/posts";
import type { Tag } from "~/lib/posts/types";
import { TagView } from "~/views/Tag";

type Props = { tag: Tag };
const TagPage: NextPage<Props> = ({ tag }) => {
  return (
    <>
      <Head>
        <title>Tagged with "{tag.text}"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TagView tag={tag} />
    </>
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
