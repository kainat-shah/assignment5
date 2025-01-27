import React, { useState } from "react";

const WeatherSearch = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("City name cannot be empty.");
      return;
    }
    fetchWeather(city);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <br />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WeatherSearch;
