import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import { useEffect } from "react";

import { darkTheme, globalStyles, lightTheme } from "~/styles/stitches.config";

import * as gtag from "../utils/gtag";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();
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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
