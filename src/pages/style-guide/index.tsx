import Head from "next/head";

import StyleGuideView from "~/containers/views/StyleGuide";
import DefaultLayout from "~/layouts/Default";

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
