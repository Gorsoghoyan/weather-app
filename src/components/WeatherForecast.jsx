import { ForecastListItem } from ".";
import { useWeatherForecast } from "../hooks";
import { IoIosArrowBack } from "react-icons/io";
import styles from "../assets/sass/weatherForecast.module.scss";

export default function WeatherForecast({ weather }) {
  const { 
    goBack, 
    forecastList, 
    handleGoBack
  } = useWeatherForecast(weather);

  return (
    <section className={styles.container}>
      <div className={styles.listContainer}>
        {forecastList?.map(item => (
          <ForecastListItem
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
          className={styles.goBack}
          onClick={handleGoBack}
        />
      )}
    </section>
  );
}