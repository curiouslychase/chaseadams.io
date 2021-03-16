import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { css } from "styled-components";

import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import PostList from "~/components/PostList";
import DefaultLayout from "~/layouts/Default";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts/types";
import { centerHorizontal } from "~/styles/helpers";

const Hero = () => (
  <section
    css={css`
      display: flex;
      align-items: center;
      padding-bottom: 3rem;

      @media (${({ theme }) => theme.responsive.phone}) {
        display: block;
        padding-top: 2rem;
        text-align: center;
      }
    `}
  >
    <img
      css={css`
        width: 256px;

        @media (${({ theme }) => theme.responsive.phone}) {
          ${centerHorizontal};
        }
      `}
      src="/img/chaseadams.png"
    />
    <p
      css={css`
        padding-top: 1rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        font-size: 1.25rem;
      `}
    >
      I enable building strong, resilient teams by creating human-centric
      software and self-management frameworks.
    </p>
  </section>
);

export default function Home({ allPostsData }: { allPostsData: AllPosts }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Chase Adams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MaxWidthWrapper>
        <main
          css={css`
            @media (${({ theme }) => theme.responsive.phone}) {
              text-align: center;
            }
          `}
        >
          <Hero />
          <section>
            <h2>Latest Writing</h2>
            <PostList posts={allPostsData} />
            <Link href="/writing">
              <a>All Writing</a>
            </Link>
          </section>
        </main>
      </MaxWidthWrapper>
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
