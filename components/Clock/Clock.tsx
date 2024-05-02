"use client"

import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Clock({ darkMode = false }: { darkMode?: boolean }) {
  const format = "h:mm:ss A";  // Updated to show seconds
  const [time, setTime] = useState(moment().format(format));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format(format));
    }, 1000);  // Updates every second

    return () => clearInterval(interval);
  }, [format]);

  return (
    <div className={`p-7 text-center md:text-left md:w-fit ${!darkMode ? "bg-white" : ""}`} style={{ minWidth: '350px' }}>
      <time className={`text-8xl md:text-8xl font-bold ${!darkMode ? "text-mosqueGreen" : "text-gray-500"}`}>
        {time}
      </time>
    </div>
  );
}
