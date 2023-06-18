import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { formatTemp, formatToLocalTime } from "../services/weatherService";

export const useWeatherDetails = (weather) => {

  const detailsConfig = [
    {
      id: 1,
      title: "Rise",
      value: formatToLocalTime(
        weather.sunrise,
        weather.timezone,
        "hh:mm A"
      ),
      icon: BsSunriseFill,
      wall: true
    },
    {
      id: 2,
      title: "Set",
      value: formatToLocalTime(
        weather.sunset,
        weather.timezone,
        "hh:mm A"
      ),
      icon: BsSunsetFill,
      wall: true
    },
    {
      id: 3,
      title: "High",
      value: formatTemp(weather.temp_max),
      icon: FaTemperatureHigh,
      wall: true
    },
    {
      id: 4,
      title: "Low",
      value: formatTemp(weather.temp_min),
      icon: FaTemperatureLow,
      wall: false
    },
  ];

  return {
    detailsConfig
  };
};  