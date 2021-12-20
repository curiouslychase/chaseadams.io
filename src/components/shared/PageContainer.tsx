import type { FC } from "react";

import { useThemeMode } from "~/contexts/ThemeContext";

export const PageContainer: FC = ({ children }) => {
  const { colorMode } = useThemeMode();

  return (
    <div className={colorMode}>
      <div className="flex flex-col justify-start bg-slate-100 text-slate-900 dark:bg-black dark:text-slate-200 min-h-screen transition">
        {children}
      </div>
    </div>
  );
};
