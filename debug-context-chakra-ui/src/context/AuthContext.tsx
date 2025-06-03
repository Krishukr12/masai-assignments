import { createContext, useState, type ReactNode } from "react";

interface UserLoginType {
  isLoggedIn: boolean;
  toggleAuth: () => void;
}

const initialValue: UserLoginType = {
  isLoggedIn: false,
  toggleAuth: () => {},
};

export const AuthContext = createContext<UserLoginType>(initialValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
