"use client";
import React from "react";
import { useInView } from "./hooks";
import { clsx } from "./clsx";

export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-900 ease-out will-change-transform",
        className,
      )}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : y}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
