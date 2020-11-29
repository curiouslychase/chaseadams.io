import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Brand = styled.a`
  cursor: pointer;
  padding: 1rem 1rem 1rem 0;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavigationListItem = styled.li`
  margin: 0;
  padding: 0;

  a {
    padding: 1rem;

    &.last {
      padding-right: 0;
    }
  }
`;
