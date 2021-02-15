import styled from "styled-components";

export const Main = styled.main`
  @media (${({ theme }) => theme.responsive.phone}) {
    text-align: center;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3rem;

  @media (${({ theme }) => theme.responsive.phone}) {
    display: block;
    padding: 2rem 0 0 0;
    text-align: center;

    img {
      margin: 0 auto;
    }
  }

  img {
    width: 150px;
    border-radius: 50%;
  }

  p {
    padding: 1rem 2rem;
    font-size: 1.25rem;
  }
`;
