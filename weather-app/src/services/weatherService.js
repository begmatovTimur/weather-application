import axios from "axios";

const API_KEY = "*"; // Weather Application API key 
// const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const BASE_URL = "http://localhost:5173/api/mock-api.json";

const CITIES = ["London", "New York", "Tokyo", "Sydney", "Cairo"];

const getUnit = (unit) => {
    if (unit == "metric") {
        return "celsius";
    } else if (unit == "fahrenheit") {
      return "imperial";
    }
}

export async function getCurrentWeather(city) {
    
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: getUnit(localStorage.getItem("unit")),
    },
  });
    console.log(response.data);
  return response.data;
}

