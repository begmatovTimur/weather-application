import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../services/weatherService";


export default function ForecastList() {
  const [data, setData] = useState([]);
  const [forecast5Days, setForecast5Days] = useState([]);

  function getFiveDayForecast(list) {
    console.log(list);
    const dailyMap = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Extract date only: "2025-06-07"

      // Pick only one forecast per day (usually 12:00 is ideal)
      if (!dailyMap[date] && item.dt_txt.includes("12:00:00")) {
        dailyMap[date] = item;
      }
    });



    // Get the values as an array
    const forecast = Object.values(dailyMap).slice(0, 5); // Limit to 5 days
    return forecast;
  }

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

      const forecast5Daysdata = getFiveDayForecast(response.list);

      setForecast5Days(forecast5Daysdata)

      setData(response);
    };
console.log("last");
    fetchWeather();
  }, []);

  return (
    <div className="w-full flex flex-wrap gap-4 justify-between">
      {forecast5Days.map((day, index) => {
        const date = new Date(day.dt_txt);
        const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
        console.log(day);
        const minTemp = Math.round(day.main.temp_min);
        const maxTemp = Math.round(day.main.temp_max);
        const description = day.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

        return (
          <div
            key={index}
            className="flex-1 min-w-[150px] bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold">{weekday}</h3>
            <p>
              {maxTemp}°C / {minTemp}°C
            </p>
            <img src={icon} alt={description} className="w-12 h-12" />
            <p className="capitalize">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
