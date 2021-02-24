import Head from "next/head";

import DefaultLayout from "~/containers/layouts/Default";
import StyleGuideView from "~/containers/views/StyleGuide";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Style Guide | Chase Adams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyleGuideView />
    </DefaultLayout>
  );
}
