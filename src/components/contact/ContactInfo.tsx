"use client";

import React from "react";
import { useTheme } from "../ui/theme";
import { Button } from "../ui/Button";

const CONTACT_INFO = [
  {
    title: "Visit Our Showroom",
    content: "Experience our furniture in person",
    details: ["123 Design District", "Copenhagen, Denmark 2100"],
    icon: "📍",
    action: "Get Directions"
  },
  {
    title: "Let's Talk",
    content: "Ready to transform your space?",
    details: ["+45 33 12 34 56", "hello@flairhome.com"],
    icon: "💬",
    action: "Call Now"
  },
  {
    title: "Business Hours",
    content: "We're here when you need us",
    details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"],
    icon: "🕒",
    action: "Schedule Visit"
  }
];

export default function ContactInfo() {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <div className="section-header">
            <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Get in touch</div>
            <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
            <div className="text-3xl md:text-5xl leading-tight">
              <div className="header-line-2">Multiple ways to</div>
              <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>connect with us</div>
            </div>
            <p className={`mt-6 text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Ready to transform your space? We offer multiple ways to connect and start your design journey with our expert team.
            </p>
          </div>

          {/* Right Column - Contact Cards */}
          <div className="space-y-6">
            {CONTACT_INFO.map((info, index) => (
              <div key={index} className={`contact-card p-6 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'} flex items-start space-x-4`}>
                <div className="text-2xl flex-shrink-0 mt-1">{info.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-light mb-1">{info.title}</h3>
                  <p className={`text-sm mb-3 ${isDark ? 'text-white/60' : 'text-black/60'}`}>{info.content}</p>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className={`text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>{detail}</p>
                    ))}
                  </div>
                  <Button
                    as="button"
                    variant="ghost"
                    className="text-sm px-0 py-1"
                  >
                    {info.action} →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

