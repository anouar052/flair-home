"use client";
import { useTheme } from "../components/ui/theme";
import { Reveal } from "../components/ui/Reveal";
import { SafeImage } from "./ui/SafeImage";

export default function Ethos() {
  const { isDark } = useTheme();
  const items = [
    { n: "1.", title: "High quality and craftsmanship", body: "We use only the finest materials and work with skilled artisans to create furniture that stands the test of time. Every piece is carefully crafted with attention to detail and durability. From comfort and durability. From solid wood frames to premium fabrics, we prioritize quality in every aspect of our furniture.", img: "https://plus.unsplash.com/premium_photo-1677702162742-903f6dfca375?q=80&w=687&auto=format&fit=crop" },
    { n: "2.", title: "Community & Storytelling", body: "We believe that furniture tells a story and creates connections. Our brand is more than just clothing, it's a medium for showcasing individuality. Each piece tells a story that connects with our community, fostering relationships and shared experiences.", img: "https://i.pinimg.com/1200x/c3/c0/7d/c3c07dbc355fed41d69156671334c3d5.jpg" },
    { n: "3.", title: "Sustainable and ethical practices", body: "We are committed to responsible manufacturing and ethical business practices. We prioritize sustainability by using eco-friendly materials and responsible production methods, adhering to fair labor practices and supporting local communities through our supply chain.", img: "https://i.pinimg.com/1200x/ba/ec/a3/baeca3da80a6b14b5d0b92b1ae36fb1b.jpg" },
  ];
  return (
    <section className={`py-16 md:py-24 ${isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-light mb-12">Our Ethos</h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="space-y-4">
                <div className={`text-4xl md:text-5xl font-light ${isDark ? "text-gray-500" : "text-gray-400"}`}>{it.n}</div>
                <SafeImage src={it.img} alt={it.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="space-y-3">
                  <h4 className="text-xl md:text-2xl font-medium">{it.title}</h4>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
