import Link from "next/link";
import type { FC } from "react";

import Date from "~/components/Date";
import Title from "~/components/Title";

import { Author, MetaWrapper } from "./styles";
import type { Props } from "./types";

const PostView: FC<Props> = ({ title, date, contentHtml, tags }) => (
  <article>
    <Title size="M">{title}</Title>
    <MetaWrapper>
      <Author>Chase Adams</Author>
      <Date dateString={date} />
    </MetaWrapper>
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    <div>
      {tags && (
        <div>
          <span
            style={{
              display: "block",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Tags
          </span>{" "}
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
      )}
    </div>
  </article>
);

export default PostView;
