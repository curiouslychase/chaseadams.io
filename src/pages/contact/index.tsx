import Head from "next/head";

import Title from "~/components/Title";
import DefaultLayout from "~/containers/layouts/Default";

const ContactPage = () => (
  <DefaultLayout>
    <Head>
      <title>About Chase Adams</title>
    </Head>

    <Title>Contact</Title>
  </DefaultLayout>
);

export default ContactPage;
