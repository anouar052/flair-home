"use client";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { clsx } from "./ui/clsx";
import { useTheme } from "./ui/theme";

export default function FAQ() {
  const { isDark } = useTheme();
  const qs = [
    { q: "Do you offer white-glove delivery?", a: "Yes. For large items like sofas and mattresses, white-glove delivery includes room-of-choice placement and packaging removal in select regions." },
    { q: "How long is the warranty?", a: "Mattresses: 10 years limited. Sofas and seating: 5 years structure, 2 years upholstery. Desks and storage: 5 years." },
    { q: "Is assembly required?", a: "Many pieces ship with simple tool-free or included-tool assembly. Optional assembly is available at checkout in eligible areas." },
    { q: "Do you deliver internationally?", a: "Yes. Shipping times and costs vary by location and freight class. Duties/taxes may apply at import." },
    { q: "What is your return policy?", a: "Unused items in original packaging returnable within 30 days. Mattresses include a 100-night trial. Return shipping may apply for bulky freight." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-16 md:py-24`}>
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <h3 className="text-2xl md:text-3xl mb-6">Frequently Asked Questions</h3>
        </Reveal>
        <div className={`${isDark ? "divide-white/10 border-y border-white/10" : "divide-black/10 border-y border-black/10"} divide-y`}>
          {qs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-4">
                <button className="w-full flex items-center justify-between text-left" onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="text-base">{item.q}</span>
                  <span className={isDark ? "text-white/60" : "text-black/60"}>{isOpen ? "–" : "+"}</span>
                </button>
                <div className={clsx("overflow-hidden transition-all duration-300", isOpen ? "max-h-40 mt-2" : "max-h-0", isDark ? "text-white/70" : "text-black/70") }>
                  <p className="text-sm">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Reveal delay={140}>
          <div className={isDark ? "mt-6 text-white/70 text-sm" : "mt-6 text-black/70 text-sm"}>
            Still need help? Email <a href="mailto:support@flairhome.com" className="underline">support@flairhome.com</a>.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
