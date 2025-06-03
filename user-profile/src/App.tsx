// src/App.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>
      <Outlet />
    </UserProvider>
  );
};

export default App;
