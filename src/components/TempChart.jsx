import { CustomTooltip } from ".";
import styles from "../assets/sass/tempChart.module.scss";

import {
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function TempChart({ weather }) {
  return (
    <section className={styles.container}>
      <ResponsiveContainer width={"100%"} height={320}>
        <LineChart
          data={weather.daily}
          margin={{ top: 30, right: 50, bottom: 10, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="temp_max"
            stroke="#1d65f0"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="temp_min"
            stroke="#ffcc35"
            strokeWidth={2}
          />
          <CartesianGrid stroke="white" strokeDasharray="3 3" />
          <YAxis stroke="white" tickFormatter={(temp) => temp + "°"} />
          <XAxis dataKey="dayName" stroke="white" />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}