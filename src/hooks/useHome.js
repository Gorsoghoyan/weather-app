import { createBrowserRouter } from "react-router-dom";
import { WeatherForecast } from "../components";

export const useHome = (weather) => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WeatherForecast weather={weather} />
    },
    {
      path: "/:dayName",
      element: <WeatherForecast weather={weather} />
    }
  ]);

  return {
    router,
  };
};