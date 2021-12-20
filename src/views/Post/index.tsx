import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

import { Container } from "~/components/shared/Container";
import { PageContainer } from "~/components/shared/PageContainer";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import type { Post } from "~/lib/posts/types";

type Props = { post: Post };

export function PostView({ post }: Props) {
  return (
    <PageContainer>
      <SiteHeader />
      <PostBody post={post} />
      <SiteFooter />
    </PageContainer>
  );
}

function PostBody({ post }: Props) {
  const { headings, title, tags, date } = post;

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        <div>
          <article>
            <header className="mb-10">
              <h1 className="text-white font-bold text-3xl md:text-4xl leading-normal">
                <span className="highlighter">{title}</span>
              </h1>
              <div className="block mt-2 text-base text-slate-500 dark:text-slate-300">
                Published <time dateTime={date}>{date}</time>
              </div>
            </header>

            <div className="prose">
              <MDXRemote {...post.mdxSource} />
            </div>
          </article>
          <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-10">
              {tags.length && <TagsList tags={tags} />}
            </div>
          </div>
        </div>
        {headings?.length && <TOC headings={headings} />}
      </div>
    </Container>
  );
}

function TOC({ headings }: { headings: Post["headings"] }) {
  return (
    <aside className="block lg:sticky lg:top-[5rem] lg:max-w-[20rem] lg:max-h-[5rem]">
      <h2>Table of Contents</h2>
      <ul>
        {headings?.map((heading) => (
          <li className="pt-2" key={heading.slug}>
            <a className="text-base" href={`#${heading.slug}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function TagsList({ tags }: { tags: Post["tags"] }) {
  return (
    <div className="py-8">
      <span className="font-bold">Tagged with: </span>
      <ul className="inline-block">
        {tags.map((tag, idx) => (
          <li className="inline-block" key={tag.slug}>
            <Link href={tag.slug}>
              <a
                className={`${
                  tags.length - 1 !== idx ? `after:content-[",\\00a0"]` : ""
                }`}
              >
                {tag.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
