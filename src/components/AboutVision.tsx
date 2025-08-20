"use client";
import React, { useEffect } from "react";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { Button } from "./ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutVision() {
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

      const visionSection = document.querySelector(".vision-image");
      if (visionSection) {
        gsap.set(".vision-description", { y: 30, opacity: 0 });
        gsap.set(".vision-cta", { y: 20, opacity: 0 });
        gsap.set(".vision-image", { clipPath: "inset(100% 0 0 0)" });
        
        const visionTl = gsap.timeline({
          scrollTrigger: {
            trigger: visionSection.parentElement,
            start: "top 70%",
            end: "bottom 30%",
          }
        });

        visionTl
          .to(".vision-description", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.3)
          .to(".vision-cta", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(".vision-image", { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.out" }, "-=0.8");
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-header space-y-6">
            <div className="header-line-1 text-2xl md:text-4xl font-medium">Looking forward</div>
            <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
            <div className="text-3xl md:text-5xl leading-tight">
              <div className="header-line-2">Crafting tomorrow's</div>
              <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>living spaces</div>
            </div>
            <p className={`vision-description text-base md:text-lg leading-relaxed max-w-lg ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              We're not just designing furniture for today. We're building the foundations of tomorrow's homes, 
              where technology and humanity exist in perfect harmony.
            </p>
            <div className="vision-cta">
              <Button 
                href="/catalog"
                variant="white"
                className="mt-6 group"
              >
                Explore Our Vision
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
          
          <div className="vision-image parallax-bg relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <SafeImage
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&auto=format&fit=crop&w=800&h=600"
              alt="Future of furniture design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

