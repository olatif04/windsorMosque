"use client"

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getNextPrayer } from '@/services/PrayerTimeService';  // Import the function

export default function SlidingBanner({ slides, today }: { slides: any[], today: any }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const updateInterval = () => {
            const { today: isToday, prayerIndex } = getNextPrayer(today);

            if (!isToday) {
                return;  // If the next prayer time is not today, we don't need to show a countdown.
            }

            const prayerTimes = [
                today.fajr.congregation_start,
                today.zuhr.congregation_start,
                today.asr.congregation_start,
                today.maghrib.congregation_start,
                today.isha.congregation_start,
            ];

            const nextPrayerTime = moment(prayerTimes[prayerIndex], "HH:mm");
            const currentTime = moment();
            const secondsToIqama = nextPrayerTime.diff(currentTime, 'seconds');

            if (secondsToIqama <= 7200) {
                setCountdown(`Iqama in ${secondsToIqama} seconds`);
            } else {
                setCountdown('');
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);  // Cycle through slides normally
            }
        };

        const interval = setInterval(updateInterval, 1000);  // Update every second for real-time countdown
        updateInterval();  // Initial update on mount

        return () => clearInterval(interval);
    }, [today]);

    return (
        <div>
            {countdown ? 
                <div>{countdown}</div> : 
                <div>{slides[currentSlide]}</div>
            }
        </div>
    );
}
