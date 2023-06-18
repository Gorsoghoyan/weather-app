
export default function WeatherIcon({ icon, alt = "icon", size }) {
  return (
    <img 
      width={size}
      height={size}
      src={`https://openweathermap.org/img/wn/${icon}.png`} 
      alt={alt} 
    />
  );
}