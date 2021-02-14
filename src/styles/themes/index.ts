const colors = {
  white: "#fff",
  black: "#000",
  blackAccent: "#040506",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray800: "#1F2937",
  gray900: "#111827",
  blue300: "#93C5FD",
  blue400: "#3A6992",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  blue700: "#1D4ED8",
  red: "#f00",
  blue: "#232840",
};

const base = {
  weights: {
    light: 300,
    normal: 400,
    bold: 700,
    black: 800,
  },
  responsive: {
    phone: "max-width: 45rem",
  },
};

const light = {
  ...base,
  colors: {
    ...colors,
    background: colors.gray50,
    accent: colors.gray100,
    text: colors.gray900,
    primary: colors.blue400,
    muted: colors.gray500,
    labelBackground: colors.gray100,
    labelForeground: colors.black,
    menuButtonBackground: colors.gray100,
    menuButtonForeground: colors.gray500,
    menuButtonBorder: colors.gray200,
    menuButtonActiveForeground: colors.gray900,
    menuButtonActiveBackground: colors.white,
    menuButtonActiveBorder: colors.gray500,
    mutedBorder: colors.gray300,
  },
};

const dark = {
  ...base,
  colors: {
    ...colors,
    background: colors.black,
    accent: colors.blackAccent,
    text: colors.gray50,
    primary: colors.blue300,
    muted: colors.gray400,
    labelBackground: colors.gray900,
    labelForeground: colors.gray50,
    menuButtonBackground: colors.gray900,
    menuButtonForeground: colors.gray300,
    menuButtonBorder: colors.gray500,
    menuButtonActiveForeground: colors.gray50,
    menuButtonActiveBackground: colors.black,
    menuButtonActiveBorder: colors.gray300,
    mutedBorder: colors.gray600,
  },
};

const themes = {
  light,
  dark,
};

export type Theme = typeof light;

export default themes;

declare module "styled-components" {
  // We need this to be an interface - a type will error.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
