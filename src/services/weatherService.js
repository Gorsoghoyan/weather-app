import moment from "moment/moment";

const API_KEY = "4cf65d99fdeb1d14db18420b840d7a69";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then(response => response.json());
};

const formatCurrentWeather = (data) => {
  const {
    dt,
    name,
    weather,
    timezone,
    sys: { country, sunrise, sunset },
    main: { temp, temp_min, temp_max, feels_like }
  } = data;

  const { main: details, icon, description } = weather[0];
  
  return {
    dt,
    name,
    timezone,
    country,
    sunrise,
    sunset,
    temp,
    temp_min,
    temp_max,
    feels_like,
    details,
    icon,
    description
  };
};

const findMinOrMaxTemp = (
  weatherList,
  start,
  action,
  initial = 0
) => {
  let target = initial;

  for (let i = start; i < start + 8; i++) {
    target = action === "max"
      ? Math.max(target, weatherList[i].main.temp_max)
      : Math.min(target, weatherList[i].main.temp_min)
  }

  return target;
};

const formatForecastWeather = (data) => {
  const { list } = data;

  const dailyData = [];

  for (let i = 0; i < list.length; i += 8) {
    dailyData.push({
      dt: list[i].dt,
      dt_txt: list[i].dt_txt,
      main: list[i].weather[0].main,
      description: list[i].weather[0].description,
      icon: list[i].weather[0].icon,
      temp_max: findMinOrMaxTemp(list, i, "max"),
      temp_min: findMinOrMaxTemp(list, i, "min", list[i].main.temp_min),
      hourly: list.slice(i, i + 8)
    });
  }

  return {
    daily: [...dailyData],
    list: [...list],
  };
};

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

export const formatTemp = (temp) => Math.round(temp) + "°";

export const formatToLocalTime = (dt, timezone, format) => {
  return moment.unix(dt).utcOffset(timezone / 60).format(format);
};