import { createContext, useState, useEffect } from "react";

export interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User;
  updateUser: (updatedUser: Partial<User>) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const mockUser: User = {
  name: "John Doe",
  email: "john@example.com",
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(mockUser);

  useEffect(() => {
    setUser(mockUser);
  }, []);

  const updateUser = (updatedUser: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...updatedUser }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
