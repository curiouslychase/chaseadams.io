import type { AppProps } from "next/app";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import {
  ThemeSwitcherConsumer,
  ThemeSwitcherProvider,
} from "~/components/ThemeContext";
import { GlobalStyle } from "~/styles/global";
import themes from "~/styles/themes";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeSwitcherProvider>
      <ThemeSwitcherConsumer>
        {({ colorMode }) => (
          <ThemeProvider
            theme={colorMode === "light" ? themes.light : themes.dark}
          >
            <GlobalStyle />

            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </ThemeSwitcherConsumer>
    </ThemeSwitcherProvider>
  );
};

export default App;
