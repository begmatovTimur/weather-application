import React, { useState } from "react";

export default function SettingsPanel() {
  const [isActive, setIsActive] = useState(true);
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "celsius");

  const handleChange = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
    localStorage.setItem("unit", selectedUnit);
  };


  return (
    <div>
      <div className="flex justify-around">
        <label className="flex items-center gap-2 text-gray-800 dark:text-gray-100 cursor-pointer">
          <input
            type="radio"
            name="unit"
            value="celsius"
            checked={unit === "celsius"}
            onChange={handleChange}
            className="accent-blue-600"
          />
          <span>°C</span>
        </label>

        <label className="flex items-center gap-2 text-gray-800 dark:text-gray-100 cursor-pointer">
          <input
            type="radio"
            name="unit"
            value="fahrenheit"
            checked={unit === "fahrenheit"}
            onChange={handleChange}
            className="accent-blue-600"
          />
          <span>°F</span>
        </label>
      </div>
    </div>
  );
}
