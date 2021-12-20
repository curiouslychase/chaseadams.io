import Image from "next/image";
import Link from "next/link";

import { PostSummaries } from "~/components/modules/Post/PostSummaries";
import { Container } from "~/components/shared/Container";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { AllPosts, PostMeta } from "~/lib/posts/types";

export const HomeView = ({ allPostsData }: { allPostsData: AllPosts }) => {
  return (
    <PageContainer>
      <SiteHeader />
      <Container>
        <div className="flex items-center gap-10 flex-col lg:flex-row">
          <Image src={"/img/chase-hex.png"} width={350} height={350} />
          <div className="flex flex-col">
            <p className="text-blue-700 dark:text-blue-400 text-4xl font-bold pb-4">
              Hey, I'm Chase!
            </p>
            <h2 className="leading-normal text-2xl">
              I create strong, resilient teams and build human-centric software.
            </h2>
            <div className="flex flex-col xl:flex-row xl:items-center lg:items-start justify-between mt-0 xl:mt-8">
              <Link href="/about-me">
                <a className="inline-block py-4">Learn More About Me</a>
              </Link>
              <div className="m-b-start-auto justify-self-end xl:mt-0 lg:mt-2">
                <Link href="/posts">
                  <a className="button cta">Read my blog</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CurrentWork shouldRender={false} />
      <Writing posts={allPostsData} />
      <SiteFooter />
    </PageContainer>
  );
};

const Writing = ({ posts }: { posts: Array<PostMeta> }) => {
  return (
    <Container>
      <h2 className="uppercase font-bold text-blue-700 dark:text-blue-400 pb-4">
        What I'm Writing
      </h2>
      <PostSummaries posts={posts} />
      <div className="group flex justify-end items-center pt-8">
        <Link href="/posts">
          <a className="button cta">Start reading the blog</a>
        </Link>
      </div>
    </Container>
  );
};

const CurrentWork = ({ shouldRender }: { shouldRender: boolean }) => {
  // TODO write something for this, I was too lazy to just remove the component
  if (!shouldRender) return null;

  return (
    <Container>
      <h2 className="uppercase font-bold text-blue-700 dark:text-blue-400 pb-4">
        What I'm Working On
      </h2>
      <div className="grid lg:grid-cols-2">
        <div>
          <h3 className="font-bold text-2xl">Murmur</h3>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Pizza</h3>
        </div>
      </div>
    </Container>
  );
};
