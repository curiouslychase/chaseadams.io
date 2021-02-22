import { useRouter } from "next/router";
import Prism from "prismjs";
import type { FC } from "react";
import { useEffect } from "react";

import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";

import { Container } from "./styles";

const Layout: FC = ({ children }) => {
  const { pathname } = useRouter();

  let className = ``;

  if (pathname === `/`) {
    className = `home`;
  } else {
    className = pathname.split(`/`)[1];
  }

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Container className={className}>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
};
export default Layout;
