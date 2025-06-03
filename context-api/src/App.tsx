import { useState } from "react";
import { Child1 } from "./Child1";

export const App = () => {
  const [userName, setUserName] = useState<string>("");

  return (
    <section
      style={{
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        style={{ padding: "10px", outline: "none" }}
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Child1 userName={userName} />
    </section>
  );
};
