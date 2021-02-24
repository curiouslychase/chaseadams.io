import type { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const MaxWidthWrapper: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MaxWidthWrapper;
