import Prism from "prismjs";
import type { FC } from "react";
import { useEffect } from "react";

import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";

import { Container } from "./styles";

const Layout: FC = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Container>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
};
export default Layout;
