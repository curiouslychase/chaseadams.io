import type { FC } from "react";

import ThemeSwitcher from "../ThemeSwitcher";
import { Container, SocialContainer } from "./styles";

const Footer: FC = () => (
  <Container>
    <li>
      <SocialContainer>
        <li>
          <a href="https://twitter.com/chaseadamsio">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/chaseadamsio">GitHub</a>
        </li>
      </SocialContainer>
    </li>

    <li>
      <ThemeSwitcher />
    </li>
  </Container>
);

export default Footer;
