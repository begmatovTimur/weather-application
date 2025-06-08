import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../services/weatherService";

export default function WeatherDisplay() {
  const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await getCurrentWeather(
        localStorage.getItem("currentCity")
      );

      // Get current time
      const now = new Date();

      // Find the closest forecast
      const closest = response.list.reduce((prev, curr) => {
        const prevDate = new Date(prev.dt_txt);
        const currDate = new Date(curr.dt_txt);
        return Math.abs(currDate - now) < Math.abs(prevDate - now)
          ? curr
          : prev;
      });
      console.log(closest.weather[0].icon);

      // Get weather info from the closest forecast
      //  const iconCode = ;
      const newWeatherData = {
        city: response.city.name,
        description: closest.weather[0].description,
        currentWeatherCondition: `https://openweathermap.org/img/wn/${closest.weather[0].icon}@2x.png`,
        currentTemp: Math.round(closest.main.temp),
      };
      setWeatherData(newWeatherData);

      setData(response);
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white dark:bg-[#2b3035] rounded-lg shadow-md">
      {/* Temperature & Location */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-5xl font-bold text-[#0d6efd]">
          {weatherData.currentTemp}°C
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          {weatherData.city}
        </h2>
      </div>

      {/* Placeholder for Icon or Description */}
      <div className="text-lg text-gray-600 dark:text-gray-300">
        <img src={weatherData.currentWeatherCondition} alt="weather icon" />
        <h1>{weatherData.description}</h1>
      </div>
    </div>
  );
}
