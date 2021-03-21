import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding-top: 0;
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 0;
  font-size: 1rem;
  align-items: center;
  color: var(--color-primary);
  border-color: none;
  background-color: none;
  cursor: pointer;
  outline-color: none;

  & span {
    padding-left: 0.5rem;
  }
`;
