import styled from "styled-components";

import { resetMargin, resetPadding } from "~/styles/resets";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-top: 2rem;
  padding-right: 0;
  padding-bottom: 2rem;
  padding-left: 0;

  .home & {
    flex-direction: column-reverse;
  }

  @media (${({ theme }) => theme.responsive.phone}) {
    ${resetPadding};
    flex-direction: row;
  }
`;

export const HeadingWrapper = styled.h2`
  font-weight: ${({ theme }) => theme.weights.normal};
  ${resetPadding};
  font-size: 1.25rem;

  .home & {
    padding-top: 3rem;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    font-size: 3.625rem;
    font-weight: ${({ theme }) => theme.weights.black};
    text-align: center;
  }
`;

export const Brand = styled.a`
  cursor: pointer;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: lowercase;

  &:hover {
    box-shadow: none;
  }

  .home & {
    ${resetPadding};
  }

  @media (${({ theme }) => theme.responsive.phone}) {
    span.onLarge {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  ${resetMargin};
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
