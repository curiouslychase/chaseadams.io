import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";

import DefaultLayout from "~/containers/layouts/Default";
import PostView from "~/containers/views/Post";
import { getAllPostIds, getPostData } from "~/lib/posts";
import type { Post } from "~/lib/posts";

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }: { post: Post }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>{post.title} | Chase Adams</title>
      </Head>
      <PostView {...post} />
    </DefaultLayout>
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
