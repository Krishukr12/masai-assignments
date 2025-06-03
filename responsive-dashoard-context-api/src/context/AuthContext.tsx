import { createContext, useState, type ReactNode } from "react";

interface InitialValueType {
  loggedIn: boolean;
  toggleUserLogin: () => void;
}
const initialValue: InitialValueType = {
  loggedIn: false,
  toggleUserLogin: () => {},
};

export const AuthContext = createContext<InitialValueType>(initialValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const toggleUserLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  return (
    <AuthContext.Provider value={{ toggleUserLogin, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
