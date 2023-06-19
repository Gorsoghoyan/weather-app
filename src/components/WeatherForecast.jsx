import WeatherIcon from "./ui/WeatherIcon";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useWeatherForecast } from "../hooks/useWeatherForecast";
import { formatTemp, formatToLocalTime } from "../services/weatherService";
import s from "../assets/sass/weatherForecast.module.scss";
import c from "classnames";

const ListItem = ({
  dt,
  icon,
  dayName,
  timezone,
  tempMin,
  tempMax,
  description 
}) => {
  return (
    <Link
      className={c(s.listItem, { [s.active]: !dayName })}
      to={dayName ? dayName : null}
    >
      <span>
        {formatToLocalTime(
          dt,
          timezone,
          dayName ? "ddd D" : "H:mm"
        )}
      </span>
      <WeatherIcon icon={icon} size={45} />
      <div className={s.temps}>
        <span>{formatTemp(tempMax)}</span>
        <span>{formatTemp(tempMin)}</span>
      </div>
      <span>{description}</span>
    </Link>
  );
};

export default function WeatherForecast({ weather }) {
  const { 
    goBack, 
    forecastList, 
    handleGoBack
  } = useWeatherForecast(weather);

  return (
    <section className={s.container}>
      <div className={s.listContainer}>
        {forecastList?.map(item => (
          <ListItem
            key={item.dt}
            dt={item.dt}
            icon={item.icon}
            dayName={item.dayName}
            tempMin={item.temp_min}
            tempMax={item.temp_max}
            timezone={weather.timezone}
            description={item.description}
          />
        ))}
      </div>
      {goBack && (
        <IoIosArrowBack 
          className={s.goBack}
          onClick={handleGoBack}
        />
      )}
    </section>
  );
}