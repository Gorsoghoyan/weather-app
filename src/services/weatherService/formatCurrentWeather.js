
export const formatCurrentWeather = (data) => {
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