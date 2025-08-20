"use client";
import React, { useEffect } from "react";
import { useTheme } from "./ui/theme";
import { clsx } from "./ui/clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ValueItem } from "@/types/about";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutValuesProps {
  values: ValueItem[];
}

export default function AboutValues({ values }: AboutValuesProps) {
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".section-header").forEach((header: any) => {
        const line1 = header.querySelector(".header-line-1");
        const dash = header.querySelector(".header-dash");
        const line2 = header.querySelector(".header-line-2");
        const line3 = header.querySelector(".header-line-3");

        gsap.set([line1, dash, line2, line3], { y: 40, opacity: 0 });

        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom 25%",
          }
        });

        headerTl
          .to(line1, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
          .to(dash, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.7")
          .to(line2, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
          .to(line3, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");
      });

      gsap.utils.toArray(".value-card").forEach((card: any, index) => {
        const number = card.querySelector(".text-6xl");
        const content = card.querySelector(".space-y-6");
        
        gsap.set([number, content], { y: 50, opacity: 0 });
        
        const valueTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
          }
        });

        valueTl
          .to(number, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
          .to(content, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="section-header mb-24">
          <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">What drives us forward</div>
          <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
          <div className="text-3xl md:text-5xl leading-tight">
            <div className="header-line-2">Values that</div>
            <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>shape everything</div>
          </div>
        </div>

        <div className="space-y-20 md:space-y-32">
          {values.map((value, index) => (
            <div key={value.title} className={`value-card ${index % 2 === 0 ? 'md:grid md:grid-cols-[auto,1fr] md:gap-20' : 'md:grid md:grid-cols-[1fr,auto] md:gap-20'} space-y-8 md:space-y-0 items-start`}>
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={clsx(
                  "text-6xl md:text-8xl font-light leading-none",
                  isDark ? "text-white/10" : "text-black/10"
                )}>
                  {value.number}
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-light">{value.title}</h3>
                  <div className={`w-16 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} ${index % 2 === 1 ? 'md:ml-auto' : ''}`} />
                </div>
                <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-white/70' : 'text-black/70'} ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

