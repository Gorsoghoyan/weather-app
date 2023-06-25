import { formatToLocalTime } from "../../core";
import { findMinOrMaxTemp } from "./findMinOrMaxTemp";

export const formatForecastWeather = (data) => {
  const { list, timezone } = data;

  const dailyData = [];

  for (let i = 0; i < list.length; i += 8) {
    dailyData.push({
      dt: list[i + 3].dt,
      main: list[i].weather[0].main,
      icon: list[i].weather[0].icon,
      description: list[i].weather[0].description,
      temp_max: findMinOrMaxTemp(list, i, "max"),
      temp_min: findMinOrMaxTemp(list, i, "min", list[i].main.temp_min),
      dayName: formatToLocalTime(list[i + 3].dt, timezone, "dddd"),
      hourly: list.slice(i, i + 8)
    });
  }

  return {
    daily: [...dailyData],
    list: [...list],
  };
};