import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../services";
import variables from "../assets/sass/variables.scss";

export const useApp = () => {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "Yerevan" });
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await getFormattedWeatherData({ ...query, units });
        setError(false);
        setWeather(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [query, units]); 

  const formatBackground = () => {
    if (!weather || loading || error) return variables.coldWeatherBg;

    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return variables.coldWeatherBg;

    return variables.warmWeatherBg;
  };

  return {
    error,
    loading,
    weather,
    units,
    setUnits,
    setQuery,
    formatBackground
  };
};