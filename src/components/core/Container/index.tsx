import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";

import { styled, StyledElementProps } from "~/styles/stitches.config";

const DEFAULT_TAG = "div";
const StyledContainer = styled(DEFAULT_TAG, {
  mx: "auto",
  width: "100%",
  variants: {
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});

type ContainerVariants = VariantProps<typeof StyledContainer>;
type ContainerOwnProps = StyledElementProps & ContainerVariants;

export const Container = forwardRef<HTMLDivElement, ContainerOwnProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledContainer {...props} ref={forwardedRef}>
        {children}
      </StyledContainer>
    );
  }
);
