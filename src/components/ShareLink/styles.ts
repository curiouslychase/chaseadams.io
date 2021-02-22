import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  display: flex;
  background: ${({ theme }) => theme.colors.blue800};
  color: ${({ theme }) => theme.colors.white100};
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
    color: ${({ theme }) => theme.colors.white100};
    box-shadow: 0 3px 0 ${({ theme }) => theme.colors.white100};
    padding: 0.15rem 0;
    transition: box-shadow 400ms ease 0s;

    &:hover {
      text-decoration: none;
      transition: box-shadow 100ms ease 0s;
      box-shadow: 0 5px 0 ${({ theme }) => theme.colors.white100};
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
