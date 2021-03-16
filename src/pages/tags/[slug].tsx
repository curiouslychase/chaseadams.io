import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import HeaderWrapper from "~/components/HeaderWrapper";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import Title from "~/components/Title";
import TagPostList from "~/containers/views/Tag";
import DefaultLayout from "~/layouts/Default";
import { getTags, getTagsMap } from "~/lib/posts";
import type { Tag } from "~/lib/posts/types";

export default function TagPage({ tag }: { tag: Tag }) {
  const title = `Posts tagged with '${tag.text}'`;
  return (
    <DefaultLayout>
      <MaxWidthWrapper>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <HeaderWrapper>
            <Title size="M">{title}</Title>
          </HeaderWrapper>

          <TagPostList posts={tag.posts} />
          <Link href="/tags/">
            <a>All Tags</a>
          </Link>
        </main>
      </MaxWidthWrapper>
    </DefaultLayout>
  );
}

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
