import React, { useState } from "react";
import WeatherSearch from "./weatherapp/weathersearch";
import WeatherDisplay from "./weatherapp/weatherdisplay";
import axios from "axios";
import "./app.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const API_KEY = "7e1dd5a27cf15eb1846d0251391743e1";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setWeatherData(response.data);
        setError("");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the spelling and try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch fetchWeather={fetchWeather} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
