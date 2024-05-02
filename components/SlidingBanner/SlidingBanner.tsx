"use client"

import { useEffect, useState } from "react";

const transitionTime = parseInt(process.env.SLIDE_TRANSITION_TIME ?? "7"); // defaults to 7 seconds

export default function SlidingBanner({ slides }: { slides: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, transitionTime * 1000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <div>
      <div style={{ width: '100%' }}>
        {slides[currentSlide]}
      </div>
      <div style={{ textAlign: 'center', fontSize: 'small', color: 'white', marginTop: '10px' }}>
        Developed by Omer Latif
      </div>
    </div>
  );
}