import styled from "styled-components";

import { resetList } from "~/styles/resets";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  padding-top: 4rem;
  padding-right: 0;
  padding-bottom: 1rem;
  padding-left: 0;

  li a {
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const SocialContainer = styled.ul`
  ${resetList};
  display: flex;

  justify-content: flex-start;
`;
