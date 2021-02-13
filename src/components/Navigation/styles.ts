import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

export const HeadingWrapper = styled.div`
  padding: 3rem 0;
`;

export const Brand = styled.a`
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.black};
  font-size: 3.625rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  width: 100%;
`;

export const MenuItem = styled.div``;
