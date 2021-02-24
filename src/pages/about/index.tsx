import Head from "next/head";

import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import Title from "~/components/Title";
import DefaultLayout from "~/containers/layouts/Default";

const AboutMePage = () => (
  <DefaultLayout>
    <Head>
      <title>About Me - Chase Adams</title>
    </Head>
    <MaxWidthWrapper>
      <Title>About Me</Title>
      <div>
        <h2>In 30 Seconds</h2>
        <h3>I enjoy...</h3>
        <ul>
          <li>
            🧰 building software that lowers friction so that makers can turn
            their ideas into reality.
          </li>
          <li>👨‍🔬 learning new concepts and ideas.</li>
          <li>🚀 teaching others.</li>
          <li>🧠 exploring ideas on consciousness.</li>
        </ul>
        <h2>Now...</h2>
        <ul>
          <li>
            🦄 I build software at <a href="https://murmur.com">Murmur</a>.
          </li>
          <li>
            🧪 I experiment with various tools, systems & processes to learn to
            live more effectively.
          </li>
          <li>↗️ My favorite shape is an arrow.</li>
          <li>🏜 I live in Las Vegas, Nevada, USA.</li>
        </ul>
        <h3>At Home, I'm...</h3>
        <ul>
          <li>Hiking & birding with my wife & daughter.</li>
          <li>Hanging out with my awesome family.</li>
          <li>Walking my dogs.</li>
          <li>Building train tracks with my daughter.</li>
          <li>Making cold brew coffees & Americanos.</li>
        </ul>
        <h3>My Interests Include...</h3>
        <ul>
          <li>Experimenting with productivity systems & processes.</li>
          <li>Making things with my 3D printer.</li>
          <li>Hacking on software ideas.</li>
          <li>Writing about the process of building software.</li>
          <li>Reading and reviewing books.</li>
          <li>Teaching others about technology & productivity.</li>
        </ul>
      </div>
    </MaxWidthWrapper>
  </DefaultLayout>
);

export default AboutMePage;
