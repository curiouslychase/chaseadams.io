import Link from "next/link";
import type { FC } from "react";

import { Item, List, Title } from "./styles";
import type { Props } from "./types";

const PostList: FC<Props> = ({ posts }) => (
  <List>
    {posts
      .filter(({ status }) => status === "published")
      .map(({ id, description, title, tags }) => (
        <Item key={id}>
          <Link href={`/posts/${id}`}>
            <a>
              <Title>{title}</Title>
            </a>
          </Link>
          <div>{description}</div>
          {tags &&
            tags.map(({ text, slug }) => (
              <div key={slug}>
                <Link href={slug}>
                  <a>{text}</a>
                </Link>
              </div>
            ))}
        </Item>
      ))}
  </List>
);
export default PostList;
