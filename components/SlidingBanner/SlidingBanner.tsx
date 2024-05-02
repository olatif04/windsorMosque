"use client"

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getNextPrayer } from '@/services/PrayerTimeService';

interface SlidingBannerProps {
    slides: React.ReactNode[];
    today: any;
}

export default function SlidingBanner({ slides, today }: SlidingBannerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [countdown, setCountdown] = useState('');
    const [displayCountdown, setDisplayCountdown] = useState(false);

    useEffect(() => {
        const updateInterval = () => {
            const { today: isToday, prayerIndex } = getNextPrayer(today);
            if (!isToday) {
                setDisplayCountdown(false);
                return;
            }

            const nextPrayerTime = moment(today.prayerTimes[prayerIndex], "HH:mm");
            const currentTime = moment();
            const secondsToIqama = nextPrayerTime.diff(currentTime, 'seconds');

            if (secondsToIqama <= 7200) {
                setCountdown(`Iqama in ${secondsToIqama} seconds`);
                setDisplayCountdown(true);
            } else {
                setDisplayCountdown(false);
                setCurrentSlide(prev => (prev + 1) % slides.length);
            }
        };

        const interval = setInterval(updateInterval, 1000);
        return () => clearInterval(interval);
    }, [today, slides.length]);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {displayCountdown ? 
                <div style={{ textAlign: 'center', padding: '20px' }}>{countdown}</div> :
                <div style={{ width: '100%', height: '100%' }}>{slides[currentSlide]}</div>
            }
        </div>
    );
}
