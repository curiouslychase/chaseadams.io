import Link from "next/link";
import type { FC } from "react";

import {
  DescriptionWrapper,
  Item,
  List,
  SummaryMeta,
  Tag,
  TagHeading,
  TagList,
  TagListItem,
  TagWrapper,
  Title,
  TitleLink,
} from "./styles";
import type { Props } from "./types";

const PostList: FC<Props> = ({ posts }) => (
  <List>
    {posts
      .filter(({ status }) => status === "published")
      .map(({ id, description, title, tags }) => (
        <Item key={id}>
          <Title>
            <Link href={`/posts/${id}`} passHref>
              <TitleLink>{title}</TitleLink>
            </Link>
          </Title>
          <SummaryMeta>
            <DescriptionWrapper>{description}</DescriptionWrapper>
            {tags.length ? (
              <TagWrapper>
                <TagHeading>Tagged with: </TagHeading>
                <TagList>
                  {tags.map(({ text, slug }) => (
                    <TagListItem key={slug}>
                      <Link href={slug}>
                        <Tag>{text}</Tag>
                      </Link>
                    </TagListItem>
                  ))}
                </TagList>
              </TagWrapper>
            ) : null}
          </SummaryMeta>
        </Item>
      ))}
  </List>
);
export default PostList;
