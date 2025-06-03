import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Settings: React.FC = () => {
  const context = useContext(UserContext);

  const user = context?.user ?? { name: "", email: "" };
  const updateUser = context?.updateUser ?? (() => {});

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ name, email });
    alert("User info updated!");
  };

  if (!context) return <div>Loading...</div>;

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;
