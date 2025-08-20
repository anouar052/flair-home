"use client";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";

export default function ChooseSection() {
  const { isDark } = useTheme();
  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-3">
          <Reveal>
            <div className="text-2xl md:text-3xl">Flair Home</div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center gap-3">
              <div className="text-4xl md:text-6xl font-medium">Choose</div>
              <span className="h-6 md:h-8 inline-flex items-center opacity-80">—</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className={`${isDark ? "text-white/80" : "text-black/80"} text-4xl md:text-6xl`}>Comfort</div>
          </Reveal>
          <Reveal delay={200}>
            <p className={`${isDark ? "text-white/70" : "text-black/70"} max-w-lg`}>
              From living rooms to offices, our pieces are crafted to elevate your daily rituals with timeless design and durable materials.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <Button href="/catalog" variant="white">Shop All Furniture</Button>
          </Reveal>
        </div>
        <Reveal y={20} delay={160}>
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
            <SafeImage src="https://i.pinimg.com/1200x/63/40/f8/6340f8c0d104e45bfb864698e6165f3d.jpg" alt="Clean, well-decorated modern office" className="object-cover object-bottom" fill sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
