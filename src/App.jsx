import { lazy } from "react";
import { useApp } from "./hooks/useApp";
import { Route, Routes } from "react-router-dom";
import s from "./assets/sass/app.module.scss";

const PageLoading = lazy(() => import("./components/PageLoading"));
const PageError = lazy(() => import("./components/PageError"));

const SearchAndUnits = lazy(() => import("./components/SearchAndUnits"));
const WeatherDetails = lazy(() => import("./components/WeatherDetails"));
const WeatherForecast = lazy(() => import("./components/WeatherForecast"));
const TempChart = lazy(() => import("./components/TempChart"));

export default function App() {
  const {
    error,
    loading,
    weather,
    units,
    setUnits,
    setQuery,
    formatBackground
  } = useApp();

  return (
    <div
      className={s.mainContainer}
      style={{ background: formatBackground() }}
    >
      {loading ? (
        <PageLoading />
      ) : error ? (
        <PageError />
      ) : weather ? (
        <>
          <SearchAndUnits
            units={units}
            setUnits={setUnits}
            setQuery={setQuery}
          />
          <WeatherDetails weather={weather} />
          <Routes>
            <Route
              index
              path="/"
              element={
                <WeatherForecast weather={weather} />
              }
            />
            <Route
              path="/:dayName"
              element={
                <WeatherForecast weather={weather} />
              }
            />
          </Routes>
          <TempChart weather={weather} />
        </>
      ) : null}
    </div>
  );
}