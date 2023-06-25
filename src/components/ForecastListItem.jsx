import { WeatherIcon } from ".";
import { Link } from "react-router-dom";
import { formatTemp, formatToLocalTime } from "../core";
import styles from "../assets/sass/weatherForecast.module.scss";
import classnames from "classnames";

export default function ForecastListItem({
  dt,
  icon,
  dayName,
  timezone,
  tempMin,
  tempMax,
  description
}) {
  return (
    <Link
      className={classnames(
        styles.listItem, 
        { [styles.active]: !dayName }
      )}
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
      <div className={styles.temps}>
        <span>{formatTemp(tempMax)}</span>
        <span>{formatTemp(tempMin)}</span>
      </div>
      <span>{description}</span>
    </Link>
  );
}