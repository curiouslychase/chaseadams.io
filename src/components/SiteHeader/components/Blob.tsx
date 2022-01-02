import { Box } from "~/components/core/Box";
import { darkTheme, lightTheme, styled } from "~/styles/stitches.config";

export const BlobBox = styled(Box, {});

export const Blob = () => {
  return (
    <BlobBox
      css={{
        transition: "all .2s",
        [`.${darkTheme} &`]: {
          color: "$blue600",
          "@bp1": {
            color: "$blue400",
          },
        },
        [`.${lightTheme} &`]: {
          color: "$blue400",
          "@bp1": {
            color: "$blue600",
          },
        },
      }}
    >
      <svg
        width={64}
        height={64}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <g transform="translate(-208.001 -1695)">
          <path
            d="M13.865,165.45C-16.473,82.1,1.2,44.2,84.55,13.864S205.8,1.2,236.136,84.549,248.8,205.8,165.45,236.135,44.2,248.8,13.865,165.45"
            transform="translate(211 1698)"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </BlobBox>
  );
};
