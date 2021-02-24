const colors = {
  white: "#fff",
  white100: `#EDE0FF`,
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
  blue300: "#47A9FF",
  blue400: "#3A6992",
  blue500: "#058AFF",
  blue600: "#2563EB",
  blue700: "#130A5D",
  purple100: `#ba44eb`,
  purple300: `#7F00FF`,
  blue800: `#0D0637`,
  blue900: `#040212`,
  pink: `#FB36ED`,
  red: "#f00",
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
  mode: "light",
  colors: {
    ...colors,
    background: colors.gray50,
    accent: colors.gray100,
    text: colors.blue700,
    primary: colors.blue600,
    muted: colors.gray300,
  },
};

const dark = {
  ...base,
  mode: "dark",
  colors: {
    ...colors,
    background: colors.blue900,
    accent: colors.gray800,
    text: colors.white100,
    primary: colors.blue300,
    muted: colors.gray600,
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
