import Head from "next/head";

import Title from "~/components/Title";
import DefaultLayout from "~/containers/layouts/Default";

const AboutMePage = () => (
  <DefaultLayout>
    <Head>
      <title>About Me - Chase Adams</title>
    </Head>

    <Title>About Me</Title>
  </DefaultLayout>
);

export default AboutMePage;
