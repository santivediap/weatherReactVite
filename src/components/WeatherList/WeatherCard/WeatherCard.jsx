import React from "react";
import './WeatherCard.css'

const WeatherCard = ({ temperature, weather, clouds, date, wind_speed, city, time, id }) => {
  return <article className="weather-data" id={id}>
    <h2>{date}</h2>
    <h2>{time}</h2>
    <h3>{city}</h3>
    <div className="data-container">
      <div className="value-container">
        <img src="../src/assets/termometro.png" alt="" />
        <p className="value">{temperature}</p>
      </div>

      <div className="value-container">
        <img src="../src/assets/weather.png" alt="" />
        <p className="value">{weather}</p>
      </div>

      <div className="value-container">
        <img src="../src/assets/nubes.png" alt="" />
        <p className="value">{clouds}</p>
      </div>

      <div className="value-container">
        <img src="../src/assets/viento.png" alt="" />
        <p className="value">{wind_speed}</p>
      </div>

    </div>
  </article>;
};

export default WeatherCard;
