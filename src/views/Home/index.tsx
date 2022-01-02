import Image from "next/image";
import Link from "next/link";

import { Box } from "~/components/core/Box";
import { Button } from "~/components/core/Button";
import { Container } from "~/components/core/Container";
import { Flex } from "~/components/core/Flex";
import { Heading } from "~/components/core/Heading";
import { Section } from "~/components/core/Section";
import { SectionHeading } from "~/components/core/SectionHeading";
import { Text } from "~/components/core/Text";
import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { AllPosts, PostMeta } from "~/lib/posts/types";
import { darkTheme, lightTheme } from "~/styles/stitches.config";

export const HomeView = ({ allPostsData }: { allPostsData: AllPosts }) => {
  return (
    <PageContainer>
      <SiteHeader />
      <Container size={"3"}>
        <Section size={{ "@initial": "none", "@bp1": "loose" }}>
          <Flex
            direction={{ "@initial": "column", "@bp1": "row" }}
            align={"center"}
            css={{ "@bp1": { alignItems: "center", gap: "$8" } }}
          >
            <Box css={{ maxWidth: "50%" }}>
              <Image src={"/img/chase-hex.png"} width={350} height={350} />
            </Box>
            <Flex
              direction={"column"}
              css={{
                mx: "$5",
                "@bp1": {
                  m: 0,
                },
              }}
            >
              <Box
                as="p"
                css={{
                  fontSize: "$4xl",
                  fontWeight: "bold",
                  pb: "$4",
                  textAlign: "center",
                  "@bp1": {
                    textAlign: "left",
                  },
                  [`.${darkTheme} &`]: {
                    color: "$blue400",
                  },
                  [`.${lightTheme} &`]: {
                    color: "$blue700",
                  },
                }}
              >
                Hey, I'm Chase!
              </Box>
              <Heading
                as="h2"
                level="h3"
                css={{
                  fontWeight: "normal",
                  textAlign: "center",
                  "@bp1": {
                    textAlign: "left",
                  },
                }}
              >
                I create strong, resilient teams and build human-centric
                software.
              </Heading>
              <Flex
                align={{ "@initial": "start", "@md": "center" }}
                direction={{ "@initial": "column", "@md": "row" }}
                justify={"between"}
                css={{
                  "@md": {
                    mt: "$8",
                  },
                }}
              >
                <Link href="/about-me" passHref>
                  <Text
                    as="a"
                    css={{
                      mx: "auto",
                      py: "$4",
                      "@bp1": {
                        mx: "inherit",
                      },
                    }}
                  >
                    Learn More About Me
                  </Text>
                </Link>
                <Box
                  css={{
                    mt: "$6",
                    mx: "auto",
                    "@bp1": {
                      mt: 0,
                      mx: "inherit",
                    },
                  }}
                >
                  <Link href="/posts" passHref>
                    <Button as="a" color={"blue"} radii={"full"}>
                      Read my blog
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Section>
        <CurrentWork shouldRender={false} />
        <Writing posts={allPostsData} />
      </Container>
      <SiteFooter />
    </PageContainer>
  );
};

const Writing = ({ posts }: { posts: Array<PostMeta> }) => {
  return (
    <Section size={"loose"}>
      <SectionHeading>What I'm Writing</SectionHeading>
      <PostSummaries posts={posts} />
      <Flex
        align={"center"}
        justify={{ "@initial": "center", "@bp1": "end" }}
        css={{
          pt: "$8",
        }}
      >
        <Link href="/posts" passHref>
          <Button as="a" radii={"full"}>
            Start reading the blog
          </Button>
        </Link>
      </Flex>
    </Section>
  );
};

const CurrentWork = ({ shouldRender }: { shouldRender: boolean }) => {
  // TODO write something for this, I was too lazy to just remove the component
  if (!shouldRender) return null;

  return (
    <Section size={"loose"}>
      <SectionHeading>What I'm Working On</SectionHeading>
      <Flex css={{ flexBasis: "3fr" }}>
        <div>
          <Heading level="h3">Murmur</Heading>
        </div>
        <div>
          <Heading level={"h3"}>Pizza</Heading>
        </div>
      </Flex>
    </Section>
  );
};
