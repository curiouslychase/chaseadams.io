import styled from "styled-components";

import { resetList } from "~/styles/resets";

export const Container = styled.nav`
  h2 {
    font-size: 1rem;
  }
  ul {
    ${resetList}

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
