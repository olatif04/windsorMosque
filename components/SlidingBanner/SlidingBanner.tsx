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
      {slides[currentSlide]}
      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: 'small' }}>
        Developed by Omer Latif
      </div>
    </div>
  );
}
