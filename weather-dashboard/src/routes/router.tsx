import type { RouteObject } from "react-router";
import { Home, homeLoader } from "../pages/Home";
import { CityWeather, cityWeatherLoader } from "../pages/CityWeather";

export const routes = [
  {
    index: true,
    element: <Home />,
    loader: homeLoader,
  },
  {
    path: "/weather/:city",
    element: <CityWeather />,
    loader: cityWeatherLoader,
  },
] satisfies RouteObject[];
