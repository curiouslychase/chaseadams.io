import type {
  GetStaticPaths,
  NextPage,
  GetStaticPropsContext,
  GetStaticProps,
} from "next";
import Head from "next/head";

import Layout from "~/components/layout";
import { getAllPostIds, getPostData } from "~/lib/posts";
import type { Post } from "~/lib/posts";
import Date from "~/components/date";

type Props = {
  postData: Post;
};

const PostPage: NextPage<Props> = ({ postData }: { postData: Post }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Chase Adams</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
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
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }
  return { props: {} };
};
