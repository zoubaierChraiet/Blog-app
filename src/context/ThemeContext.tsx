"use client";

import { createContext, useState } from "react";

interface IThemeContextValue {
  theme: "light" | "dark";
  toggle: () => void;
}

export const ThemeContext = createContext<IThemeContextValue>({
  theme: "light",
  toggle: () => undefined,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
