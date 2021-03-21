import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding-top: 0.25rem;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  align-items: center;
  color: var(--color-primary);
  border-width: 0;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  outline-width: 0;
  outline-color: transparent;

  & span {
    padding-left: 0.5rem;
  }
`;
