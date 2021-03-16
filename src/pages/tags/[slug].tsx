import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { css } from "styled-components";

import HeaderWrapper from "~/components/HeaderWrapper";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import Title from "~/components/Title";
import DefaultLayout from "~/layouts/Default";
import { getTags, getTagsMap } from "~/lib/posts";
import type { PostMeta, Tag } from "~/lib/posts/types";
import { resetList } from "~/styles/resets";

const PostList = ({ posts }: { posts: Array<PostMeta> }) => {
  return (
    <ul
      css={css`
        ${resetList}
      `}
    >
      {posts
        .filter(({ status }) => status === "published")
        .map(({ id, description, title }) => (
          <li
            css={css`
              padding-bottom: 1.5rem;
            `}
            key={id}
          >
            <h3>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <div>{description ?? <em>no description.</em>}</div>
          </li>
        ))}
    </ul>
  );
};

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
          <PostList posts={tag.posts} />

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
