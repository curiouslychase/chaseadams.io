import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";
import Link from "next/link";
import { css } from "styled-components";

import Date from "~/components/Date";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import ShareLink from "~/components/ShareLink";
import TableOfContents from "~/components/TableOfContents";
import Title from "~/components/Title";
import DefaultLayout from "~/layouts/Default";
import { getAllPostIds, getPostData } from "~/lib/posts";
import type { Post, Tag } from "~/lib/posts/types";

type Props = {
  post: Post;
};

const postStyles = css`
  p > code {
    padding-top: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    border-color: var(--color-muted);
    border-width: 1px;
    border-style: solid;
    background-color: var(--color-accent);
    border-radius: 3px;
  }

  a {
    transition: box-shadow 400ms ease 0s;
    box-shadow: 0px 1px 0px var(--color-primary);
    text-shadow: -1px 2px 0px var(--color-background);

    &:hover {
      text-decoration: none;
      transition: box-shadow 100ms ease 0s;
      box-shadow: 0px 3px 0px var(--color-primary);
    }
  }

  table {
    width: 100%;
    th {
      text-align: left;
    }
  }
`;

const PostMetaHead = ({ post }: Props) => {
  const imageUrl = `https://chaseadams.io${
    post.image ?? "/img/share/default.jpg"
  }`;
  return (
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
  );
};
const TagsList = ({ tags }: { tags: Array<Tag> }) => {
  if (!tags.length) return null;

  return (
    <div>
      <span
        style={{
          display: "block",
          fontSize: "1.25rem",
          fontWeight: "bold",
        }}
      >
        Tags
      </span>
      <ul>
        {tags.map((tag) => (
          <li key={tag.slug}>
            <Link href={tag.slug}>
              <a>{tag.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PostBody = ({ post }: Props) => {
  const content = hydrate(post.mdxSource);

  const { headings, title, slug, tags, date } = post;

  return (
    <div
      css={css`
        display: block;

        @media (min-width: 1084px) {
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
        }

        & aside {
          max-width: 20rem;
          position: sticky;
          top: 5rem;
          max-height: calc(100vh - 5rem);
          display: none;

          @media (min-width: 1084px) {
            display: block;
          }
        }

        & article {
          width: 100%;
          @media (min-width: 1084px) {
            max-width: 45rem;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          scroll-margin-top: 1rem;
        }
      `}
    >
      <aside>
        <TableOfContents headings={headings} />
      </aside>
      <div>
        <article>
          <Title size="M">{title}</Title>
          <div css={postStyles}>{content}</div>
        </article>
        <ShareLink
          siteUrl={`https://chaseadams.io`}
          permalink={slug}
          title={title}
          tags={tags.map(({ text }) => text)}
        />
        <TagsList tags={tags} />

        <div
          css={css`
            margin-top: 0.5rem;
            margin-bottom: 2rem;
            color: var(--color-text);
          `}
        >
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <DefaultLayout>
      <PostMetaHead post={post} />
      <MaxWidthWrapper>
        <PostBody post={post} />
      </MaxWidthWrapper>
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
