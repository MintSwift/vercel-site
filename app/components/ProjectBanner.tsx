"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";

const banners = [
  {
    name: "Overtake",
    href: "/overtake",
    light: "/vercel-header-overtake-black-layout-v3.png",
    dark: "/vercel-header-overtake-black-layout-v3.png",
    label: "Overtake 프로젝트 배너 보기",
  },
  {
    name: "MintWallet",
    href: "/mintwallet",
    light: "/vercel-header-mintwallet-white-layout-v2.png",
    dark: "/vercel-header-mintwallet-black-layout-v2.png",
    label: "MintWallet 프로젝트 배너 보기",
  },
  {
    name: "민트주간",
    href: "/weeklyswift",
    light: "/weeklyswift/vercel-header-weeklyswift-white-layout-v2.png",
    dark: "/weeklyswift/vercel-header-weeklyswift-white-layout-v2.png",
    label: "민트주간 프로젝트 배너 보기",
  },
];

type BannerName = "Overtake" | "MintWallet" | "민트주간";
type ProjectBannerSlide = (typeof banners)[number];
type ProjectBannerProps = { projectName?: BannerName; slides?: ProjectBannerSlide[] };

const AUTOPLAY_DELAY = 5500;

export default function ProjectBanner({ projectName, slides }: ProjectBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const displayedBanners = slides ?? (projectName === "Overtake" ? [banners[0]] : projectName === "MintWallet" ? [banners[1]] : projectName === "민트주간" ? [banners[2]] : banners);
  const bannerCount = displayedBanners.length;
  const hasCarousel = bannerCount > 1;

  useEffect(() => {
    if (isPaused || !hasCarousel) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % bannerCount);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [bannerCount, hasCarousel, isPaused]);

  const selectBanner = (index: number) => {
    setActiveIndex(index);
  };

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + bannerCount) % bannerCount);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    if (!hasCarousel) return;
    touchStartX.current = event.touches[0]?.clientX ?? null;
    didSwipe.current = false;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? startX;
    touchStartX.current = null;
    setIsPaused(false);

    if (startX === null || endX === null) return;
    const distance = endX - startX;
    if (Math.abs(distance) < 48) return;

    didSwipe.current = true;
    move(distance < 0 ? 1 : -1);
  };

  const preventSwipeNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!didSwipe.current) return;
    event.preventDefault();
    didSwipe.current = false;
  };

  return (
    <section
      className="project-banner page-shell"
      aria-label="주요 프로젝트"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="banner-viewport">
        {displayedBanners.map((banner, index) => (
          <a
            className={`banner-slide ${index === activeIndex ? "is-active" : ""}`}
            href={banner.href}
            key={banner.name}
            onClick={preventSwipeNavigation}
            tabIndex={index === activeIndex ? 0 : -1}
            aria-label={banner.label}
            aria-hidden={index !== activeIndex}
          >
            <Image
              className="banner-image banner-image-light"
              src={banner.light}
              alt=""
              fill
              sizes="(max-width: 800px) 100vw, 1168px"
              priority={index === 0}
            />
            <Image
              className="banner-image banner-image-dark"
              src={banner.dark}
              alt=""
              fill
              sizes="(max-width: 800px) 100vw, 1168px"
              priority={index === 0}
            />
          </a>
        ))}

        {hasCarousel && <div className="banner-controls">
          <button type="button" onClick={() => move(-1)} aria-label="이전 프로젝트 배너">←</button>
          <span className="banner-count" aria-live="polite">0{activeIndex + 1} / 0{bannerCount}</span>
          <button type="button" onClick={() => move(1)} aria-label="다음 프로젝트 배너">→</button>
        </div>}
      </div>

      <div className="banner-footer">
        <span>{displayedBanners[activeIndex].name}</span>
        {hasCarousel && <div className="banner-dots" aria-label="프로젝트 배너 선택">
          {displayedBanners.map((banner, index) => (
            <button
              type="button"
              key={banner.name}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => selectBanner(index)}
              aria-label={`${banner.name} 배너로 이동`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>}
        <span className="banner-caption">Selected work · 2024—2026</span>
      </div>
    </section>
  );
}
