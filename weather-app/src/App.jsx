import WeatherWidget from "./components/WeatherWidget";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastList from "./components/ForecastList";
import DataVisualization from "./components/DataVisualization";
import { Routes, Route } from "react-router-dom";
import SettingsPanel from "./components/SettingsPanel";

function App() {
  return (
    <div className="w-full flex justify-center">
      <Routes>
        <Route path="/" element={<WeatherWidget />}>
          <Route path="/current-weather" element={<WeatherDisplay />} />
          <Route path="/forecast" element={<ForecastList />} />
          <Route path="/statistics" element={<DataVisualization />} />  
          <Route path="/settings" element={<SettingsPanel />} />  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
