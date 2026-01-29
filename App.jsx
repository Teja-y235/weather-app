import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const Comp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric&appid=b8832542ec4d4a215ad803cd7d1c3667"
      )
      .then(res => setWeather(res.data));
  }, []);

  return (
  <div className="weather-container">
    <div className="weather-card">
      <h2>{weather?.name}</h2>
      <p>{weather?.main?.temp} °C</p>
    </div>
  </div>
);
};

export default Comp;