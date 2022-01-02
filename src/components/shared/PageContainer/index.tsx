import { Container } from "~/components/core/Container";
import { styled } from "~/styles/stitches.config";

export const PageContainer = styled(Container, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100vh",
  paddingTop: "96px",
  "@bp1": {
    paddingTop: "0",
  },
});
