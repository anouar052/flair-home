"use client";
import { useTheme } from "@/components/ui/theme";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The build quality is outstanding. Our office lounge finally looks and feels like a place people actually want to spend time in.",
    author: "Emma Wilson",
    role: "Creative Director, Atelier North",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "Elegant, minimal, and comfortable. The modular sofa transformed our living space without overwhelming it.",
    author: "Marcus Lee",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "From order to delivery, the experience felt premium. The details and finishes are way above the price point.",
    author: "Sofia Hernandez",
    role: "Interior Stylist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "Subtle, timeless pieces that blend into our projects and elevate them without shouting for attention.",
    author: "Daniel Kim",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "In love with the texture and ergonomics. You can feel the care in the finish and stitching.",
    author: "Priya Nair",
    role: "Founder, Studio Nair",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  
];

function Card({ t, isDark }: { t: Testimonial; isDark: boolean }) {
  return (
    <figure
      className={`mr-4 md:mr-6 shrink-0 w-[320px] md:w-[400px] rounded-2xl border overflow-hidden p-6 md:p-7 whitespace-normal ${
        isDark ? "border-white/10 bg-neutral-900" : "border-black/10 bg-white"
      }`}
    >
      <blockquote>
        <p className={`${isDark ? "text-white" : "text-black"} text-base md:text-lg leading-relaxed break-words hyphens-auto`}>"{t.quote}"</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {t.avatar && (
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <img 
              src={t.avatar} 
              alt={`${t.author}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="text-sm font-medium">{t.author}</div>
          {t.role && (
            <div className={`${isDark ? "text-white/60" : "text-black/60"} text-xs`}>{t.role}</div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { isDark } = useTheme();

  // Duplicate content to create seamless looping (50% width translated)
  const rowA = [...testimonials, ...testimonials];
  const rowB = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className={`${isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-black"} py-16 md:py-24`}>
      <div className="mx-auto">
        <div className="mb-10 md:mb-14 px-4 xl:px-36 md:px-6">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">What our customers say</h3>
          </Reveal>
          <Reveal delay={80}>
            <p className={`${isDark ? "text-white/60" : "text-black/60"} mt-3 max-w-2xl text-base md:text-lg`}>
              Real words from real homes and studios. Designed to live beautifully and last.
            </p>
          </Reveal>
        </div>

        <div className="space-y-6 md:space-y-8 overflow-hidden">
          {/* Row 1: left-to-right (using reverse animation for opposite visual) */}
          <div className="relative">
            <div className="marquee marquee-reverse">
              {rowA.map((t, i) => (
                <Card key={`a-${i}-${t.author}`} t={t} isDark={isDark} />
              ))}
              
            </div>
          </div>

          {/* Row 2: right-to-left */}
          <div className="relative">
            <div className="marquee" style={{ ['--marquee-duration' as any]: '36s' }}>
              {rowB.map((t, i) => (
                <Card key={`b-${i}-${t.author}`} t={t} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
