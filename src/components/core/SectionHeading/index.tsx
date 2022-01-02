import { darkTheme, lightTheme, styled } from "~/styles/stitches.config";

export const SectionHeading = styled("h2", {
  fontSize: "$lg",
  fontWeight: "bold",
  textTransform: "uppercase",
  px: "$6",
  pb: "$4",
  [`.${darkTheme} &`]: {
    color: "$blue400",
  },
  [`.${lightTheme} &`]: {
    color: "$blue700",
  },
});
