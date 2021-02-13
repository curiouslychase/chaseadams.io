import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  padding: 4rem 0 1rem;

  li a {
    padding: 0.5rem;
  }
`;

export const SocialContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: flex-start;
`;
