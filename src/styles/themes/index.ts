const colors = {
  white: "#fff",
  black: "#081121",
  red: "#f00",
  blue: "#2541b2",
};

const base = {
  weights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
};

const light = {
  colors: {
    background: colors.white,
    text: colors.black,
    primary: colors.blue,
  },
  ...base,
};

const dark = {
  colors: {
    background: colors.black,
    text: colors.white,
    primary: colors.blue,
  },
  ...base,
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
