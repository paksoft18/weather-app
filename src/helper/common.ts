import WeatherData from "../interface/WeatherData";
import WeatherDataRow from "../interface/WeatherDataRow";

export function filterUniqueDates(data: WeatherData): WeatherData {
    const filteredData: WeatherDataRow[] = [];
    const uniqueDates = new Set<string>();

    data.list.forEach((item) => {
    const date = new Date(item.dt_txt).toLocaleDateString();
    if (!uniqueDates.has(date)) {
        uniqueDates.add(date);
        filteredData.push(item);
    }
    });

    return { city:data.city, list: filteredData };

}

export function getIconUrl(iconCode: string, size = "2x"): string {
    return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`
  }

  export function getTime(unix_time: number) {
    let time = new Date(unix_time * 1000)
    // unix time is in seconds
    // multiply by 1000 so that time is in milliseconds and not seconds
    // Date works with milliseconds

    return `${time.getHours()}:${`${
      time.getMinutes() < 10 ? "0" : ""
    }${time.getMinutes()}`}`
  }

  export function getDay(unix_time: number) {
    let time = new Date(unix_time * 1000)
    let day = time.getDay()
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return dayNames[day]
  }

 
