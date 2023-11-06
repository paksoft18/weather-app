import "./WeatherCard.scss"

interface WeatherCardProps {
  icon: string
  day: string
  time: string
  desc: string
  temp: number
}
export default function WeatherCard({
  icon,
  day,
  time,
  desc,
  temp,
}: WeatherCardProps) {
  return (
    <div className="WeatherCard">
      <span>
        {day}
      </span>
      <img src={icon} alt={desc} />
      {desc} <br />
      <span>
        {temp}
        <sup>°C</sup>
      </span>
    </div>
  )
}
