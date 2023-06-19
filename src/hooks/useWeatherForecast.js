import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useWeatherForecast = (weather) => {
  const [forecastList, setForecastList] = useState(null);
  const [goBack, setGoBack] = useState(false);

  const { dayName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setGoBack(false);

    const getFormattedHourlyData = () => {
      const hourlyData = weather.daily.filter(day => {
        return day.dayName === dayName;
      })[0].hourly;

      const formattedData = hourlyData.map(hourData => {
        const {
          dt,
          weather,
          main: { temp_min, temp_max }
        } = hourData;

        const { icon, description } = weather[0];

        setGoBack(true);

        return {
          dt,
          icon,
          temp_min,
          temp_max,
          description
        };
      });

      return [...formattedData];
    };

    dayName
      ? setForecastList(getFormattedHourlyData)
      : setForecastList(weather.daily);
  }, [weather, dayName]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return {
    goBack,
    forecastList,
    handleGoBack
  };
};