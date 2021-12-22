import type { FC } from "react";

import { useThemeMode } from "~/contexts/ThemeContext";

export const DarkModeContainer: FC = ({ children }) => {
  const { colorMode } = useThemeMode();

  return <div className={colorMode}>{children}</div>;
};
