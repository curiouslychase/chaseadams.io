import { css } from "styled-components";

export const resetMargin = css`
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
`;

export const resetPadding = css`
  padding-top: 0;
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 0;
`;

export const resetList = css`
  ${resetMargin};
  ${resetPadding};
  list-style: none;
`;
