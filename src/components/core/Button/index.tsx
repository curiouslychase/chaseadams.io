import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";

import {
  lightTheme,
  stitchesConfig,
  styled,
  StyledElementProps,
} from "~/styles/stitches.config";

export const StyledButton = styled("button", {
  border: "none",
  display: "inline-block",
  variants: {
    color: {
      blue: {
        [`.${stitchesConfig.theme} &`]: {
          backgroundColor: "$blue500",
          color: "$white",
          "&:hover": {
            backgroundColor: "$blue600",
            color: "$white",
          },
        },
        [`.${lightTheme} &`]: {
          backgroundColor: "$blue500",
          color: "$white",
        },
      },
      emerald: {
        [`.${stitchesConfig.theme} &`]: {
          backgroundColor: "$emerald400",
          color: "$black",
        },
        [`.${lightTheme} &`]: {
          backgroundColor: "$emerald500",
          color: "$black",
        },
      },
      hollow: {
        backgroundColor: "transparent",
        [`.${stitchesConfig.theme} &`]: {
          border: "2px solid $white",
        },
        [`.${lightTheme} &`]: {
          border: "2px solid $black",
        },
      },
    },
    size: {
      base: {
        fontSize: "$3",
        padding: "20px 32px",
      },
      lg: {
        fontSize: "24px",
        padding: "8px 16px",
      },
    },
    spacing: {
      normal: {
        padding: "8px 16px",
      },
      lg: {
        padding: "12px 20px",
      },
    },
    radii: {
      none: {
        borderRadius: "none",
      },
      regular: {
        borderRadius: "4px",
      },
      md: {
        borderRadius: "",
      },
      full: {
        borderRadius: "9999px",
      },
    },
  },
  defaultVariants: {
    color: "blue",
    radii: "regular",
    size: "base",
  },
  cursor: "pointer",
});

type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonOwnProps = StyledElementProps & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonOwnProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledButton {...props} ref={forwardedRef}>
        {children}
      </StyledButton>
    );
  }
);
