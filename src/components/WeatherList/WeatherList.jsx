import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard/WeatherCard";
import './WeatherList.css'

const WeatherList = () => {

  const [weather, setWeather] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const getWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target.city.value}&appid=${import.meta.env.VITE_API_KEY}`)
      const data = getWeather.data

      const finalData = data.list.map(element => {

        const date = new Date(element.dt * 1000);
        const weatherData = {
          "city" : data.city.name,
          "temperature": `${(element.main.temp - 273.15).toFixed(2)} ºC`,
          "weather": element.weather[0].main,
          "clouds": `${element.clouds.all} %`,
          "date": date.toDateString(),
          "wind_speed": `${element.wind.speed} m/s`,
          "time": `${date.getHours()}:${date.getMinutes()}0`
        }

        return weatherData;
      });

      setWeather(finalData)

    } catch (error) {
      setWeather([{"error": error}])
    }
  }

  return <section className="weather-container">
    <form className="weather-form" action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="City" name="city" id="city"/>
      <button type="submit">Search</button>
    </form>

    {weather.length<1?<p></p>:weather[0].error?<article className="weather-data">
      <h2>NOT FOUND</h2>
    </article>:
    weather.map((weatherInfo, i) => <WeatherCard key={i} time={weatherInfo.time} temperature={weatherInfo.temperature} weather={weatherInfo.weather} clouds={weatherInfo.clouds} date={weatherInfo.date} wind_speed={weatherInfo.wind_speed} city={weatherInfo.city} />)}

  </section>;
};

export default WeatherList;
