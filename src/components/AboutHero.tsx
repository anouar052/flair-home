"use client";
import React from "react";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { Button } from "./ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();
      gsap.set([".hero-line-1", ".hero-line-2"], { y: 60, opacity: 0 });
      gsap.set(".hero-subtitle", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { y: 20, opacity: 0 });

      heroTimeline
        .to([".hero-line-1", ".hero-line-2", ".hero-subtitle", ".hero-cta"], { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.25 })
       

      gsap.utils.toArray(".parallax-bg").forEach((bg: any) => {
        gsap.fromTo(bg,
          { y: -30 },
          {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: bg,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="parallax-bg absolute inset-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1676250747209-eee2d728da64?q=80&auto=format&fit=crop&w=1920&h=1080"
          alt="Woodworking craftsmanship studio"
          fill
          className="object-cover opacity-100"
          sizes="100vw"
          priority
        />
      </div>
      <div className={`absolute inset-0 bg-black/60`} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 h-screen flex flex-col justify-end pb-16">
        <div className="hero-text space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl text-white overflow-hidden">
            <span className="hero-line-1 inline-block">Crafting stories through</span> <br />
            <span className="hero-line-2 inline-block">— thoughtful design</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl">
            From humble beginnings to creating spaces that inspire. Discover the story behind every piece we craft.
          </p>
          <div className="hero-cta">
            <Button href="#story" variant="white" className="mt-6 w-fit">
              Our Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

