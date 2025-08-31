"use client";

import React from "react";
import { useTheme } from "../ui/theme";
import { SafeImage } from "../ui/SafeImage";
import { Button } from "../ui/Button";

const OFFICES = [
  {
    city: "Copenhagen",
    address: "123 Design District, 2100 Copenhagen",
    phone: "+45 33 12 34 56",
    image: "https://images.unsplash.com/photo-1696337735833-cde693d1d511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxDb3BlbmhhZ2VuJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHwwfHx8MTc1NTc5NDY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    isHeadquarters: true
  },
  {
    city: "Stockholm",
    address: "456 Gamla Stan, 111 29 Stockholm",
    phone: "+46 8 123 456",
    image: "https://images.unsplash.com/photo-1713990897640-bbe9ba54eed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxTdG9ja2hvbG0lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwwfDB8fHwxNzU1Nzk0NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    isHeadquarters: false
  },
  {
    city: "Oslo",
    address: "789 Aker Brygge, 0250 Oslo",
    phone: "+47 22 12 34 56",
    image: "https://images.unsplash.com/photo-1661708885073-e27f371468e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxPc2xvJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHwwfHx8MTc1NTc5NDY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    isHeadquarters: false
  }
];

export default function OurOffices() {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="section-header mb-16 md:mb-24">
          <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Visit us</div>
          <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
          <div className="text-3xl md:text-5xl leading-tight">
            <div className="header-line-2">Our showrooms across</div>
            <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>Scandinavia</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFICES.map((office, index) => (
            <div key={index} className="office-card group">
              <div className="office-image relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                <SafeImage
                  src={office.image}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
                {office.isHeadquarters && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                      Headquarters
                    </span>
                  </div>
                )}
              </div>
              
              <div className="office-content">
                <h3 className="text-xl md:text-2xl font-light mb-3">{office.city}</h3>
                <div className="space-y-2 mb-4">
                  <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    {office.address}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    {office.phone}
                  </p>
                </div>
                <Button
                  as="button"
                  variant="ghost"
                  className="text-sm px-0 py-1"
                >
                  Book Appointment →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

