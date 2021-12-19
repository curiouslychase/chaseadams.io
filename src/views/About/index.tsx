import Head from "next/head";

import { Container } from "~/components/shared/Container";
import { PageContainer } from "~/components/shared/PageContainer";
import ViewH1 from "~/components/shared/PageTitle";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";

export const AboutView = () => {
  return (
    <>
      <Head>
        <title>About Me - Chase Adams</title>
      </Head>
      <PageContainer>
        <SiteHeader />
        <Container>
          <ViewH1>About Me</ViewH1>
          <h2>In 30 Seconds</h2>
          <h3>I enjoy...</h3>
          <ul className="list-disc pl-4 py-4">
            <li className="ml-8 py-1">
              🧰 building software that lowers friction so that makers can turn
              their ideas into reality.
            </li>
            <li className="ml-8 py-1">👨‍🔬 learning new concepts and ideas.</li>
            <li className="ml-8 py-1">🚀 teaching others.</li>
            <li className="ml-8 py-1">🧠 exploring ideas on consciousness.</li>
          </ul>
          <h2>Now...</h2>
          <ul className="list-disc pl-4 py-4">
            <li className="ml-8 py-1">
              🦄 I build software at <a href="https://murmur.com">Murmur</a>.
            </li>
            <li className="ml-8 py-1">
              🧪 I experiment with various tools, systems & processes to learn
              to live more effectively.
            </li>
            <li className="ml-8 py-1">↗️ My favorite shape is an arrow.</li>
            <li className="ml-8 py-1">🏜 I live in Las Vegas, Nevada, USA.</li>
          </ul>
          <h3>At Home, I'm...</h3>
          <ul className="list-disc pl-4 py-4">
            <li className="ml-8 py-1">
              Hiking & birding with my wife & daughter.
            </li>
            <li className="ml-8 py-1">Hanging out with my awesome family.</li>
            <li className="ml-8 py-1">Walking my dogs.</li>
            <li className="ml-8 py-1">
              Building train tracks with my daughter.
            </li>
            <li className="ml-8 py-1">
              Making cold brew coffees & Americanos.
            </li>
          </ul>
          <h3>My Interests Include...</h3>
          <ul className="list-disc pl-4 py-4">
            <li className="ml-8 py-1">
              Experimenting with productivity systems & processes.
            </li>
            <li className="ml-8 py-1">Making things with my 3D printer.</li>
            <li className="ml-8 py-1">Hacking on software ideas.</li>
            <li className="ml-8 py-1">
              Writing about the process of building software.
            </li>
            <li className="ml-8 py-1">Reading and reviewing books.</li>
            <li className="ml-8 py-1">
              Teaching others about technology & productivity.
            </li>
          </ul>
        </Container>

        <SiteFooter />
      </PageContainer>
    </>
  );
};
