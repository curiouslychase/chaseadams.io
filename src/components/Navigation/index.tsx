import Link from "next/link";
import type { FC } from "react";
import "@szhsin/react-menu/dist/index.css";

import MaxWidthWrapper from "~/components/MaxWidthWrapper";

import { Brand, Container, HeadingWrapper, Menu, MenuItem } from "./styles";

const Navigation: FC = () => {
  return (
    <MaxWidthWrapper>
      <Container>
        <HeadingWrapper>
          <Link href="/" passHref>
            <Brand>
              <span>
                Chase <span className="onLarge">Adams</span>
              </span>
            </Brand>
          </Link>
        </HeadingWrapper>
        <Menu>
          <MenuItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </MaxWidthWrapper>
  );
};

export default Navigation;
