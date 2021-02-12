import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import theme from "~/styles/themes";

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
      '--color-labelBackground',
      colorMode === 'light'
        ? '${theme.light.colors.labelBackground}'
        : '${theme.dark.colors.labelBackground}'
    );

    root.style.setProperty(
      '--color-labelForeground',
      colorMode === 'light'
        ? '${theme.light.colors.labelForeground}'
        : '${theme.dark.colors.labelForeground}'
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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
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
