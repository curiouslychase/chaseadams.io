import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";

import { styled, StyledElementProps } from "~/styles/stitches.config";

const DEFAULT_TAG = "h1";
const StyledHeading = styled(DEFAULT_TAG, {
  fontWeight: "bold",
  lineHeight: "$normal",
  variants: {
    level: {
      h1: {
        fontSize: "$3xl",
        "@bp1": {
          fontSize: "$5xl",
        },
      },
      h2: {
        fontSize: "$2xl",
        "@bp1": {
          fontSize: "$4xl",
        },
      },
      h3: {
        fontSize: "$xl",
        "@bp1": {
          fontSize: "$3xl",
        },
      },
      h4: {
        fontSize: "$2xl",
      },
      h5: {
        fontSize: "$xl",
      },
      h6: {
        fontSize: "$lg",
      },
    },
  },
  defaultVariants: {
    level: "h1",
  },
});

type HeadingVariants = VariantProps<typeof StyledHeading>;
type HeadingOwnProps = StyledElementProps & HeadingVariants;

export const Heading = forwardRef<HTMLDivElement, HeadingOwnProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledHeading as={props.level} {...props} ref={forwardedRef}>
        {children}
      </StyledHeading>
    );
  }
);
