import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  padding: 2rem 0;

  @media (${({ theme }) => theme.responsive.phone}) {
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeadingWrapper = styled.h2`
  padding: 3rem 0 0;
  font-size: 3.625rem;
  text-align: center;

  @media (${({ theme }) => theme.responsive.phone}) {
    padding: 0;
    font-size: 1.5rem;
  }
`;

export const Brand = styled.a`
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.black};
  text-transform: lowercase;

  @media (${({ theme }) => theme.responsive.phone}) {
    span.onLarge {
      display: none;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Menu = styled.ul`
  list-style: none;
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
