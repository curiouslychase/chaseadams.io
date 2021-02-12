import {
  Menu as DefaultMenu,
  MenuButton as DefaultMenuButton,
  MenuItem as DefaultMenuItem,
} from "@szhsin/react-menu";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Brand = styled.a`
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue500};
  font-weight: ${({ theme }) => theme.weights.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.menuButtonActiveForeground};
    color: ${({ theme }) => theme.colors.menuButtonActiveBackground};
    text-decoration: none;
  }
`;

export const MenuButton = styled(DefaultMenuButton)`
  background: ${({ theme }) => theme.colors.menuButtonBackground};
  color: ${({ theme }) => theme.colors.menuButtonForeground};
  border: 1px solid ${({ theme }) => theme.colors.menuButtonBorder};

  &:hover,
  &.rc-menu-button--open {
    background: ${({ theme }) => theme.colors.menuButtonActiveBackground};
    color: ${({ theme }) => theme.colors.menuButtonActiveForeground};
    border: 1px solid ${({ theme }) => theme.colors.menuButtonActiveBorder};
  }
`;

export const Menu = styled(DefaultMenu)`
  margin-top: 0.5rem;
  padding: 0;
  background: ${({ theme }) => theme.colors.menuButtonBackground};
  border: 2px solid ${({ theme }) => theme.colors.menuButtonBackground};
  color: ${({ theme }) => theme.colors.menuButtonForeground};
`;

export const MenuItem = styled(DefaultMenuItem)`
  background: ${({ theme }) => theme.colors.menuButtonBackground};
  color: ${({ theme }) => theme.colors.menuButtonForeground};
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.menuButtonActiveBackground};
  }

  &:hover,
  &:hover a {
    color: ${({ theme }) => theme.colors.menuButtonActiveForeground};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.menuButtonForeground};
    display: block;
    width: 100%;
  }

  a,
  button {
    padding: 1rem;
  }
`;
