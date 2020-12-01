const colors = {
  white: "#fff",
  black90: "#232840",
  black: "#07080f",
  red: "#f00",
  blue: "#232840",
  grey70: "#A8BBDC",
};

const base = {
  weights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
};

const light = {
  ...base,
  colors: {
    background: colors.white,
    text: colors.black,
    primary: colors.blue,
    muted: `#5474A0`,
  },
};

const dark = {
  ...base,
  colors: {
    background: colors.black90,
    text: colors.white,
    primary: colors.grey70,
    muted: colors.grey70,
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
