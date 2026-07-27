"use client";

import type { MouseEvent } from "react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScoBk-frGumC_ItV0tCOeXzNRfLDNTaEILf90Ey6s8d5MHI1A/viewform";

function detectOS(userAgent: string) {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
  if (/Android/i.test(userAgent)) return "Android";
  if (/Macintosh|Mac OS X/i.test(userAgent)) return "macOS";
  if (/Windows/i.test(userAgent)) return "Windows";
  if (/Linux/i.test(userAgent)) return "Linux";
  return "Unknown";
}

function detectBrowser(userAgent: string) {
  if (/Edg\//i.test(userAgent)) return "Edge";
  if (/Chrome\//i.test(userAgent)) return "Chrome";
  if (/Firefox\//i.test(userAgent)) return "Firefox";
  if (/Safari\//i.test(userAgent) && !/Chrome\//i.test(userAgent)) return "Safari";
  return "Unknown";
}

export default function ContactButton() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const userAgent = navigator.userAgent || "";
    const contactValue = [
      `OS 정보: ${detectOS(userAgent)}`,
      `브라우저 정보: ${detectBrowser(userAgent)}`,
      `User-Agent: ${userAgent}`,
    ].join("\n");
    const formUrl = new URL(FORM_URL);
    formUrl.searchParams.set("usp", "pp_url");
    formUrl.searchParams.set("entry.1643401214", contactValue);
    window.open(formUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return <a className="button button-primary contact-button" href={FORM_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick}>Google Form으로 문의하기 <span aria-hidden="true">↗</span></a>;
}
