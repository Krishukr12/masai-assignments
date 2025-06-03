import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { UserAuthContextProvider } from "./context/UserAuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </StrictMode>
);
