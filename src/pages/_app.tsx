import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import { useEffect } from "react";

import { ThemeSwitcherProvider } from "~/contexts/ThemeContext";
import "../styles/global.css";

import * as gtag from "../utils/gtag";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const handleRouteChange = useCallback((url: URL) => {
    if (process.env.IS_PRODUCTION) {
      gtag.pageview(url);
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeSwitcherProvider>
      <Component {...pageProps} />
    </ThemeSwitcherProvider>
  );
};

export default App;
