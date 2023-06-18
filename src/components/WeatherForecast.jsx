import WeatherIcon from "./ui/WeatherIcon";
import { Link } from "react-router-dom";
import { formatTemp, formatToLocalTime } from "../services/weatherService";
import s from "../assets/sass/weatherForecast.module.scss";

const ListItem = ({
  dt,
  icon,
  timezone,
  tempMin,
  tempMax,
  description
}) => {
  return (
    <Link 
      className={s.listItem}
      to={formatToLocalTime(dt, timezone, "dddd")} 
    >
      <span>{formatToLocalTime(dt, timezone, "ddd D")}</span>
      <WeatherIcon icon={icon} size={45} />
      <div className={s.temps}>
        <span>{formatTemp(tempMax)}</span>
        <span>{formatTemp(tempMin)}</span>
      </div>
      <span>{description}</span>
    </Link>
  );
};

export default function WeatherForecast({ list, tz }) {
  return (
    <section className={s.container}>
      <div className={s.listContainer}>
        {list.map(item => (
          <ListItem
            key={item.dt}
            dt={item.dt}
            timezone={tz}
            icon={item.icon}
            tempMin={item.temp_min}
            tempMax={item.temp_max}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}