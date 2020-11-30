import Link from "next/link";
import type { FC } from "react";

import ThemeSwitcher from "../ThemeSwitcher";
import { Brand, Container, NavigationList, NavigationListItem } from "./styles";

const Navigation: FC = () => (
  <Container>
    <Link href="/">
      <Brand>Chase Adams</Brand>
    </Link>
    <NavigationList>
      <NavigationListItem>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <ThemeSwitcher />
      </NavigationListItem>
    </NavigationList>
  </Container>
);
export default Navigation;
