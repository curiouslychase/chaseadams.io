import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue800};
  color: ${({ theme }) => theme.colors.white100};
  padding-top: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1.25rem;
  margin-top: 3rem;
  margin-right: auto;
  margin-bottom: 3rem;
  margin-left: 3rem;
  align-items: center;
  font-weight: bold;
  transition: background 0.2s;

  img {
    width: 43px;
    height: 36px;
  }

  div {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white100};
    box-shadow: 0 3px 0 ${({ theme }) => theme.colors.white100};
    padding-top: 0.15rem;
    padding-right: 0;
    padding-bottom: 0.15rem;
    padding-left: 0;
    transition: box-shadow 400ms ease 0s;

    &:hover {
      text-decoration: none;
      transition: box-shadow 100ms ease 0s;
      box-shadow: 0 5px 0 ${({ theme }) => theme.colors.white100};
    }
  }

  @media (${({ theme }) => theme.responsive.phone}) {
    max-width: 100%;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    font-size: 0.9rem;

    img {
      width: 36px;
      height: 30px;
    }

    div {
      padding-top: 0;
      padding-right: 1rem;
      padding-bottom: 0;
      padding-left: 1rem;
    }
  }
`;
