import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

export const Footer = () => {
  const { user } = useContext(UserAuthContext);
  return (
    <div
      style={{
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid",
      }}
    >
      {user?.name ? <p>Welcome, User</p> : <p>Please log in</p>}
    </div>
  );
};
