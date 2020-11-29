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
          Tags{" "}
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </div>
      )}
    </div>
  </article>
);

export default PostView;
