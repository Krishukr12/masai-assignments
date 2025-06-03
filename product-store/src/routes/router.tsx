import type { RouteObject } from "react-router";
import { productDetailLoader, ProductDetails } from "../pages/ProductDetails";
import { Product, productLoader } from "../pages/Product";

export const Routes = [
  {
    index: true,
    element: <Product />,
    loader: productLoader,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
    loader: productDetailLoader,
  },
] satisfies RouteObject[];
