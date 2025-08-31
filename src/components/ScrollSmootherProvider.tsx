"use client";

import { useEffect } from "react";
import { initScrollSmoother } from "@/lib/scrollSmoother";

export default function ScrollSmootherProvider() {
  useEffect(() => {
    initScrollSmoother();
  }, []);

  return null;
}
