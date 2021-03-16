import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import HeaderWrapper from "~/components/HeaderWrapper";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import Title from "~/components/Title";
import DefaultLayout from "~/layouts/Default";
import { getTags } from "~/lib/posts";
import type { Tag } from "~/lib/posts/types";

export default function Tags({ allTagsData }: { allTagsData: Array<Tag> }) {
  return (
    <DefaultLayout>
      <Head>
        <title>All Tags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MaxWidthWrapper>
        <main>
          <HeaderWrapper>
            <Title>Tags</Title>
          </HeaderWrapper>
          {allTagsData.map(({ text, slug }) => (
            <div>
              <Link href={slug}>
                <a>{text}</a>
              </Link>
            </div>
          ))}
        </main>
      </MaxWidthWrapper>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allTagsData = getTags();

  return {
    props: {
      allTagsData,
    },
  };
};
