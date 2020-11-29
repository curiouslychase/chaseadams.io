import type { AppProps } from "next/app";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeSwitcherProvider } from "~/components/ThemeContext";
import { GlobalStyle } from "~/styles/global";
import themes from "~/styles/themes";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeSwitcherProvider>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeSwitcherProvider>
  );
};

export default App;
