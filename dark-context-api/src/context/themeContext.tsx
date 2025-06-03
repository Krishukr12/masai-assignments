import { createContext, useState, type ReactNode } from "react";

interface initialValue {
  theme: "dark" | "white";
  toggleTheme: () => void;
}
const initialValue: initialValue = {
  theme: "white",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "white">("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "white" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
