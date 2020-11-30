import styled from "styled-components";

const UnstyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const List = styled(UnstyledList)``;

export const Item = styled.li`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 0.5rem;
`;

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
    color: #fff;
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
