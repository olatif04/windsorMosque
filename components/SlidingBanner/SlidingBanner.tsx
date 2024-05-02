import { useEffect, useState } from "react";

interface SlidingBannerProps {
  slides: JSX.Element[];
}

const transitionTime = parseInt(process.env.SLIDE_TRANSITION_TIME ?? "7"); // defaults to 7 seconds

export default function SlidingBanner({ slides }: SlidingBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, transitionTime * 1000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <div className="relative w-full">
      {slides[currentSlide]}
      <div className="absolute bottom-0 w-full text-center text-sm font-light p-1">
        Developed by Omer Latif
      </div>
    </div>
  );
}
