import Link from "next/link";
import type { FC } from "react";

import Date from "~/components/Date";
import ShareLink from "~/components/ShareLink";
import Title from "~/components/Title";

import { MetaWrapper, PostWrapper } from "./styles";
import type { Props } from "./types";

const PostView: FC<Props> = ({ title, date, contentHtml, tags, slug }) => (
  <article>
    <Title size="M">{title}</Title>
    <PostWrapper dangerouslySetInnerHTML={{ __html: contentHtml }} />

    <MetaWrapper>
      <Date dateString={date} />
    </MetaWrapper>

    <ShareLink
      siteUrl={`https://chaseinmotion.com`}
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
  </article>
);

export default PostView;
