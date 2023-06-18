import WeatherIcon from "./ui/WeatherIcon";
import { useWeatherDetails } from "../hooks/useWeatherDetails";
import { formatTemp, formatToLocalTime } from "../services/weatherService";
import s from "../assets/sass/weatherDetails.module.scss";

const DetailsItem = ({ Icon, title, value, wall }) => {
  return (
    <div className={s.detailsItem}>
      <Icon />
      <span><span className={s.title}>{title}: </span>{value}</span>
      <span className={s.wall}>{wall && "|"}</span>
    </div>
  );
};

export default function WeatherDetails({ weather }) {
  const { detailsConfig } = useWeatherDetails(weather);

  return (
    <section className={s.container}>
      <h2>{weather.name}, {weather.country}</h2>
      <div className={s.tempAndIcon}>
        <WeatherIcon icon={weather.icon} size={75} />
        <span>{formatTemp(weather.temp)}</span>
      </div>
      <h3>{weather.description}</h3>
      <p>{formatToLocalTime(weather.dt, weather.timezone, "LLLL")}</p>
      <div className={s.sunAndTempDetails}>
        {detailsConfig.map(item => (
          <DetailsItem
            key={item.id}
            title={item.title}  
            value={item.value}
            wall={item.wall}
            Icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}