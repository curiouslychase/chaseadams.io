import { createContext, useEffect, useState } from "react";
import type { FC } from "react";

import theme from "~/styles/themes";

export const ThemeContext = createContext({
  colorMode: "dark",
  setColorMode: (mode: string) => {
    console.log(mode);
  },
});

export const ThemeSwitcherConsumer = ThemeContext.Consumer;

export const ThemeSwitcherProvider: FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState("dark");
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue: string) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Update each color
    root.style.setProperty(
      "--color-text",
      newValue === "light" ? theme.light.colors.text : theme.dark.colors.text
    );
    root.style.setProperty(
      "--color-background",
      newValue === "light"
        ? theme.light.colors.background
        : theme.dark.colors.background
    );
    root.style.setProperty(
      "--color-accent",
      newValue === "light"
        ? theme.light.colors.accent
        : theme.dark.colors.accent
    );
    root.style.setProperty(
      "--color-primary",
      newValue === "light"
        ? theme.light.colors.primary
        : theme.dark.colors.primary
    );
    root.style.setProperty(
      "--color-muted",
      newValue === "light" ? theme.light.colors.muted : theme.dark.colors.muted
    );
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
