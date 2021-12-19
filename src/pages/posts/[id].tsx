import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";

import { getAllPostIds, getPostData } from "~/lib/posts";
import type { Post } from "~/lib/posts/types";
import { PostView } from "~/views/Post";

type Props = { post: Post };

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostView post={post} />
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (typeof params?.id === "string") {
    const post = await getPostData(params.id);
    return {
      props: {
        post,
      },
    };
  }
  return { props: {} };
};
