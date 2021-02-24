import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;

  @media (${({ theme }) => theme.responsive.phone}) {
    width: 100%;
  }
`;
