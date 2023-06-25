import { useWeatherDetails } from "../hooks";
import { DetailsItem, WeatherIcon } from ".";
import { formatTemp, formatToLocalTime } from "../core";
import styles from "../assets/sass/weatherDetails.module.scss";

export default function WeatherDetails({ weather }) {
  const { detailsConfig } = useWeatherDetails(weather);

  return (
    <section className={styles.container}>
      <h2>{weather.name}, {weather.country}</h2>
      <div className={styles.tempAndIcon}>
        <WeatherIcon icon={weather.icon} size={75} />
        <span>{formatTemp(weather.temp)}</span>
      </div>
      <h3>{weather.description}</h3>
      <p>{formatToLocalTime(weather.dt, weather.timezone, "LLLL")}</p>
      <div className={styles.sunAndTempDetails}>
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