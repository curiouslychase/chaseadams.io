import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";

import { DarkModeContainer } from "~/components/shared/DarkModeContainer";
import { PageMetaHead } from "~/components/shared/PageMeta";
import { getAllPostIds, getPostData } from "~/lib/posts";
import type { Post } from "~/lib/posts/types";
import { PostView } from "~/views/Post";

type Props = { post: Post };

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <DarkModeContainer>
      <PageMetaHead page={post} />
      <PostView post={post} />
    </DarkModeContainer>
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
