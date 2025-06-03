import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      minH={"100vh"}
      bg={theme === "dark" ? "gray.800" : "white"}
      color={theme === "dark" ? "white" : "black"}
    >
      <Navbar />
      <p>krishan</p>
    </Box>
  );
};
