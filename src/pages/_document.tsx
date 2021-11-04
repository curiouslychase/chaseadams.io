import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import theme from "~/styles/themes";
import * as gtag from "~/utils/gtag";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';

      if (hasPersistedPreference) {
        return persistedColorPreference;
      }

      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }

      return 'dark';
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${theme.light.colors.text}'
        : '${theme.dark.colors.text}'
    );

    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${theme.light.colors.background}'
        : '${theme.dark.colors.background}'
    );

    root.style.setProperty(
      '--color-background-dot',
      colorMode === 'light'
        ? '${theme.light.colors.backgroundDot}'
        : '${theme.dark.colors.backgroundDot}'
    );

    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${theme.light.colors.primary}'
        : '${theme.dark.colors.primary}'
    );

    root.style.setProperty(
      '--color-muted',
      colorMode === 'light'
        ? '${theme.light.colors.muted}'
        : '${theme.dark.colors.muted}'
    );

    root.style.setProperty(
      '--color-accent',
      colorMode === 'light'
        ? '${theme.light.colors.accent}'
        : '${theme.dark.colors.accent}'
    );
    
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const { styles, ...initialProps } = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cloud.typography.com/6522872/7140832/css/fonts.css"
            rel="stylesheet"
          />
          {process.env.IS_PRODUCTION && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
