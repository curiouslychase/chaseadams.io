import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";

import PostView from "~/containers/views/Post";
import DefaultLayout from "~/layouts/Default";
import { getAllPostIds, getPostData } from "~/lib/posts";
import type { Post } from "~/lib/posts/types";

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }: { post: Post }) => {
  const imageUrl = `https://chaseadams.io${
    post.image ?? "/img/share/default.jpg"
  }`;

  return (
    <DefaultLayout>
      <Head>
        <title>{post.title} | Chase Adams</title>

        <meta name="og:title" content={post.title} />

        <meta name="og:type" content="website" />
        <meta name="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@chaseadamsio" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:image" content={imageUrl} />
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
