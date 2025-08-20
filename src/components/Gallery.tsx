"use client";
import React, { useState, useEffect } from "react";
import { Reveal } from "./ui/Reveal";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Button } from "./ui/Button";

export default function Gallery() {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tiles = [
    { tall: true, alt: "Modern living room with white furniture and elegant lighting", src: "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3NTU3MTgxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080", speed: "0.95" },
    { tall: true, alt: "Elegant dining room with modern furniture and table", src: "https://images.unsplash.com/photo-1732532974935-a118a3737e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlJTIwdGFibGUlMjBjaGFpcnN8ZW58MHx8fHwxNzU1NzE4MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.06" },
    { alt: "Modern furniture interior design with clean lines", src: "https://images.unsplash.com/photo-1565523432209-be0c07963bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMHBvcnRyYWl0JTIwdGFsbHxlbnwwfHx8fDE3NTU3MTg4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.04" },
    { alt: "Contemporary furniture design with minimalist aesthetic", src: "https://images.unsplash.com/photo-1666900492873-4b1498bfb771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMHBvcnRyYWl0JTIwdGFsbHxlbnwwfHx8fDE3NTU3MTg4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080", speed: "0.93" },
    { alt: "Modern bedroom furniture with nightstand and bed", src: "https://images.unsplash.com/photo-1565374235393-6fe32a07cc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwZnVybml0dXJlJTIwYmVkJTIwbmlnaHRzdGFuZHxlbnwwfHx8fDE3NTU3MTgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.08" },
    { tall: true, alt: "Elegant dining room furniture with chairs and table", src: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlJTIwdGFibGUlMjBjaGFpcnN8ZW58MHx8fHwxNzU1NzE4MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080", speed: "0.91" },
    { alt: "Study space with artistic furniture and warm lighting", src: "https://images.unsplash.com/photo-1721523259494-bdc6267e8fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBmdXJuaXR1cmUlMjBiZWRyb29tJTIwcG9ydHJhaXQlMjB0YWxsfGVufDB8fHx8MTc1NTcxODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.05" },
    { alt: "Premium Scandinavian furniture with modern design", src: "https://images.unsplash.com/photo-1628752694931-cbf5c8772725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc2NhbmRpbmF2aWFuJTIwZnVybml0dXJlJTIwbW9kZXJuJTIwZGVzaWdufGVufDB8fHx8MTc1NTcxODQzMXww&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.12" },
    { alt: "Contemporary furniture interior with modern design", src: "https://images.unsplash.com/photo-1583845112203-29329902332e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxzY2FuZGluYXZpYW4lMjBmdXJuaXR1cmUlMjBiZWRyb29tJTIwcG9ydHJhaXQlMjB0YWxsfGVufDB8fHx8MTc1NTcxODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080", speed: "0.94" },
    { tall: true, alt: "Scandinavian bedroom furniture with clean design", src: "https://images.unsplash.com/photo-1718636268253-d6ad2a0aeee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxiZWRyb29tJTIwZnVybml0dXJlJTIwYmVkJTIwbmlnaHRzdGFuZHxlbnwwfHx8fDE3NTU3MTgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.07" },
    { alt: "Modern bedroom furniture with elegant design", src: "https://images.unsplash.com/photo-1535049752-3baf525dd015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw1fHxzY2FuZGluYXZpYW4lMjBmdXJuaXR1cmUlMjBiZWRyb29tJTIwcG9ydHJhaXQlMjB0YWxsfGVufDB8fHx8MTc1NTcxODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080", speed: "0.96" },
    { alt: "Contemporary furniture design with modern aesthetic", src: "https://images.unsplash.com/photo-1680773525486-3313809b1a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxzY2FuZGluYXZpYW4lMjBmdXJuaXR1cmUlMjBiZWRyb29tJTIwcG9ydHJhaXQlMjB0YWxsfGVufDB8fHx8MTc1NTcxODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.06" },
    { tall: true, alt: "Modern bedroom furniture with cozy design", src: "https://images.unsplash.com/photo-1517912191359-67659f8690a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw1fHxiZWRyb29tJTIwZnVybml0dXJlJTIwYmVkJTIwbmlnaHRzdGFuZHxlbnwwfHx8fDE3NTU3MTgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080", speed: "0.89" },
    { alt: "Luxury modern furniture with elegant interior design", src: "https://images.unsplash.com/photo-1717001393444-881640eea475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBmdXJuaXR1cmUlMjBlbGVnYW50JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8fHwxNzU1NzE4NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.08" },
    { alt: "Luxury modern furniture with sophisticated design", src: "https://images.unsplash.com/photo-1743793054825-320e479cd150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjBmdXJuaXR1cmUlMjBlbGVnYW50JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8fHwxNzU1NzE4NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080", speed: "1.04" },
  ];

  const halfTiles = tiles.slice(0, Math.ceil(tiles.length / 2));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedTiles = isMobile && !showAll ? halfTiles : tiles;

  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">Inspiration Gallery</h3>
        </Reveal>
        <Reveal delay={120}>
          <p className={`mt-3 max-w-3xl ${isDark ? "text-white/70" : "text-black/70"} text-base md:text-lg`}>
            Create spaces that feel like home—functional, beautiful, and uniquely yours.
          </p>
        </Reveal>

        {/* Bento Grid (Aceternity-style) with curated Unsplash images */}
        <BentoGrid className="mt-12">
          {displayedTiles.map((it, idx) => (
            <BentoGridItem key={it.alt + idx} className={it.tall ? "md:row-span-2" : undefined}>
              <div className="relative h-full rounded-xl w-full" data-speed={isMobile ? "1.0" : it.speed}>
                <div className={`absolute inset-0 ${it.tall ? "scale-[1.2]" : "scale-[1.3]"} rounded-xl will-change-transform`}>
                  <SafeImage fill sizes="100vw" className="object-cover absolute object-center inset-0 scale-[1.2] animate-zoom-slow" alt={it.alt} src={it.src} />
                </div>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>

        {isMobile && tiles.length > halfTiles.length && (
          <div className="mt-8 flex justify-center">
            <Button
              as="button"
              onClick={() => setShowAll(!showAll)}
              variant="white"
              className={isDark ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-black/90"}
            >
              {showAll ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
