import type { FC } from "react";

import { Container } from "./styles";

const Footer: FC = () => (
  <Container>
    <ul>
      <li>
        <a href="https://twitter.com/chaseadamsio">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/chaseadamsio">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Footer;
