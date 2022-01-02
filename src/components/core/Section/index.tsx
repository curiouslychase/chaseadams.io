import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";

import { styled, StyledElementProps } from "~/styles/stitches.config";

const DEFAULT_TAG = "section";
const StyledSection = styled(DEFAULT_TAG, {
  mx: "auto",
  variants: {
    size: {
      none: {
        py: "0",
      },
      "1": {
        py: "$3",
      },
      "2": {
        py: "$5",
      },
      "3": {
        py: "$6",
      },
      lg: {
        py: "$9",
      },
      loose: {
        py: "$9",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

type SectionVariants = VariantProps<typeof StyledSection>;
type SectionOwnProps = StyledElementProps &
  SectionVariants & { children: JSX.Element | Array<JSX.Element> };

export const Section = forwardRef<HTMLElement, SectionOwnProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledSection {...props} ref={forwardedRef}>
        {children}
      </StyledSection>
    );
  }
);
