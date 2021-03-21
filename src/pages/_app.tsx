import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import {
  ThemeSwitcherConsumer,
  ThemeSwitcherProvider,
} from "~/components/ThemeContext";
import { GlobalStyle } from "~/styles/global";
import themes from "~/styles/themes";

import * as gtag from "../utils/gtag";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  if (process.env.IS_PRODUCTION) {
    useEffect(() => {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);
  }

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
