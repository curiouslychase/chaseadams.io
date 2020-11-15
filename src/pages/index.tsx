import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { getSortedPostsData } from "~/lib/posts";
import type { AllPosts } from "~/lib/posts";

export default function Home({ allPostsData }: { allPostsData: AllPosts }) {
  return (
    <div className="container">
      <Head>
        <title>Chase Adams | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h2>Posts</h2>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  {date} {title}
                </a>
              </Link>
            </li>
          ))}
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
