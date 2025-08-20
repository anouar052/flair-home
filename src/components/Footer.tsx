"use client";
import Link from "next/link";
import { useTheme } from "./ui/theme";

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className={`${isDark ? "bg-black text-white " : "bg-white text-black "}`}>
      <div className="mx-auto  px-4 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="space-y-3">
          <div className="font-semibold">Home</div>
          <Link href="/catalog" className={`group inline-flex items-center gap-1 ${isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}>
            Catalog
            <svg className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
          <div className="space-x-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block opacity-80 hover:opacity-100 transition" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"/></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="inline-block opacity-80 hover:opacity-100 transition" aria-label="Facebook">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.66.79-1.66 1.6V12h2.83l-.45 2.91h-2.38v7.04A10 10 0 0022 12z"/></svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="inline-block opacity-80 hover:opacity-100 transition" aria-label="YouTube">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6a3 3 0 00-2.1 2.1A31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="inline-block opacity-80 hover:opacity-100 transition" aria-label="TikTok">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 8.5c-2.1 0-4.1-.7-5.6-1.9V17a5.5 5.5 0 11-5.5-5.5c.2 0 .4 0 .6.1v2.7a2.8 2.8 0 102-2.7V2h3.2c.5 2.6 2.5 4.7 5 5.2V8.5z"/></svg>
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-semibold">Support</div>
          <Link href="#" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Shipping and Delivery</Link>
          <Link href="#" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Payment Methods</Link>
          <Link href="#" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Returns and Refunds</Link>
          <Link href="#" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Terms of Service</Link>
          <Link href="#" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Privacy Policy</Link>
        </div>
        <div className="space-y-3">
          <div className="font-semibold">Company</div>
          <Link href="/en/about" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>About</Link>
          <Link href="/en/journal" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Journal</Link>
          <Link href="/en/contact" className={isDark ? "block text-white/70 hover:text-white" : "block text-black/70 hover:text-black"}>Contact</Link>
        </div>
        
      </div>
      <div className={`${isDark ? "border-white/10 text-white/50" : "border-black/10 text-black/50"} border-t-2 border-dotted py-6 text-center text-sm`}>
        © {new Date().getFullYear()} Flair Home — demo.
      </div>
    </footer>
  );
}

