"use client";
import { useTheme } from "@/components/ui/theme";
import { Reveal } from "@/components/ui/Reveal";

export default function TrustBar() {
  const { isDark } = useTheme();
  const borderColor = isDark ? "border-white/15" : "border-black/15";
  const subtleText = isDark ? "text-white/70" : "text-black/70";

  const items = [
    {
      title: "International Shipping",
      body:
        "We offer international shipping to over 50 countries, ensuring our products reach customers around the globe.",
    },
    {
      title: "Easy Returns",
      body:
        "To make a return send an email to: customer@leflairstudios.com with your order number and reason for return. We'll respond with the next steps.",
    },
    {
      title: "Easy Payment",
      body:
        "We utilize Stripe for a secure, comprehensive payment experience with options like credit card and Apple Pay.",
    },
  ];

  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} xl:pb-14 px-8`}>
      <div className={`mx-auto  px-4 md:px-6 py-10 md:py-14 border-y-2 ${borderColor} border-dotted `}>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${isDark ? "divide-white/15" : "divide-black/15"} md:divide-x-2 md:divide-dotted`}> 
          {items.map((it, i) => (
            <div key={it.title} className={`py-6 md:py-0 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === items.length - 1 ? "md:pr-0" : ""}`}>
              <Reveal delay={i * 60}>
                <h4 className="text-xl md:text-2xl font-medium mb-3">{it.title}</h4>
                <p className={`${subtleText} text-sm leading-relaxed`}>{it.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
