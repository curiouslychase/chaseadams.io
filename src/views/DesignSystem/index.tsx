import Head from "next/head";

import { Box } from "~/components/core/Box";
import { Container } from "~/components/core/Container";
import { Heading } from "~/components/core/Heading";
import { Section } from "~/components/core/Section";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";

export const DesignSystem = () => {
  return (
    <>
      <Head>
        <title>About Me - Chase Adams</title>
      </Head>

      <PageContainer>
        <SiteHeader />
        <Section css={{ width: "100%" }}>
          <Container size={"3"}>
            <Box css={{}} as="hgroup">
              <Heading>Design System</Heading>
            </Box>
            <Box css={{ py: "$8" }}>
              <Heading level={"h2"}>Headings</Heading>
              <Heading level={"h1"}>Heading Level 1</Heading>
              <Heading level={"h2"}>Heading Level 2</Heading>
              <Heading level={"h3"}>Heading Level 3</Heading>
              <Heading level={"h4"}>Heading Level 4</Heading>
              <Heading level={"h5"}>Heading Level 5</Heading>
              <Heading level={"h6"}>Heading Level 6</Heading>
            </Box>
          </Container>
        </Section>
        <SiteFooter />
      </PageContainer>
    </>
  );
};
