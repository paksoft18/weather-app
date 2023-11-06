import WeatherDataRow from "./WeatherDataRow";

interface WeatherData {
  city: {
    name: string
    country: string
    timezone: number
    sunrise: number
    sunset: number
  },
  list: WeatherDataRow[];
  }

export default WeatherData;