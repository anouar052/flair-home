"use client";

import React from "react";
import { useTheme } from "../ui/theme";
import { SafeImage } from "../ui/SafeImage";
import { Button } from "../ui/Button";

export default function ContactHero() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="parallax-bg absolute inset-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1706971759925-2ed9b958b994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZXNpZ24lMjBzdHVkaW8lMjBpbnRlcmlvciUyMGNvbnRhY3QlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MHwwfHx8MTc1NTc5NjYxMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury design studio interior"
          fill
          className="object-cover opacity-100"
          sizes="100vw"
          priority
        />
      </div>
      <div className={`absolute inset-0 bg-black/45`} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 h-screen flex flex-col justify-end pb-16">
        <div className="hero-text space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl text-white overflow-hidden">
            <span className="hero-line-1 inline-block">Let's create something</span> <br />
            <span className="hero-line-2 inline-block">— extraordinary together</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl">
            Ready to transform your space? Our design experts are here to bring your vision to life with personalized solutions and exceptional craftsmanship.
          </p>
          <div className="hero-cta">
            <Button href="#contact-form" variant="white" className="mt-6 w-fit">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

