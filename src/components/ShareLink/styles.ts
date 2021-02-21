import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  display: flex;
  background: ${({ theme }) => theme.colors.blue500};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.25rem;
  margin: 3rem auto;
  align-items: center;
  font-weight: bold;
  transition: background 0.2s;

  img {
    width: 43px;
    height: 36px;
  }

  div {
    padding: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    padding: 0.15rem 0;
    &:hover {
      text-decoration: none;
      background: ${({ theme }) => theme.colors.blue700};
    }
  }

  @media (${({ theme }) => theme.responsive.phone}) {
    max-width: 100%;
    padding: 1rem;
    font-size: 0.9rem;

    img {
      width: 36px;
      height: 30px;
    }

    div {
      padding: 0 1rem 0;
    }
  }
`;
