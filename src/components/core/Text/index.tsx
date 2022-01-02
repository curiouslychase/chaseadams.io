import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";

import { styled, StyledElementProps } from "~/styles/stitches.config";

const DEFAULT_TAG = "span";
const StyledText = styled(DEFAULT_TAG, {
  variants: {
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      small: {
        fontSize: "$2",
      },
      base: {
        fontSize: "$base",
      },
      regular: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
      "2xl": {
        fontSize: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
      },
      "4xl": {
        fontSize: "$4xl",
      },
    },
  },
});

type TextVariants = VariantProps<typeof StyledText>;
type TextOwnProps = StyledElementProps & TextVariants;

export const Text = forwardRef<HTMLDivElement, TextOwnProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledText {...props} ref={forwardedRef}>
        {children}
      </StyledText>
    );
  }
);
