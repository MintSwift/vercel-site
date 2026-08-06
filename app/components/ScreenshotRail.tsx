"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ScreenshotRailProps = {
  name: string;
  slides: string[];
};

const ROLL_DELAY = 2600;

export default function ScreenshotRail({ name, slides }: ScreenshotRailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROLL_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, slides.length]);

  const visibleSlides = [0, 1]
    .map((offset) => slides[(activeIndex + offset) % slides.length])
    .filter(Boolean);

  return (
    <div
      className="screenshot-rail"
      aria-label={`${name} 앱 스크린샷`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      {visibleSlides.map((src, index) => (
        <div className="screenshot-frame" key={`${src}-${index}`}>
          <Image
            className="screenshot-frame-image"
            src={src}
            alt=""
            fill
            sizes="(max-width: 800px) 72vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
}
