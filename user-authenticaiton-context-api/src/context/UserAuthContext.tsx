import { createContext, useState, type ReactNode } from "react";

interface User {
  id: number;
  name: string;
  phoneNumber: number;
}

interface UserContextType {
  user: User | null;
  handleUserLogin: () => void;
  handleUserLogout: () => void;
}

const initialUser: User = {
  name: "krishan",
  id: 1,
  phoneNumber: 9199157821,
};

const initialContextValue: UserContextType = {
  user: initialUser,
  handleUserLogin: () => {},
  handleUserLogout: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserAuthContext =
  createContext<UserContextType>(initialContextValue);

export const UserAuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const handleUserLogin = () => {
    setUser(initialUser);
  };
  const handleUserLogout = () => {
    setUser(null);
  };

  return (
    <UserAuthContext.Provider
      value={{ user, handleUserLogin, handleUserLogout }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
