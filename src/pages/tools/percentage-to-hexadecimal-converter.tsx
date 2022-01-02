import { ChangeEvent, useCallback, useState } from "react";

import { Box } from "~/components/core/Box";
import { Button } from "~/components/core/Button";
import { Container } from "~/components/core/Container";
import { Flex } from "~/components/core/Flex";
import { Heading } from "~/components/core/Heading";
import { Section } from "~/components/core/Section";
import { Text } from "~/components/core/Text";
import { PageContainer } from "~/components/shared/PageContainer";
import { PageMetaHead } from "~/components/shared/PageMeta";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { darkTheme, lightTheme } from "~/styles/stitches.config";

type UsePercentageToHexadecimalConverterStateTuple = [
  values: {
    percentage: number;
    hexadecimal: string;
    hexColor: string;
  },
  handlers: {
    handleConvertPercentageToHexadecimal: () => void;
    handleHexColorChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    handlePercentageChange: (
      evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  },
  events: {
    percentage: null;
    hexadecimal: null;
    hexColor: null;
  }
];

const usePercentageToHexadecimalConverterState = (): UsePercentageToHexadecimalConverterStateTuple => {
  const [percentage, setPercentage] = useState<number>(42);
  const [hexadecimal, setHexadecimal] = useState<string>("6B");
  const [hexColor, setHexColor] = useState<string>("#7e22ce");

  const handlePercentageChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const val = +evt.target.value;
      if (!isNaN(val)) {
        if (0 <= val && val <= 100) {
          setPercentage(val);
        } else {
          console.error(`🙃 ${val} must be between 0 and 100`);
        }
      } else {
        console.error(`🙃 ${evt.target.value} is not a number.`);
      }
    },
    []
  );

  const handleConvertPercentageToHexadecimal = useCallback(() => {
    setHexadecimal(convertNumberToHexadecimal(percentage));
  }, [percentage]);

  const handleHexColorChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      let color = evt.target.value.toUpperCase();
      if (!evt.target.value.startsWith("#")) {
        color = `#${color}`;
      }
      if (color !== "#" && !color.match(/^#[0-9A-F]+$/)) {
        console.error(
          `🙃 hexadecimal color can only contain hexadecimal characters`
        );
      } else if (evt.target.value.length > 7) {
        console.error(
          `🙃 hex color can't be longer than "#" plus 6 characters`
        );
      } else {
        setHexColor(color);
      }
    },
    []
  );

  return [
    {
      percentage,
      hexadecimal,
      hexColor,
    },
    {
      handleConvertPercentageToHexadecimal,
      handleHexColorChange,
      handlePercentageChange,
    },
    {
      percentage: null,
      hexadecimal: null,
      hexColor: null,
    },
  ];
};

const meta = {
  title: "Percentage to Hexadecimal Converter",
  description: "Convert an opacity percentage to a hexadecimal alpha value.",
};

