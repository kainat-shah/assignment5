import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p> Enter any city name to see their weather details.</p>;

  const { name, main, weather } = weatherData;

  return (
    <div className="display">
      <h2>Weather in {name}</h2>
      <p>Temperature: {Math.round(main.temp)}°C</p>
      <p>Condition: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
