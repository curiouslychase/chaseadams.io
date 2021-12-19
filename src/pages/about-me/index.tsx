import Head from "next/head";

import { AboutView } from "~/views/About";

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>About Me, Chase Adams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutView />
    </>
  );
};

export default AboutMePage;
