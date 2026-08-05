"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const banners = [
  {
    name: "Overtake",
    href: "/overtake",
    light: "/vercel-header-overtake-white-layout-v2.png",
    dark: "/vercel-header-overtake-black-layout-v2.png",
    label: "Overtake 프로젝트 배너 보기",
  },
  {
    name: "MintWallet",
    href: "/mintwallet",
    light: "/vercel-header-mintwallet-white-layout-v2.png",
    dark: "/vercel-header-mintwallet-black-layout-v2.png",
    label: "MintWallet 프로젝트 배너 보기",
  },
];

type BannerName = "Overtake" | "MintWallet";
type ProjectBannerSlide = (typeof banners)[number];
type ProjectBannerProps = { projectName?: BannerName; slides?: ProjectBannerSlide[] };

const AUTOPLAY_DELAY = 5500;

export default function ProjectBanner({ projectName, slides }: ProjectBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const displayedBanners = slides ?? (projectName === "Overtake" ? [banners[0]] : projectName === "MintWallet" ? [banners[1]] : banners);
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

  return (
    <section
      className="project-banner page-shell"
      aria-label="주요 프로젝트"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
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
