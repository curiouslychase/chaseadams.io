import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { Box } from "~/components/core/Box";
import { Button } from "~/components/core/Button";
import { Container } from "~/components/core/Container";
import { Flex } from "~/components/core/Flex";
import { Section } from "~/components/core/Section";
import { Text } from "~/components/core/Text";
import { Blob, BlobBox } from "~/components/SiteHeader/components/Blob";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";
import { darkTheme, lightTheme, styled } from "~/styles/stitches.config";

type UseToggleTuple = [toggled: boolean, handlers: { toggle: () => void }];

const useToggle = (initialOpen = false): UseToggleTuple => {
  const [toggled, setToggled] = useState(initialOpen);

  const toggle = useCallback(() => {
    setToggled((prevVal) => !prevVal);
  }, [setToggled]);

  return [toggled, { toggle }];
};

const StyledSiteHeaderButton = styled("a", {
  borderRadius: "4px",
  display: "block",
  p: "$6",
  "@bp1": {
    p: "$4",
  },
  [`.${darkTheme} &`]: {
    "&.active, &:hover": {
      background: "$blue500",
      color: "$slate50",
    },
  },
  [`.${lightTheme} &`]: {
    "&.active, &:hover": {
      background: "$blue500",
      color: "$slate50",
    },
  },
});

const ListItem = styled("li", {
  borderBottomStyle: "solid",
  borderBottomWidth: "2px",
  "&:last-child": {
    borderBottom: "none",
  },
  "@bp1": {
    borderBottom: "none",
    pr: "$4",
  },
  [`.${darkTheme} &`]: {
    borderColor: `$navy800`,
  },
  [`.${lightTheme} &`]: {
    borderColor: `$slate300`,
  },
});

const HoverShowText = styled(Text, {});

export const SiteHeader = () => {
  const { asPath } = useRouter();
  const [toggled, { toggle }] = useToggle();

  return (
    <Container size={"3"}>
      <Section as="div" css={{}} size={{ xs: "none", "@bp1": "lg" }}>
        <Box
          as="nav"
          css={{
            backgroundColor: "$background",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: "100",
            p: "$4",
            "@bp2": {
              position: "relative",
              p: 0,
            },
          }}
        >
          <Flex css={{ alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Link href="/">
                <Flex
                  as="a"
                  css={{
                    alignItems: "center",
                    position: "relative",
                    height: "64px",
                    width: "64px",
                    [`.${darkTheme} &`]: {
                      color: "$blue600",
                      "@bp2": {
                        color: "$blue400",
                      },
                    },
                    [`.${lightTheme} &`]: {
                      color: "$blue600",
                    },
                    [`&:hover ${HoverShowText}`]: {
                      display: "block",
                      [`.${darkTheme} &`]: {
                        color: "$blue400",
                      },
                      [`.${lightTheme} &`]: {
                        color: "$blue600",
                      },
                    },
                    [`&:hover ${BlobBox}`]: {
                      // md:group-hover:translate-x-2 md:group-hover:w-10 md:group-hover:-ml-11 transition-all
                      ml: "-$8",
                      transform: "scale(.7) translateX(0.5rem)",
                      [`.${darkTheme} &`]: {
                        color: "$red500",
                      },
                      [`.${lightTheme} &`]: {
                        color: "$red400",
                      },
                    },
                  }}
                >
                  <span style={{ position: "absolute" }}>
                    <Blob />
                  </span>
                  <Flex
                    css={{
                      fontWeight: "bold",
                      ml: "$3",
                      mb: "$2",
                      zIndex: 10,
                      [`.${darkTheme} &`]: {
                        color: "$white",
                        "@bp2": {
                          color: "$black",
                        },
                      },
                      [`.${lightTheme} &`]: {
                        color: "$black",
                        "@bp2": {
                          color: "$slate50",
                        },
                      },
                    }}
                  >
                    <Text size={"3xl"}>c</Text>
                    <HoverShowText
                      css={{
                        display: "block",
                        "@md": {
                          display: "none",
                        },
                      }}
                      size={"3xl"}
                    >
                      hase
                    </HoverShowText>
                    <Text size={"3xl"}> a</Text>
                    <HoverShowText
                      css={{
                        display: "block",
                        "@md": {
                          display: "none",
                        },
                      }}
                      size={"3xl"}
                    >
                      dams
                    </HoverShowText>
                  </Flex>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Button
                css={{
                  "@bp1": {
                    display: "none",
                  },
                }}
                color={"hollow"}
                radii={"full"}
                spacing={"lg"}
                onClick={toggle}
              >
                {toggled ? "Close " : "Menu"}
              </Button>

              <Flex
                as="ul"
                css={{
                  bottom: 0,
                  display: toggled ? "block" : "none",
                  position: "fixed",
                  top: "96px",
                  left: 0,
                  textAlign: "center",
                  width: "100%",
                  "@bp1": {
                    alignItems: "center",
                    display: "flex",
                    gap: "$3",
                    justifyContent: "flex-end",
                    position: "relative",
                    textAlign: "left",
                    textTransform: "lowercase",
                    top: 0,
                    visibility: "visible",
                  },

                  [`.${darkTheme} &`]: {
                    backgroundColor: "$navy900",
                    "@bp1": {
                      backgroundColor: "transparent",
                    },
                  },
                  [`.${lightTheme} &`]: {
                    backgroundColor: "$slate200",
                    "@bp1": {
                      backgroundColor: "transparent",
                    },
                  },
                }}
              >
                <ListItem>
                  <Link href="/">
                    <StyledSiteHeaderButton
                      css={{
                        "@bp1": {
                          display: "none",
                        },
                      }}
                      onClick={() => asPath === "/" && toggle()}
                    >
                      Home
                    </StyledSiteHeaderButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/posts">
                    <StyledSiteHeaderButton
                      className={asPath === "/posts/" ? "active" : ""}
                      onClick={() => asPath === "/posts/" && toggle()}
                    >
                      Blog
                    </StyledSiteHeaderButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/about-me">
                    <StyledSiteHeaderButton
                      className={asPath === "/about-me/" ? "active" : ""}
                      onClick={() => asPath === "/about-me/" && toggle()}
                    >
                      About
                    </StyledSiteHeaderButton>
                  </Link>
                </ListItem>
                <ListItem css={{ marginTop: "$8", "@bp1": { marginTop: 0 } }}>
                  <ThemeSwitcher type={"iconOnly"} responsiveText={true} />
                </ListItem>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Section>
    </Container>
  );
};
