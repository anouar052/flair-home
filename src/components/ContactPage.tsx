"use client";

import React, { useRef } from "react";
import { useTheme } from "./ui/theme";
import Footer from "./Footer";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  OurOffices,
  FAQ,
  ContactMap,
  useContactAnimations
} from "./contact";

export default function ContactPage() {
  const { isDark } = useTheme();
  const pageRef = useRef<HTMLDivElement>(null);

  // Use custom hook for animations
  useContactAnimations();

  return (
    <div ref={pageRef} className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OurOffices />
      <FAQ />
      <ContactMap />
      <Footer />
    </div>
  );
}
