import Head from "next/head";

import { Box } from "~/components/core/Box";
import { Container } from "~/components/core/Container";
import { Heading } from "~/components/core/Heading";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { styled } from "~/styles/stitches.config";

const List = styled("ul", {
  listStyle: "disc",
  pl: "$4",
  py: "$4",
});

const ListItem = styled("li", {
  py: "$1",
  "@bp1": {
    ml: "$8",
  },
});

export const AboutView = () => {
  return (
    <>
      <Head>
        <title>About Me - Chase Adams</title>
      </Head>

      <PageContainer>
        <SiteHeader />
        <Container size={"3"}>
          <Box css={{ px: "$6" }}>
            <Heading>About Me</Heading>
            <Heading level={"h2"}>In 30 Seconds</Heading>
            <Heading level={"h3"}>I enjoy...</Heading>
            <List>
              <ListItem>
                🧰 building software that lowers friction so that makers can
                turn their ideas into reality.
              </ListItem>
              <ListItem>👨‍🔬 learning new concepts and ideas.</ListItem>
              <ListItem>🚀 teaching others.</ListItem>
              <ListItem>🧠 exploring ideas on consciousness.</ListItem>
            </List>
            <Heading level={"h2"}>Now...</Heading>
            <List>
              <ListItem>
                🦄 I build software at <a href="https://murmur.com">Murmur</a>.
              </ListItem>
              <ListItem>
                🧪 I experiment with various tools, systems & processes to learn
                to live more effectively.
              </ListItem>
              <ListItem>↗️ My favorite shape is an arrow.</ListItem>
              <ListItem>🏜 I live in Las Vegas, Nevada, USA.</ListItem>
            </List>
            <Heading level={"h3"}>At Home, I'm...</Heading>
            <List>
              <ListItem>Hiking & birding with my wife & daughter.</ListItem>
              <ListItem>Hanging out with my awesome family.</ListItem>
              <ListItem>Walking my dogs.</ListItem>
              <ListItem>Building train tracks with my daughter.</ListItem>
              <ListItem>Making cold brew coffees & Americanos.</ListItem>
            </List>
            <Heading level={"h3"}>My Interests Include...</Heading>
            <List>
              <ListItem>
                Experimenting with productivity systems & processes.
              </ListItem>
              <ListItem>Making things with my 3D printer.</ListItem>
              <ListItem>Hacking on software ideas.</ListItem>
              <ListItem>
                Writing about the process of building software.
              </ListItem>
              <ListItem>Reading and reviewing books.</ListItem>
              <ListItem>
                Teaching others about technology & productivity.
              </ListItem>
            </List>
          </Box>
        </Container>

        <SiteFooter />
      </PageContainer>
    </>
  );
};
