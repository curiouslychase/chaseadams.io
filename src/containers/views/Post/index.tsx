import hydrate from "next-mdx-remote/hydrate";
import Link from "next/link";
import type { FC } from "react";

import Date from "~/components/Date";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import ShareLink from "~/components/ShareLink";
import Title from "~/components/Title";

import { Container, MetaWrapper, PostWrapper } from "./styles";
import type { Props } from "./types";

const TableOfContents: FC<{
  headings?: Array<{
    text: string;
    level: number;
    slug: string;
  }>;
}> = ({ headings }) => {
  if (!headings) {
    return null;
  }

  return (
    <nav>
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PostView: FC<Props> = ({
  title,
  date,
  mdxSource,
  headings,
  tags,
  slug,
}) => {
  const content = hydrate(mdxSource);

  return (
    <MaxWidthWrapper>
      <Container>
        <div className="post">
          <aside>
            <TableOfContents headings={headings} />
          </aside>
          <div>
            <article>
              <Title size="M">{title}</Title>
              <PostWrapper>{content}</PostWrapper>
            </article>
            <ShareLink
              siteUrl={`https://chaseadams.io`}
              permalink={slug}
              title={title}
              tags={tags.map(({ text }) => text)}
            />
            {tags.length ? (
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  Tags
                </span>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag.slug}>
                      <Link href={tag.slug}>
                        <a>{tag.text}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <MetaWrapper>
              <Date dateString={date} />
            </MetaWrapper>
          </div>
        </div>
      </Container>
    </MaxWidthWrapper>
  );
};

export default PostView;
