"use client";
import { Reveal } from "./ui/Reveal";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";

export default function SplitStatement() {
  const { isDark } = useTheme();
  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="space-y-4">
            <div className="text-2xl md:text-4xl font-medium">Elevate your everyday</div>
            <span className="h-10 inline-flex items-center opacity-80">—</span>
            <div className="text-3xl md:text-5xl leading-tight">
              <div>Comfort</div>
              <div className={isDark ? "text-white/70" : "text-black/70"}>on your own terms</div>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          <Reveal y={24}>
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <SafeImage src="https://images.unsplash.com/photo-1704196294300-9ac91efb899f?q=80&w=735&auto=format&fit=crop" alt="Designer chair" className="object-cover" fill sizes="(min-width: 768px) 50vw, 50vw" />
            </div>
          </Reveal>
          <Reveal y={24} delay={120}>
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <SafeImage src="https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=600&auto=format&fit=crop" alt="Modern sofa" className="object-cover" fill sizes="(min-width: 768px) 50vw, 50vw" />
            </div>
          </Reveal>
          <Reveal y={24} delay={140}>
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <SafeImage src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop" alt="Wood dining table" className="object-cover" fill sizes="(min-width: 768px) 50vw, 50vw" />
            </div>
          </Reveal>
          <Reveal y={24} delay={260}>
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <SafeImage src="https://images.unsplash.com/photo-1628752694931-cbf5c8772725?q=80&w=1374&auto=format&fit=crop" alt="Premium bed" className="object-cover" fill sizes="(min-width: 768px) 50vw, 50vw" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
