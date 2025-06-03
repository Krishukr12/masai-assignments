import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={theme === "dark" ? "dark" : "white"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p>Theme is just theme toggler</p>
        <button
          onClick={toggleTheme}
          style={{ outline: "none", padding: "6px", cursor: "pointer" }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};
