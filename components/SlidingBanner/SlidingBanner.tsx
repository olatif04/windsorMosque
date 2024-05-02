"use client"

import { useEffect, useState } from "react"
import moment from "moment"
import { getNextPrayer } from "@/services/PrayerTimeService"

export default function SlidingBanner({ slides, today }: { slides: any[], today: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeToNextIqama, setTimeToNextIqama] = useState<number | null>(null);

  useEffect(() => {
    const checkIqamaTime = () => {
      const nextPrayer = getNextPrayer(today);
      const nextPrayerTime = moment(today.prayerTimes[nextPrayer.prayerIndex], "HH:mm");
      const currentTime = moment();
      const secondsToIqama = nextPrayerTime.diff(currentTime, 'seconds');

      if (secondsToIqama <= 120) {
        setTimeToNextIqama(secondsToIqama);
      } else {
        setTimeToNextIqama(null);
      }
    };

    const interval = setInterval(() => {
      checkIqamaTime();
      if (timeToNextIqama === null) {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }
    }, 1000);

    checkIqamaTime(); // Also run immediately to set initial state

    return () => clearInterval(interval);
  }, [today, currentSlide, slides.length, timeToNextIqama]);

  if (timeToNextIqama !== null) {
    return <div>Countdown to next Iqama: {timeToNextIqama} seconds</div>;
  }

  return <>{slides[currentSlide]}</>;
}
