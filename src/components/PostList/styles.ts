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
  display: inline-block;
  margin: 0;

  font-weight: ${({ theme }) => theme.weights.normal};
`;

export const TitleLink = styled.a`
  display: block;
  padding: 0.5rem 0.75rem;
  background: var(--color-labelBackground);
  color: var(--color-labelForeground);
  transition: 0.2s all;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue500};
    text-decoration: none;
  }
`;

export const SummaryMeta = styled.div`
  padding: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 1rem;
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
