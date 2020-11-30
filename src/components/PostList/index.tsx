import Link from "next/link";
import type { FC } from "react";

import {
  DescriptionWrapper,
  Item,
  List,
  Tag,
  TagHeading,
  TagList,
  TagListItem,
  TagWrapper,
  Title,
} from "./styles";
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
          <DescriptionWrapper>{description}</DescriptionWrapper>
          <TagWrapper>
            <TagHeading>Tagged with: </TagHeading>
            <TagList>
              {tags &&
                tags.map(({ text, slug }) => (
                  <TagListItem key={slug}>
                    <Link href={slug}>
                      <Tag>{text}</Tag>
                    </Link>
                  </TagListItem>
                ))}
            </TagList>
          </TagWrapper>
        </Item>
      ))}
  </List>
);
export default PostList;
