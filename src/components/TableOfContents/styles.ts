import styled from "styled-components";

export const Container = styled.nav`
  h2 {
    font-size: 1rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    & li {
      padding-top: 0.25rem;

      & a {
        font-size: 0.9rem;
        color: var(--color-text);
        opacity: 0.8;
        transition: all 0.2s;

        &:hover {
          opacity: 1;
          text-decoration: none;
        }
      }
    }
  }
`;
