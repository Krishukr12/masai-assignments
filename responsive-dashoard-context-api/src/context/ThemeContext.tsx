import { createContext, useState, type ReactNode } from "react";

interface InitialValueType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}
const initialValue: InitialValueType = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<InitialValueType>(initialValue);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
