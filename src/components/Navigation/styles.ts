import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 0;

  .home & {
    flex-direction: column-reverse;
  }

  @media (${({ theme }) => theme.responsive.phone}) {
    padding: 0;
    flex-direction: row;
  }
`;

export const HeadingWrapper = styled.h2`
  font-weight: ${({ theme }) => theme.weights.normal};
  padding: 0;
  font-size: 1.25rem;

  .home & {
    padding: 3rem 0 0;
    font-size: 3.625rem;
    font-weight: ${({ theme }) => theme.weights.black};
    text-align: center;
  }
`;

export const Brand = styled.a`
  cursor: pointer;
  padding: 0.5rem 0.75rem 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: lowercase;

  &:hover {
    box-shadow: none;
  }

  .home & {
    padding: 0;
  }

  @media (${({ theme }) => theme.responsive.phone}) {
    span.onLarge {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  text-transform: lowercase;
`;

export const MenuItem = styled.li`
  padding-right: 2rem;
  &:last-child {
    padding-right: 0;
  }
`;
