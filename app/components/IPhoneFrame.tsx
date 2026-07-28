"use client";

import Image from "next/image";
import { createElement, useEffect, useState } from "react";

type IPhoneFrameProps = {
  alt: string;
  className?: string;
  mode?: "light" | "dark";
  priority?: boolean;
  sizes: string;
  src: string;
};

export default function IPhoneFrame({
  alt,
  className = "",
  mode = "light",
  priority = false,
  sizes,
  src,
}: IPhoneFrameProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    import("@sneas/telephone/iphone-16-max.js").then(() => {
      if (isMounted) {
        setIsReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className={`iphone-frame-shell ${className}`.trim()}
      data-ready={isReady}
    >
      {createElement(
        "iphone-16-max",
        {
          "aria-label": alt,
          mode,
          role: "img",
          style: { display: "block", width: "100%" },
          suppressHydrationWarning: true,
        },
        <Image
          alt=""
          aria-hidden="true"
          className="iphone-device-screen"
          height={2622}
          priority={priority}
          sizes={sizes}
          src={src}
          width={1206}
        />,
      )}
    </div>
  );
}
