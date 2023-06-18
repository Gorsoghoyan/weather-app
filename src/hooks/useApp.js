import { useCallback, useEffect, useState } from "react";
import { getFormattedWeatherData } from "../services/weatherService";
import variables from "../assets/sass/variables.scss";

const errorMessage = "The Web server received an invalid response! Please try again later";

export const useApp = () => {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "Yerevan" });
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await getFormattedWeatherData({ ...query, units });
        console.log(data)
        setError("");
        setLoading(false);
        setWeather(data);
      } catch (error) {
        setLoading(false);
        setError(errorMessage);
      }
    };

    fetchWeather();
  }, [query, units]); 

  const formatBackground = () => {
    if (!weather) return variables.coldWeatherBg;
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