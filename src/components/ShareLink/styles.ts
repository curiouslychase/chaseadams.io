import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  display: flex;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.blue500};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 1.25rem;
  margin: 3rem auto;
  align-items: center;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
  }

  img {
    width: 43px;
    height: 36px;
  }

  div {
    padding: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      text-decoration: none;
    }
  }
`;
