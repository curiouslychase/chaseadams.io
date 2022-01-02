import { createStitches, globalCss, CSS as StitchesCSS } from "@stitches/react";
import { ReactChild } from "react";
import { reset } from "stitches-reset";

import { colors } from "~/styles/colors";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const stitchesConfig = createStitches({
  theme: {
    colors: {
      ...colors,
      background: "$black",
      text: "$slate300",
      primary: "$blue400",
    },
    fonts: {
      sans: ['"Ringside Regular SSm A"', "Helvetica"].join(","),
      mono:
        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    },
    fontSizes: {
      sm: "0.75rem",
      md: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "28px",
      7: "32px",
      8: "40px",
      9: "56px",
      10: "72px",
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "48px",
      8: "64px",
      9: "80px",
      10: "96px",
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
    bp1: "(width > 640px)",
    bp2: "(width > 768px)",
    bp3: "(width > 1024px)",
    xs: "(width > 340)",
    sm: "(width > 640px)",
    md: "(width > 768px)",
    lg: "(width > 1024px)",
  },
  utils: {
    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: any) => ({
      padding: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const { styled, theme: darkTheme } = stitchesConfig;

export type CSS = StitchesCSS<typeof stitchesConfig>;

export type StyledElementProps = {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements;
  children: ReactChild | Array<ReactChild>;
};

export const lightTheme = stitchesConfig.createTheme("light", {
  colors: {
    ...colors,
    background: "$slate50",
    text: "$black",
    primary: "$blue500",
  },
});

export const globalStyles = globalCss({
  ...reset,
  body: {
    backgroundColor: "$background",
    fontDisplay: "swap",
    fontFamily: "$sans",
    fontSize: "$4",
    color: "$text",
  },
  a: {
    cursor: "pointer",
    textDecoration: "none",
    transition: "all .25s",
    [`.${darkTheme} &`]: {
      color: "$blue400",
      "&:hover": {
        color: "$blue300",
      },
    },
    [`.${lightTheme} &`]: {
      color: "$blue600",
      "&:hover": {
        color: "$blue400",
      },
    },
  },
});
