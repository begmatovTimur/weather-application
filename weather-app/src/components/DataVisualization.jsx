import React, { useState, useEffect } from "react";

export default function DataVisualization() {
  const temperatures = [18, 22, 19, 24, 26, 23, 20]; // Example data (7 days)
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const pointsData = temperatures.map((temp, index) => {
      const x = index * 60;
      const y = 100 - temp * 2; // flip Y since SVG (0,0) is top-left
      return `${x},${y}`;
    });
    setPoints(pointsData);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Weekly Temperature</h2>
      <svg width={100} height={100}>
        <polyline fill="none" stroke="blue" strokeWidth="2" points="0, 50, 60, 32, 40, 50, 60, 80" />
      </svg>
    </div>
  );
}
