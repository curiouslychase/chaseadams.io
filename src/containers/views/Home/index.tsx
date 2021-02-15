import type { FC } from "react";

import PostList from "~/components/PostList";
import Subtitle from "~/components/Subtitle";

import { Main, Section } from "./styles";
import type { Props } from "./types";

const HomeView: FC<Props> = ({ allPostsData }) => {
  return (
    <Main>
      <Section>
        <img src="/img/chaseadams.jpg" />
        <p>
          I enable building strong, resilient teams by creating human-centric
          software and self-management frameworks.
        </p>
      </Section>
      <section>
        <Subtitle>Latest Writing</Subtitle>
        <PostList posts={allPostsData} />
      </section>
    </Main>
  );
};

export default HomeView;
