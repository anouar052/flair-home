import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initScrollSmoother = () => {
  if (typeof window === "undefined") return; // SSR guard

  // If already initialized, skip
  if (ScrollSmoother.get()) return;

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2, // seconds it takes to "catch up"
    effects: true // enables data-speed and data-lag
  });
};
