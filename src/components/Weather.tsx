import { useState, useEffect } from 'react';
import WeatherData from '../interface/WeatherData';
import {filterUniqueDates,getIconUrl,getDay,getTime} from '../helper/common';
import CurrentWeather from "./CurrentWeather"
import WeatherCard from "./WeatherCard"
import "./Weather.scss"

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY; 
  const city = 'Jyväskylä, Finland'; 

  useEffect(() => {
    const fetchWeatherData = async () => {
      
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Error loading weather data');
          
        }

        const data = await response.json();
        
        setWeatherData(filterUniqueDates(data) as WeatherData);
      } catch (error) {
        setErrorMessage('Error loading weather data');
      }
    };

    fetchWeatherData();
  }, []);

  if (errorMessage) {
    return <p>Error loading weather data</p>;
  }

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }
  let weatherNow = weatherData.list[0]
  let cityData = weatherData.city
  return (
    <>
      <CurrentWeather
        city={cityData.name}
        country={cityData.country}
        sunrise={getTime(cityData.sunrise)}
        sunset={getTime(cityData.sunset)}
        desc={weatherNow.weather[0].description}
        icon={getIconUrl(weatherNow.weather[0].icon)}
        temp={Math.round(weatherNow.main.temp)}
        feels_like={Math.round(weatherNow.main.feels_like)}
        temp_min={Math.round(weatherNow.main.temp_min)}
        temp_max={Math.round(weatherNow.main.temp_max)}
        wind_speed={weatherNow.wind.speed}
        humidity={weatherNow.main.humidity}
        pressure={weatherNow.main.pressure}
        visibility={weatherNow.visibility}
      />

      <div className="WeatherCardList">
        {weatherData.list.slice(1).map((day) => {
          return (
            <WeatherCard
              icon={getIconUrl(day.weather[0].icon)}
              day={getDay(day.dt)}
              time={getTime(day.dt)}
              desc={day.weather[0].main}
              temp={Math.round(day.main.temp)}
            />
          )
        })}
      </div>
    </>
  );
};

export default WeatherApp;
