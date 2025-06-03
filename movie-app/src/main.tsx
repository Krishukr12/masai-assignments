import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
