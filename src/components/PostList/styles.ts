import styled from "styled-components";

import { resetMargin, resetPadding } from "~/styles/resets";

const UnstyledList = styled.ul`
  ${resetMargin};
  ${resetPadding};
  list-style: none;
`;

export const List = styled(UnstyledList)``;

export const Item = styled.li`
  padding-top: 1.5rem;
  padding-right: 0;
  padding-bottom: 1.5rem;
  padding-left: 0;
`;

export const Title = styled.h3``;

export const TitleLink = styled.a`
  display: block;
`;

export const SummaryMeta = styled.div``;

export const DescriptionWrapper = styled.div``;

export const TagWrapper = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

export const TagList = styled(UnstyledList)`
  display: inline;
`;

export const TagListItem = styled.li`
  display: inline;
  &:not(:last-child)::after {
    color: ${({ theme }) => theme.colors.text};
    content: ", ";
  }
`;

export const Tag = styled.a`
  cursor: pointer;
  padding-right: 0.1rem;
`;

export const TagHeading = styled.h4`
  font-weight: ${({ theme }) => theme.weights.normal};
  color: #999;
  display: inline;
`;
