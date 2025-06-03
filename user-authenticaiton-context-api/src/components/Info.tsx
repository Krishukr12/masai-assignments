import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

export const Info = () => {
  const { user } = useContext(UserAuthContext);
  return (
    <div
      style={{
        padding: "15px",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user?.name ? <p>User is logged in</p> : <p>User is logged out</p>}
    </div>
  );
};
