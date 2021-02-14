import Link from "next/link";
import type { FC } from "react";

import { Item, List, Title } from "./styles";
import type { Props } from "./types";

const TagPostList: FC<Props> = ({ posts }) => (
  <List>
    {posts
      .filter(({ status }) => status === "published")
      .map(({ id, description, title }) => (
        <Item key={id}>
          <Title>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </Title>
          <div>{description ?? <em>no description.</em>}</div>
        </Item>
      ))}
  </List>
);

export default TagPostList;
