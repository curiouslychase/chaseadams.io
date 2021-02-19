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

        <meta name="og:title" content={post.title} />

        <meta name="og:type" content="website" />
        <meta
          name="og:image"
          content={post.image ?? "/img/share/default.jpg"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@chaseadamsio" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:image"
          content={post.image ?? "/img/share/default.jpg"}
        />
        {post.description && (
          <>
            <meta name="description" content={post.description} />
            <meta name="twitter:description" content={post.description} />
            <meta name="og:description" content={post.description} />
          </>
        )}
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
