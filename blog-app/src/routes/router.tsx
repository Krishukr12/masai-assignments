import type { RouteObject } from "react-router";
import { Layout } from "../components/Layout";
import { Home, homeLoader } from "../pages/Home";
import { PostDetails, postDetailsLoader } from "../pages/PostDetails";
import About from "../pages/About";

export const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
] satisfies RouteObject[];
