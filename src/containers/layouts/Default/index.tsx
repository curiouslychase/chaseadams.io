import type { FC } from "react";

import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";

import { Container } from "./styles";

const Layout: FC = ({ children }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
);
export default Layout;
