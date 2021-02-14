import styled from "styled-components";

export const Container = styled.div`
  width: 45rem;
  margin: 0 auto;
  padding: 1rem;

  @media (${({ theme }) => theme.responsive.phone}) {
    width: 100%;
  }
`;
