import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import HeaderWrapper from "~/components/HeaderWrapper";
import Title from "~/components/Title";
import DefaultLayout from "~/containers/layouts/Default";
import { getTags } from "~/lib/posts";
import type { Tag } from "~/lib/posts";

export default function Tags({ allTagsData }: { allTagsData: Array<Tag> }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Chase Adams | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
