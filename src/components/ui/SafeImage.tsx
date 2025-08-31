"use client";

import React from "react";
import Image from "next/image";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  quality?: number;
};

const DEFAULT_FALLBACK =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&auto=format&fit=crop&w=1200&h=1200";

export function SafeImage({
  src,
  alt,
  className,
  style,
  fallbackSrc,
  sizes = "100vw",
  priority = false,
  fill,
  width,
  height,
  quality = 90,
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = React.useState(src);
  React.useEffect(() => {
    setCurrentSrc(src);
  }, [src]);
  const chosenFallback = fallbackSrc || DEFAULT_FALLBACK;

  const commonProps = {
    alt,
    className,
    style,
    sizes,
    priority,
    onError: () => {
      if (currentSrc !== chosenFallback) {
        setCurrentSrc(chosenFallback);
      }
    },
  } as const;

  if (fill) {
    return (
      <Image src={currentSrc} quality={quality} fill {...commonProps} />
    );
  }

  return (
    <Image src={currentSrc} quality={quality} width={width ?? 1200} height={height ?? 800} {...commonProps} />
  );
}


