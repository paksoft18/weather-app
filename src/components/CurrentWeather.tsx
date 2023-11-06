import "./CurrentWeather.scss"

interface CurrentweatherProps {
  city: string
  country: string
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  wind_speed: number
  visibility: number
  pressure: number
  sunrise: string
  sunset: string
  icon: string
  desc: string
  humidity: number
}
export default function CurrentWeather({
  city,
  country,
  temp,
  temp_min,
  temp_max,
  wind_speed,
  visibility,
  pressure,
  sunrise,
  sunset,
  icon,
  desc,
  humidity,
}: CurrentweatherProps) {
  return (
    <div className="CurrentWeather">
      <p>
        <i className="ri-map-pin-2-line"> </i>
        {city}, {country}
      </p>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div>
            <span style={{ fontSize: "4em", fontWeight: "bold" }}>
              {temp}
              <sup style={{ fontSize: ".4em", fontWeight: "normal" }}> °C</sup>
            </span>
          </div>
          <div>
            H: {Math.round(temp_max)}
            <sup>°C</sup> L: {Math.round(temp_min)}
            <sup>°C</sup>
          </div>
        </div>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
          }}
        >
          <img src={icon} alt={desc} />
          <span>{desc}</span>
        </div>
      </div>

      <div className="ForecastDetail">
        <div className="ForecastDetail__Item">
          <i className="ri-sun-fill"></i> Sunrise
          <strong>{sunrise}</strong>
        </div>
        <div className="ForecastDetail__Item">
          <i className="ri-moon-fill"></i> Sunset<strong>{sunset}</strong>
        </div>
        <div className="ForecastDetail__Item">
          <i className="ri-windy-fill"></i> Wind Speed
          <strong> {wind_speed} meter/sec </strong>
        </div>
        <div className="ForecastDetail__Item">
          <i className="ri-water-percent-fill"></i> Humidity
          <strong> {humidity} %</strong>
        </div>
        <div className="ForecastDetail__Item">
          <i className="ri-eye-fill"></i> Visibility
          <strong>{visibility} meters</strong>
        </div>
        <div className="ForecastDetail__Item">
          <i className="ri-speed-up-fill"></i> Pressure
          <strong>{pressure} hPa</strong>
        </div>
      </div>
    </div>
  )
}
