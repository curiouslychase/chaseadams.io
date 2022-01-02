import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { Flex } from "~/components/core/Flex";
import { Text } from "~/components/core/Text";
import { darkTheme, lightTheme, styled } from "~/styles/stitches.config";

const StyledThemeSwitcher = styled("button", {
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: "$lg",
  transition: "all .15s",
  transform: "scale(1.05)",
  "&:hover": {
    transform: "scale(1.25)",
  },
  variants: {
    type: {
      iconOnly: {
        [`.${darkTheme} &`]: {
          color: "$slate300",
          "&:hover": {
            color: "$blue500",
          },
        },
        [`.${lightTheme} &`]: {
          color: "$slate600",
          "&:hover": {
            color: "$blue500",
          },
        },
      },
      withText: {
        alignItems: "center",
        p: "$4",
        borderWidth: "$1",
        borderStyle: "solid",
        borderRadius: "9999px",
        [`.${darkTheme} &`]: {
          backgroundColor: "$black",
          borderColor: "$slate50",
          "&:hover": {
            backgroundColor: "$slate50",
            borderColor: "$blue400",
            color: "$black",
          },
        },
        [`.${lightTheme} &`]: {
          backgroundColor: "$slate300",
          borderColor: "$slate500",
          "&:hover": {
            backgroundColor: "$black",
            borderColor: "$blue400",
            color: "$slate50",
          },
        },
      },
    },
  },
  defaultVariants: {
    type: "withText",
  },
});

export const ThemeSwitcher = ({
  responsiveText = false,
  type = "withText",
}: {
  responsiveText?: boolean;
  type?: "iconOnly" | "withText";
}) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClick = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <StyledThemeSwitcher type={type} onClick={handleClick}>
      <Flex css={{ alignItems: "center", gap: "$2", justifyContent: "center" }}>
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
        <Text
          css={{
            ...(responsiveText && { display: "inline" }),
            "@bp1": {
              display: type === "iconOnly" ? "none" : "inline",
            },
          }}
        >
          Switch Theme
        </Text>
      </Flex>
    </StyledThemeSwitcher>
  );
};