const PercentageToHexadecimalConverterPage = () => {
  const [values, handlers] = usePercentageToHexadecimalConverterState();

  const [percentageMode, setPercentageMode] = useState<"type" | "pick">("type");

  const handlePercentageModeClick = useCallback((evt) => {
    if (evt.target.value !== "type" && evt.target.value !== "pick") {
      console.error(
        `🙃 ${evt.target.value} is not an expected percentageMode type`
      );
    }
    setPercentageMode(evt.target.value);
  }, []);

  return (
    <>
      <PageMetaHead
        page={{
          title: meta.title,
          description: meta.description,
        }}
      />
      <PageContainer>
        <SiteHeader />
        <Container size={"3"}>
          <div>
            <Text
              css={{
                backgroundColor: "$blue500",
                borderRadius: "4px",
                color: "$white",
                fontSize: "$md",
                textTransform: "uppercase",
                p: "$1",
              }}
            >
              Tools
            </Text>
            <hgroup>
              <Heading css={{ fontSize: "$2xl", mb: "$1", mt: "$2" }}>
                {meta.title}
              </Heading>
              <Heading
                css={{ fontStyle: "italic", fontWeight: "normal" }}
                as="h2"
              >
                {meta.description}
              </Heading>
            </hgroup>
          </div>

          <Flex css={{ flexDirection: "column-reverse" }}>
            <Container css={{ maxWidth: "40rem", "@lg": { mx: "auto" } }}>
              <Abstract />
            </Container>
            <Box
              css={{
                fontSize: "$base",
                my: "$8",
              }}
            >
              <Box
                as="hgroup"
                css={{
                  border: "2px solid $blue400",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  py: "$6",
                  textAlign: "center",
                  [`.${darkTheme} &`]: {
                    backgroundColor: "$slate800",
                    borderBottomColor: "$slate600",
                  },
                  [`.${lightTheme} &`]: {
                    backgroundColor: "$slate300",
                    borderBottomColor: "$slate400",
                  },
                }}
              >
                <Heading css={{ fontSize: "$2xl" }}>{meta.title}</Heading>
                <Heading
                  as="h2"
                  css={{
                    fontSize: "$base",
                    fontStyle: "italic",
                    fontWeight: "normal",
                    mt: "$2",
                    [`.${darkTheme} &`]: {
                      color: "$slate300",
                    },
                    [`.${lightTheme} &`]: {
                      color: "$slate600",
                    },
                  }}
                >
                  {meta.description}
                </Heading>
              </Box>
              <Box
                css={{
                  borderColor: "$blue400",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderTopColor: "transparent",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                }}
              >
                <Flex
                  css={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    "@lg": { flexDirection: "row", gap: "$10" },
                  }}
                >
                  <Flex
                    css={{
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "$5",
                      justifyContent: "space-around",
                      m: "$8",
                      width: "100%",
                      "@lg": {
                        flexDirection: "row",
                      },
                    }}
                  >
                    <div>
                      <div>
                        <Flex
                          as="label"
                          css={{
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <Box
                            as="select"
                            css={{
                              backgroundColor: "transparent",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              borderRadius: "8px",
                              fontSize: "$xl",
                              mr: "$1",
                              p: "$3",
                              pr: "$1",
                              [`.${darkTheme} &`]: {
                                borderColor: "$blue400",
                              },
                              [`.${lightTheme} &`]: {
                                borderColor: "$slate500",
                              },
                            }}
                            onChange={handlePercentageModeClick}
                          >
                            <option value="type">Type</option>
                            <option value="pick">Pick</option>
                          </Box>{" "}
                          a percentage:
                          <span>
                            {percentageMode === "type" && (
                              <span>
                                <Box
                                  as="input"
                                  css={{
                                    backgroundColor: "transparent",
                                    borderStyle: "solid",
                                    borderWidth: "1px",
                                    borderRadius: "8px",
                                    fontSize: "$xl",
                                    ml: "$1",
                                    py: "$3",
                                    textAlign: "center",
                                    width: "6rem",
                                    [`.${darkTheme} &`]: {
                                      borderColor: "$blue400",
                                    },
                                    [`.${lightTheme} &`]: {
                                      borderColor: "$slate500",
                                    },
                                  }}
                                  type="text"
                                  value={values.percentage}
                                  onChange={handlers.handlePercentageChange}
                                />{" "}
                                %
                              </span>
                            )}
                            {percentageMode === "pick" && (
                              <Box
                                as="select"
                                css={{
                                  backgroundColor: "transparent",
                                  borderStyle: "solid",
                                  borderWidth: "1px",
                                  borderRadius: "8px",
                                  fontSize: "$xl",
                                  ml: "$1",
                                  p: "$3",
                                  pr: "$1",
                                  [`.${darkTheme} &`]: {
                                    borderColor: "$blue400",
                                  },
                                  [`.${lightTheme} &`]: {
                                    borderColor: "$slate500",
                                  },
                                }}
                                onChange={handlers.handlePercentageChange}
                              >
                                {[
                                  0,
                                  10,
                                  20,
                                  30,
                                  40,
                                  42,
                                  50,
                                  60,
                                  70,
                                  80,
                                  90,
                                  100,
                                ].map((percentage) => (
                                  <option key={percentage} value={percentage}>
                                    {percentage}%
                                  </option>
                                ))}
                              </Box>
                            )}
                          </span>
                        </Flex>
                      </div>
                      <Box css={{ mt: "$8", textAlign: "center" }}>
                        <Button
                          radii={"full"}
                          type="button"
                          onClick={
                            handlers.handleConvertPercentageToHexadecimal
                          }
                        >
                          Convert
                          <Text css={{ display: "none" }}>
                            {" "}
                            Percentage to Hexadecimal
                          </Text>
                        </Button>
                      </Box>
                    </div>

                    <Box css={{ mt: "$4" }}>
                      <Heading
                        as="h2"
                        css={{ fontSize: "$2xl", textAlign: "center" }}
                      >
                        Result
                      </Heading>
                      <Flex
                        css={{ flexDirection: "column", alignItems: "center" }}
                      >
                        <Box
                          as="code"
                          css={{
                            backgroundColor: "$blue500",
                            color: "$white",
                            display: "block",
                            fontSize: "$3xl",
                            fontWeight: "bold",
                            my: "$5",
                            p: "$4",
                            "@lg": {
                              fontSize: "$5xl",
                            },
                          }}
                        >
                          {values.hexadecimal}
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>

                  <Box
                    css={{
                      borderLeftWidth: "2px",
                      borderStyle: "solid",
                      mt: "$8",
                      p: "$5",
                      [`.${darkTheme} &`]: {
                        borderLeftColor: "$slate600",
                      },
                      [`.${lightTheme} &`]: {
                        borderLeftColor: "$slate300",
                      },
                      "@lg": { mt: "0", maxWidth: "300px", width: "100%" },
                    }}
                  >
                    <Box css={{ pt: "$5" }}>
                      <div>
                        <Flex
                          as="label"
                          css={{
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box css={{ fontSize: "$xl", textAlign: "center" }}>
                            Apply it to a color
                          </Box>
                          <div>
                            <Flex
                              css={{
                                alignItems: "center",
                                gap: "$3",
                                my: "$5",
                              }}
                            >
                              <Box
                                as="input"
                                css={{
                                  backgroundColor: "transparent",
                                  borderRadius: "8px",
                                  borderStyle: "solid",
                                  borderWidth: "1px",
                                  fontSize: "$base",
                                  p: "$3",
                                  textAlign: "center",
                                  [`.${darkTheme} &`]: {
                                    borderColor: "$blue500",
                                  },
                                  [`.${lightTheme} &`]: {
                                    borderColor: "$slate500",
                                  },
                                }}
                                aria-label="Hexadecimal Color"
                                type="text"
                                value={values.hexColor}
                                onChange={handlers.handleHexColorChange}
                              />

                              <Box
                                css={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "99999px",
                                }}
                                style={{
                                  backgroundColor: `${values.hexColor}`,
                                }}
                              ></Box>
                            </Flex>

                            {values.hexColor.length < 7 ? (
                              <Text
                                css={{
                                  color: "$red500",
                                  display: "block",
                                  pb: "$4",
                                  lineHeight: "1",
                                }}
                              >
                                hexadecimal has to be 6 characters to use alpha
                                value.
                              </Text>
                            ) : null}
                          </div>
                        </Flex>
                      </div>
                      <Flex
                        css={{
                          flexDirection: "column",
                          justifyContent: "space-around",
                        }}
                      >
                        <Flex
                          css={{
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            css={{ width: "100%", height: "64px", my: "$3" }}
                            style={{ backgroundColor: values.hexColor }}
                          ></Box>
                          <Text css={{ display: "block", mt: "$2" }}>
                            (<code>{values.hexColor}</code>)
                          </Text>
                        </Flex>
                        <Flex
                          css={{
                            alignItems: "center",
                            flexDirection: "column",
                            mt: "$4",
                          }}
                        >
                          <span>Alpha Applied</span>
                          <Box
                            css={{ width: "100%", height: "64px", my: "$3" }}
                            style={{
                              backgroundColor: `${values.hexColor}${values.hexadecimal}`,
                            }}
                          ></Box>

                          <Text css={{ display: "block", mt: "$2" }}>
                            (
                            <code>
                              {values.hexColor}
                              {values.hexadecimal}
                            </code>
                            )
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>
        <SiteFooter />
      </PageContainer>
    </>
  );
};

const Abstract = () => {
  return (
    <Box css={{ fontSize: "$base", lineHeight: "1.5" }}>
      <Section size={"3"}>
        <Heading as="h2" css={{ fontSize: "$2xl", mb: "$3" }}>
          Who It&apos;s For
        </Heading>
        <Box as="p" css={{ pt: "$4" }}>
          Any developer or designer who needs to convert a percentage
          (particularly an opacity percentage) to a hexadecimal alpha value.
        </Box>
      </Section>
      <Section size={"3"}>
        <Heading as="h2" css={{ fontSize: "$2xl", mb: "$3" }}>
          Why I Built It
        </Heading>

        <Box as="p" css={{ pt: "$4" }}>
          I found myself constantly searching for a conversion table for opacity
          in percentage to an alpha value (opacity as a number between 0.0 and
          1.0).
        </Box>

        <Box as="p" css={{ pt: "$4" }}>
          I wanted to build something simple that let me type or pick a
          percentage and have it automatically convert into the alpha equivalent
          in hexadecimal. This also gave me the chance to understand hexadecimal
          conversion with a concrete example.
        </Box>
      </Section>
    </Box>
  );
};

const convertNumberToHexadecimal = (val: number) => {
  const valAsDecimal = Math.round((val * 255) / 100);
  let valAsHexadecimal = valAsDecimal.toString(16).toUpperCase();

  if (valAsHexadecimal.length < 2) {
    valAsHexadecimal = `0${valAsHexadecimal}`;
  }

  return valAsHexadecimal;
};

export default PercentageToHexadecimalConverterPage;
