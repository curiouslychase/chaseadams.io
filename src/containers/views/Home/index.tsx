import Link from "next/link";
import type { FC } from "react";

import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import PostList from "~/components/PostList";
import Subtitle from "~/components/Subtitle";

import { Main, Section } from "./styles";
import type { Props } from "./types";

const HomeView: FC<Props> = ({ allPostsData }) => {
  return (
    <MaxWidthWrapper>
      <Main>
        <Section>
          <img src="/img/chaseadams.png" />
          <p>
            I enable building strong, resilient teams by creating human-centric
            software and self-management frameworks.
          </p>
        </Section>
        <section>
          <Subtitle>Latest Writing</Subtitle>
          <PostList posts={allPostsData} />
          <Link href="/writing">
            <a>All Writing</a>
          </Link>
        </section>
      </Main>
    </MaxWidthWrapper>
  );
};

export default HomeView;
