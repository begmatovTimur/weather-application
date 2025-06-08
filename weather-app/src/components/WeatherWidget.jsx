import React from "react";
import CitySelector from "./CitySelector";
import SettingsPanel from "./SettingsPanel";
import { SettingsIcon } from "../icons/Icons";

import { NavLink, Outlet } from "react-router-dom";


export default function WeatherWidget() {
  return (
    <div className="w-full max-w-[800px] m-2 p-2 bg-fuchsia-500 rounded-lg">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
        <CitySelector />
      </div>

      <div className="w-full flex flex-col sm:flex-row bg-[#f8f9fa] dark:bg-[#212529] text-[#212529] dark:text-[#f8f9fa] rounded-xl shadow-lg overflow-hidden transition-colors duration-300 mt-4">
        <div className="w-full sm:w-1/3 bg-white dark:bg-[#2b3035] border-b sm:border-b-0 sm:border-r border-gray-300 dark:border-gray-600 flex sm:flex-col items-center sm:items-start p-2 sm:p-4 gap-2 sm:gap-4">
          <NavLink
            to="/current-weather"
            className={({ isActive }) =>
              `w-full text-center sm:text-left px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-[#0d6efd] text-white"
                  : "hover:bg-gray-200 dark:hover:bg-[#343a40]"
              }`
            }
          >
            Current Weather
          </NavLink>
          <NavLink
            to="forecast"
            className={({ isActive }) =>
              `w-full text-center sm:text-left px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-[#0d6efd] text-white"
                  : "hover:bg-gray-200 dark:hover:bg-[#343a40]"
              }`
            }
          >
            Forecast
          </NavLink>
          <NavLink
            to="statistics"
            className={({ isActive }) =>
              `w-full text-center sm:text-left px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-[#0d6efd] text-white"
                  : "hover:bg-gray-200 dark:hover:bg-[#343a40]"
              }`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `w-full text-center sm:text-left px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-[#0d6efd] text-white"
                  : "hover:bg-gray-200 dark:hover:bg-[#343a40]"
              }`
            }
          >
            Settings
          </NavLink>
        </div>

        <div className="w-full sm:w-2/3 p-4 sm:p-6 transition-opacity duration-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
