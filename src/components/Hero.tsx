"use client";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { SafeImage } from "./ui/SafeImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <SafeImage
        src="https://images.unsplash.com/photo-1699868744188-14dc5a6e0f1c?q=80&w=2400&auto=format&fit=crop"
        alt="Well-decorated living room interior with various furniture"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 h-screen flex flex-col justify-end pb-16">
        <Reveal y={18}>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl">
            Design your space <br />— your way
          </h1>
        </Reveal>
        <Reveal y={18} delay={120}>
          <Button href="/catalog" variant="white" className="mt-6 w-fit">
            Shop furniture
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
