import type { FC } from "react";

import { Container } from "./styles";
import type { Props } from "./types";

const Title: FC<Props> = ({ size = "L", children }) => (
  <Container size={size}>{children}</Container>
);

export default Title;
