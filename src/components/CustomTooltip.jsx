import { formatTemp } from "../core";
import styles from "../assets/sass/tempChart.module.scss";

export default function CustomTooltip({ active, payload, label }) {
  return active && (
    <div className={styles.tooltip}>
      <h4>{label}</h4>
      <p style={{ color: payload[0].stroke}}>
        <span>Temperature:</span>{formatTemp(payload[0].payload.temp_max)}
      </p>
      <p style={{ color: payload[1].stroke}}>
        <span>Temperature:</span>{formatTemp(payload[0].payload.temp_min)}
      </p>
    </div>
  );
}