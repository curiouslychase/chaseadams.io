import Link from "next/link";

import { Box } from "~/components/core/Box";
import { Flex } from "~/components/core/Flex";
import { Heading } from "~/components/core/Heading";
import { Text } from "~/components/core/Text";
import type { PostMeta, Tag as TagType } from "~/lib/posts/types";
import { darkTheme, lightTheme } from "~/styles/stitches.config";

export const PostSummary = ({ post }: { post: PostMeta }) => {
  return (
    <Flex
      as="article"
      css={{
        borderRadius: "8px",
        flexDirection: "column",
        p: "$6",
        transition: "all .25s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        [`.${darkTheme} &`]: {
          backgroundColor: "$navy900",
        },
        [`.${lightTheme} &`]: {
          backgroundColor: "$slate200",
        },
      }}
      key={post.id}
    >
      <Text
        css={{
          [`.${darkTheme} &`]: {
            color: "$slate400",
          },
          [`.${lightTheme} &`]: {
            color: "$slate500",
          },
          pb: "$3",
        }}
        size={"md"}
      >
        Posted on <time dateTime={post.date}>{post.date} </time>
      </Text>
      <Heading as="h3" level={"h5"}>
        <Link href={`/posts/${post.slug}`}>
          <Text
            as="a"
            css={{
              display: "block",
              pb: "$5",
              [`.${darkTheme} &`]: {
                color: "$slate300",
                "&:hover": {
                  color: "$blue400",
                },
              },
              [`.${lightTheme} &`]: {
                color: "$blue600",
                "&:hover": {
                  color: "$blue700",
                },
              },
            }}
          >
            {post.title}
          </Text>
        </Link>
      </Heading>
      <Box
        css={{
          fontSize: "$lg",
          lineHeight: "1.75rem",
          pb: "$5",
          [`.${darkTheme} &`]: {
            color: "$slate400",
          },
          [`.${lightTheme} &`]: {
            color: "$slate600",
          },
        }}
      >
        {post.description}
      </Box>
      {post.tags?.length ? <Tags tags={post.tags} /> : null}
    </Flex>
  );
};

const Tags = ({ tags }: { tags: Array<TagType> }) => {
  return (
    <Box
      css={{
        marginBlockStart: "auto",
        pt: "$1",
      }}
    >
      {tags?.map((tag, idx) => (
        <Text size={"base"} key={tag.slug}>
          <Tag tag={tag} />
          {tags && idx < tags?.length - 1 ? ", " : ""}
        </Text>
      ))}
    </Box>
  );
};

const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <span key={tag.slug}>
      <Link href={tag.slug}>
        <Text
          as="a"
          css={{
            [`.${darkTheme} &`]: {
              color: "$blue200",
              "&:hover": {
                color: "$blue400",
              },
            },
            [`.${lightTheme} &`]: {
              color: "$blue400",
              "&:hover": {
                color: "$blue600",
              },
            },
          }}
          size={"sm"}
        >
          {tag.text}
        </Text>
      </Link>
    </span>
  );
};
