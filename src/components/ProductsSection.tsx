"use client";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { SafeImage } from "./ui/SafeImage";
import { useTheme } from "./ui/theme";

export type Product = {
  id: string;
  title: string;
  price: string;
  tag?: string;
  href: string;
  img: string;
  imgHover: string;
};

function ProductCard({ p }: { p: Product }) {
  const { isDark } = useTheme();
  return (
    <Link href={`/product/${p.id}`} className="group block">
      <div className={`${isDark ? "bg-neutral-900" : "bg-neutral-200"} relative aspect-3/4 w-full overflow-hidden rounded-xl`}>
        <SafeImage src={p.img} alt={p.title} className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
        <SafeImage src={p.imgHover} alt={`${p.title} hover`} className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
      </div>
      <div className={`mt-3 text-xs uppercase tracking-wide ${isDark ? "text-white/60" : "text-black/60"}`}>{p.tag || "collection"}</div>
      <div className="flex items-center justify-between">
        <div className={isDark ? "text-white" : "text-black"}>{p.title}</div>
        <div className={isDark ? "text-white/80" : "text-black/80"}>{p.price}</div>
      </div>
    </Link>
  );
}

export default function ProductsSection({ title, products }: { title: string; products: Product[] }) {
  const { isDark } = useTheme();
  return (
    <section className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-14 md:py-20`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Reveal>
            <h2 className="text-2xl md:text-3xl">{title}</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/catalog" className={isDark ? "text-white/70 hover:text-white transition" : "text-black/70 hover:text-black transition"}>
              All Products
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
