import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { loggedIn, toggleUserLogin } = useContext(AuthContext);
  return (
    <Flex
      alignItems={"center"}
      minH={"7vh"}
      justifyContent={"space-between"}
      padding={"20px"}
      boxShadow={
        theme === "dark" ? "0 4px 6px -1px rgba(255, 255, 255, 0.1)" : "md"
      }
    >
      {loggedIn ? <Text>Welcome : Krishan</Text> : <Box></Box>}
      <Flex gap={"5px"}>
        <Button p={"10px"} onClick={toggleTheme}>
          {theme === "dark" ? "Dark" : "Light"}
        </Button>
        <Button p={"10px"} onClick={toggleUserLogin}>
          {loggedIn ? "Logged out" : "Logged In"}
        </Button>
      </Flex>
    </Flex>
  );
};
