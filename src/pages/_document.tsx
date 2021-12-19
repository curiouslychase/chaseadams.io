import Document, { Head, Html, Main, NextScript } from "next/document";

import * as gtag from "~/utils/gtag";

class MyDocument extends Document {
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
