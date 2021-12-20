import { noop } from "lodash";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { FC } from "react";

type Theme = "dark" | "light";

export const ThemeContext = createContext<{
  colorMode: Theme;
  setColorMode: (nextMode: Theme) => void;
}>({
  colorMode: "dark",
  setColorMode: noop,
});

export const ThemeSwitcherConsumer = ThemeContext.Consumer;

const lsStorageKey = "color-mode";

export const ThemeSwitcherProvider: FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<Theme>("dark");

  useEffect(() => {
    const preferredColorMode = localStorage.getItem(lsStorageKey);
    if (preferredColorMode) {
      rawSetColorMode(preferredColorMode === "light" ? "light" : "dark");
    } else if (window.matchMedia("(prefers-color-scheme)").matches) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        rawSetColorMode("dark");
      }
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        rawSetColorMode("light");
      }
    }
  }, []);

  const setColorMode = useCallback(
    (nextMode: Theme) => {
      rawSetColorMode(nextMode);
      localStorage.setItem(lsStorageKey, nextMode);
    },
    [rawSetColorMode]
  );

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
