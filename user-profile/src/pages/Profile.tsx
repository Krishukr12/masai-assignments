import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Profile: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) return <div>Loading...</div>;

  const { user } = context;

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};
