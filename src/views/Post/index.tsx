import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

import { Box } from "~/components/core/Box";
import { Container } from "~/components/core/Container";
import { Flex } from "~/components/core/Flex";
import { Grid } from "~/components/core/Grid";
import { Heading } from "~/components/core/Heading";
import { Section } from "~/components/core/Section";
import { Text } from "~/components/core/Text";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { Post } from "~/lib/posts/types";
import { darkTheme, lightTheme } from "~/styles/stitches.config";

type Props = { post: Post };

export const PostView = ({ post }: Props) => {
  return (
    <PageContainer>
      <SiteHeader />
      <PostBody post={post} />
      <SiteFooter />
    </PageContainer>
  );
};

const PostBody = ({ post }: Props) => {
  const { headings, title, tags, date } = post;

  return (
    <Container size={"3"}>
      <Section as="div" size={{ "@bp1": "loose" }}>
        <Flex
          css={{
            flexDirection: "column",
            gap: "$8",
            justifyContent: "space-between",
            "@lg": {
              flexDirection: "row",
            },
          }}
        >
          <div>
            <article>
              <Box
                as="header"
                css={{ mb: "$6", px: "$6", "@bp1": { mb: "$8", px: 0 } }}
              >
                <Heading level={"h1"}>{title}</Heading>
                <Box
                  css={{
                    [`.${darkTheme} &`]: {
                      color: "$slate400",
                    },
                    [`.${lightTheme} &`]: {
                      color: "$slate600",
                    },
                    fontSize: "$base",
                    mt: "$2",
                  }}
                >
                  Published <time dateTime={date}>{date}</time>
                </Box>
              </Box>

              <Grid
                css={{
                  mx: "auto",
                  gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
                  "& > *": {
                    gridColumn: "span 10 / span 10",
                    gridColumnStart: "2",
                  },
                  "& p": {
                    mt: "$6",
                    fontSize: "$lg",
                    lineHeight: "$relaxed",
                  },
                  "& h2": {
                    fontSize: "$2xl",
                    fontWeight: "bold",
                    lineHeight: "$snug",
                    mt: "$7",
                    mb: "$4",
                    [`.${darkTheme} &`]: {
                      color: "$blue400",
                    },
                    [`.${lightTheme} &`]: {
                      color: "$blue700",
                    },
                  },
                  "& h3": {
                    fontSize: "$xl",
                    fontWeight: "bold",
                    mt: "$8",
                    mb: "$4",
                    [`.${darkTheme} &`]: {
                      color: "$blue200",
                    },
                    [`.${lightTheme} &`]: {
                      color: "$blue500",
                    },
                    "& code:not(pre > code)": {
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderRadius: "4px",
                      p: "$1",
                      [`.${darkTheme} &`]: {
                        background: "$slate800",
                        borderColor: "$slate600",
                      },
                      [`.${lightTheme} &`]: {
                        background: "$slate200",
                        borderColor: "$blue300",
                      },
                    },
                  },
                  "& ul": {
                    fontSize: "$lg",
                    listStyle: "disc",
                    listStylePosition: "outside",
                    pl: "$7",
                    "& > li": {
                      lineHeight: "$relaxed",
                      pt: "$4",
                    },
                  },

                  '& pre[class*="language"]': {
                    backgroundColor: "$navy900",
                    borderRadius: "8px",
                    color: "$slate300",
                    fontSize: "1rem",
                    gridColumn: "span 12 / span 12",
                    hyphens: "none",
                    lineHeight: "$loose",
                    maxWidth: "100%",
                    minWidth: "100px",
                    fontFamily: "$mono",
                    mx: "$1",
                    my: "$7",
                    overflow: "hidden",
                    position: "relative",
                    tabSize: "4",
                    textAlign: "left",
                    whiteSpace: "pre",
                    width: "100%",
                    wordBreak: "normal",
                    wordSpacing: "normal",
                    "& > code": {
                      display: "block",
                      pb: "$7",
                      pr: "$4",
                      pl: "$4",
                      pt: "$4",
                      overflow: "auto",
                      // wrap markdown and make it nice
                      "&[class*=language-md]": {
                        px: "$7",
                        pt: "$6",
                        pb: "$8",
                        whiteSpace: "break-spaces",
                      },
                    },
                    "&::selection, & ::selection": {
                      backgroundColor: "$blue800",
                      textShadow: "none",
                    },
                    "& .token": {
                      "&.atrule": {
                        color: "#0adeff",
                      },
                      "&.atrule-id": {
                        color: "#eeebff",
                      },
                      "&.attr-name": {
                        color: "#c4b9fe",
                      },
                      "&.attr-value": {
                        color: "#0adeff",
                      },
                      "&.boolean": {
                        color: "#7efdd0",
                      },
                      "&.bold": {
                        fontWeight: "bold",
                      },
                      "&.class-name": {
                        color: "#dd92f6",
                      },
                      "&.comment, &.prolog, &.doctype, &.cdata": {
                        fontStyle: "italic",
                        color: "#dd92f677",
                      },
                      "&.constant": {
                        color: "#69b4f9",
                      },
                      "&.control": {
                        color: "#0adeff",
                      },
                      "&.deleted": {
                        textDecoration: "line-through",
                      },
                      "&.directive": {
                        color: "#0adeff",
                      },
                      "&.entity": {
                        color: "#7efdd0",
                      },
                      "&.function": {
                        color: "#9a86fd",
                      },
                      "&.important": {
                        color: "#c4b9fe",
                        fontWeight: "bold",
                      },
                      "&.inserted": {
                        borderBottom: "1px solid #eeebff",
                        textDecoration: "none",
                      },
                      "&.italic": {
                        fontStyle: "italic",
                      },
                      "&.keyword": {
                        color: "#69b4f9",
                      },
                      "&.number": {
                        color: "#dd92f6",
                      },
                      "&.operator": {
                        color: "#dd92f6",
                      },
                      "&.placeholder": {
                        color: "#ffcc99",
                      },
                      "&.property": {
                        color: "#9a86fd",
                      },
                      "&.property-access": {
                        color: "#9a86fd",
                        fontStyle: "italic",
                      },
                      "&.punctuation": {
                        color: "#c4b9fe",
                      },
                      "&.regex": {
                        color: "#0adeff",
                      },
                      "&.selector": {
                        color: "#eeebff",
                      },
                      "&.statement": {
                        color: "#0adeff",
                      },
                      "&.string": {
                        color: "#7efdd0",
                      },
                      "&.tag": {
                        color: "#dd92f6",
                      },
                      "&.tag-id": {
                        color: "#eeebff",
                      },
                      "&.unit": {
                        color: "#0adeff",
                      },
                      "&.url-reference": {
                        color: "#7efdd0",
                      },
                      "&.variable": {
                        color: "#ffcc99",
                      },
                    },
                  },
                  'pre[class*="language-"]::before': {
                    backgroundColor: "$navy800",
                    color: "$slate200",
                    [`.${lightTheme} &`]: {
                      backgroundColor: "$blue900",
                      color: "$white",
                    },
                    bottom: 0,
                    pr: "$3",
                    position: "absolute",
                    right: 0,
                    textAlign: "right",
                    width: "100%",
                  },
                  'pre[class*="language-asciidoc"]::before': {
                    content: "asciidoc",
                  },
                  'pre[class*="language-bash"]::before': {
                    content: "bash",
                  },
                  'pre[class*="language-css"]::before': {
                    content: "css",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-diff"]::before': {
                    content: "diff",
                  },
                  'pre[class*="language-flow"]::before': {
                    content: "flow",
                  },
                  'pre[class*="language-graphql"]::before': {
                    content: "GraphQL",
                  },
                  'pre[class*="language-go"]::before': {
                    content: "golang",
                  },
                  'pre[class*="language-html"]::before': {
                    content: "html",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-javascript"]::before, pre[class*="language-js"]::before': {
                    content: "js",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-json"]::before, pre[class*="language-json5"]::before': {
                    content: "json",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-jsx"]::before': {
                    content: "jsx",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-lisp"]::before': {
                    content: "lisp",
                  },
                  'pre[class*="language-logs"]::before': {
                    content: "logs",
                  },
                  'pre[class*="language-md"]::before, pre[class*="language-markdown"]::before': {
                    content: "markdown",
                  },
                  'pre[class*="language-mdx"]::before': {
                    content: "mdx",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-sh"]::before': {
                    content: "sh",
                  },
                  'pre[class*="language-shell"]::before': {
                    content: "shell",
                  },
                  'pre[class*="language-text"]::before': {
                    content: "text",
                  },
                  'pre[class*="language-toml"]::before': {
                    content: "toml",
                    textTransform: "uppercase",
                  },
                  'pre[class*="language-tsx"]::before': {
                    content: "tsx",
                  },
                  'pre[class*="language-typescript"]::before, pre[class*="language-ts"]::before': {
                    content: "ts",
                  },
                  'pre[class*="language-yaml"]::before': {
                    content: "yaml",
                    textTransform: "uppercase",
                  },
                  "& code:not(pre > code)": {
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "4px",
                    p: "$1",
                    [`.${darkTheme} &`]: {
                      background: "$slate800",
                      borderColor: "$slate600",
                    },
                    [`.${lightTheme} &`]: {
                      background: "$slate200",
                      borderColor: "$blue300",
                    },
                  },
                }}
              >
                <MDXRemote {...post.mdxSource} />
              </Grid>
            </article>
            <Grid
              css={{
                gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
              }}
            >
              <Box
                css={{
                  gridColumnStart: "2",
                  gridColumn: "span 10 / span 10",
                  px: "$6",
                  "@bp1": {
                    px: 0,
                  },
                }}
              >
                {tags.length ? <TagsList tags={tags} /> : null}
              </Box>
            </Grid>
          </div>
          {headings?.length ? <TOC headings={headings} /> : null}
        </Flex>
      </Section>
    </Container>
  );
};

const TOC = ({ headings }: { headings: Post["headings"] }) => {
  return (
    <Box
      as="aside"
      css={{
        fontSize: "$base",
        px: "$6",
        "@bp1": {
          maxWidth: "20rem",
          maxHeight: "5rem",
          position: "sticky",
          px: 0,
          top: "5rem",
        },
      }}
    >
      <Heading level="h4">In this post</Heading>
      <ul>
        {headings?.map((heading) => (
          <Box as="li" css={{ pt: "$3" }} key={heading.slug}>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </Box>
        ))}
      </ul>
    </Box>
  );
};

const TagsList = ({ tags }: { tags: Post["tags"] }) => {
  return (
    <Box css={{ fontSize: "$base", py: "$8" }}>
      <Text css={{ fontWeight: "bold" }}>Tagged with: </Text>
      {tags.map((tag, idx) => (
        <span key={tag.slug}>
          <Link href={tag.slug}>
            <a>{tag.text}</a>
          </Link>
          {tags && idx < tags?.length - 1 ? ", " : ""}
        </span>
      ))}
    </Box>
  );
};
