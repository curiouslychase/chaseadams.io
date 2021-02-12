import Link from "next/link";
import type { FC } from "react";
import "@szhsin/react-menu/dist/index.css";

import ThemeSwitcher from "../ThemeSwitcher";
import { Brand, Container, Menu, MenuButton, MenuItem } from "./styles";

const Navigation: FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Brand>Chase Adams</Brand>
      </Link>
      <Menu menuButton={<MenuButton>Menu</MenuButton>}>
        <MenuItem>
          <Link href="/posts">
            <a>Writing</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </MenuItem>
        {/* <MenuItem>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </MenuItem> */}
        <MenuItem>
          <ThemeSwitcher />
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Navigation;
