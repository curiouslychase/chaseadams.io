import Link from "next/link";

import { Box } from "~/components/core/Box";
import { Container } from "~/components/core/Container";
import { Flex } from "~/components/core/Flex";
import { Section } from "~/components/core/Section";
import { Text } from "~/components/core/Text";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";
import { darkTheme, lightTheme } from "~/styles/stitches.config";

export const SiteFooter = () => {
  return (
    <Box
      as="div"
      css={{
        justifySelf: "flex-end",
        marginBlockStart: "auto",
        pb: "$8",
        pt: "$4",
        px: "$6",
        "@bp1": {
          px: 0,
        },
        [`.${darkTheme} &`]: {
          backgroundColor: "$navy900",
        },
        [`.${lightTheme} &`]: {
          backgroundColor: "$slate200",
        },
      }}
    >
      <Container size={"3"}>
        <Section size={"loose"}>
          <Flex
            direction={{ "@initial": "column", "@bp1": "row" }}
            justify={"between"}
          >
            <div>
              <Text as="h3" css={{ fontSize: "$2xl", pb: "$4" }}>
                chaseadams.io
              </Text>
              <Flex as="ul" css={{ flexDirection: "column", gap: "$2" }}>
                <li>
                  <Link href="/posts">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-me">
                    <a>About Me</a>
                  </Link>
                </li>
                <Box as="li" css={{ pt: "$6" }}>
                  <Text
                    as="h3"
                    css={{
                      fontSize: "$xl",
                      pb: "$3",
                      textTransform: "lowercase",
                    }}
                  >
                    Tools
                  </Text>
                  <ul>
                    <li>
                      <Link href="/tools/percentage-to-hexadecimal-converter/">
                        <a>Percentage To Hexadecimal Converter</a>
                      </Link>
                    </li>
                  </ul>
                </Box>
              </Flex>
            </div>
            <Box css={{ mt: "$4" }}>
              <div>
                <Text
                  as="h3"
                  css={{
                    fontSize: "$2xl",
                    pb: "$4",
                    textTransform: "lowercase",
                  }}
                >
                  Connect
                </Text>
                <Flex as="ul" css={{ flexDirection: "column", gap: "$2" }}>
                  <li>
                    <a href="https://github.com/chaseadamsio">
                      chaseadamsio on GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/chaseadamsio">
                      chaseadamsio on Twitter
                    </a>
                  </li>
                </Flex>
              </div>
            </Box>
          </Flex>
        </Section>
      </Container>
      <Container size={"3"} as="div">
        <Flex
          css={{ mt: "$4", "@bp1": { mt: 0 } }}
          align={{ "@initial": "center", "@bp1": "end" }}
          justify={{ "@initial": "center", "@bp1": "end" }}
        >
          <ThemeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};
