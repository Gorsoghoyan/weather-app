import { formatCurrentWeather } from "./formatCurrentWeather";
import { formatForecastWeather } from "./formatForecastWeather";
import { getWeatherData } from "./getWeatherData";

export const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const formattedForecastWeather = await getWeatherData(
    "forecast",
    searchParams
  ).then(formatForecastWeather);

  return {
    ...formattedCurrentWeather,
    ...formattedForecastWeather
  };
};