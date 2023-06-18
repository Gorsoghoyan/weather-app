import { lazy } from "react";
import { useApp } from "./hooks/useApp";
import { Route, Routes } from "react-router-dom";
import s from "./assets/sass/app.module.scss";

const SearchAndUnits = lazy(() => import("./components/SearchAndUnits"));
const WeatherDetails = lazy(() => import("./components/WeatherDetails"));
const WeatherForecast = lazy(() => import("./components/WeatherForecast"));
const PageLoading = lazy(() => import("./components/PageLoading"));

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
        <div>Error</div>
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
                <WeatherForecast 
                  list={weather.daily} 
                  tz={weather.timezone} 
                />
              } 
            />
            <Route 
              path="/:day" 
              element={
                <WeatherForecast 
                  list={weather.daily[0].hourly} 
                  tz={weather.timezone} 
                />
              } 
            />
          </Routes>
        </>
      ) : null}
    </div>
  );
}