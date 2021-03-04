import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${({ theme }) => theme.responsive.phone}) {
    width: 100%;
  }
`;
