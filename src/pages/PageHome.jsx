import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { useHome } from "../hooks";

import {
  SearchAndUnits,
  WeatherDetails,
  TempChart
} from "../components";

export default function PageHome({ 
  weather, 
  units, 
  setUnits, 
  setQuery 
}) {
  const { router } = useHome(weather);

  return (
    <Fragment>
      <SearchAndUnits
        units={units}
        setUnits={setUnits}
        setQuery={setQuery}
      />
      <WeatherDetails weather={weather} />
      <RouterProvider router={router} />
      <TempChart weather={weather} />
    </Fragment>
  );
} 