import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0;
  font-size: 1rem;
  align-items: center;
  color: var(--color-primary);
  border: none;
  background: none;
  cursor: pointer;
  outline: none;

  & span {
    padding-left: 0.5rem;
  }
`;
