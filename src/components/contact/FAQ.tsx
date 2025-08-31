"use client";

import React, { useState } from "react";
import { useTheme } from "../ui/theme";
import { Button } from "../ui/Button";

const FAQ_ITEMS = [
  {
    question: "What's your design consultation process?",
    answer: "We start with a complimentary 60-minute consultation to understand your space, lifestyle, and design preferences. Our expert designers then create a personalized proposal with 3D renderings and detailed timelines."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Delivery times vary by location: EU (2-4 weeks), North America (4-6 weeks), Rest of World (6-8 weeks). All items are carefully packaged and fully insured."
  },
  {
    question: "What warranty do you provide?",
    answer: "All furniture comes with our comprehensive 10-year structural warranty. Upholstery and finishes are covered for 5 years. We also offer extended protection plans for complete peace of mind."
  },
  {
    question: "Can I customize existing designs?",
    answer: "Absolutely! Over 90% of our pieces can be customized. Choose from premium fabrics, wood finishes, metal accents, and dimensional modifications to perfectly fit your space and style."
  }
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <div className="section-header lg:sticky lg:top-32">
            <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Common questions</div>
            <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
            <div className="text-3xl md:text-5xl leading-tight">
              <div className="header-line-2">Everything you</div>
              <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>need to know</div>
            </div>
            <p className={`mt-6 text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Find answers to the most frequently asked questions about our design process, services, and policies.
            </p>
            
            <div className="mt-8">
              <p className={`mb-4 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Still have questions? We're here to help.
              </p>
              <Button
                href="#contact-form"
                variant="ghost"
                className="px-0 py-1"
              >
                Get in Touch →
              </Button>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item rounded-xl border transition-all duration-300 ${isDark ? 'border-white/10 hover:border-white/20' : 'border-black/10 hover:border-black/20'}`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 focus:outline-hidden"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium pr-4">{item.question}</h3>
                    <div className={`transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

