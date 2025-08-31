"use client";
import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useTheme } from "./ui/theme";
import { useScrolled } from "@/components/ui/hooks";
import { clsx } from "@/components/ui/clsx";  
import { useCart } from "@/components/ui/cart";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS, DEFAULT_VALUES, ROUTES } from "@/constants";

// Custom hook for determining light preference
function usePreferLight() {
  const { isDark } = useTheme();
  const pathname = usePathname();
  
  return useMemo(() => {
    const isHomePage = pathname === ROUTES.HOME || pathname === ROUTES.ABOUT;
    return !isDark && !isHomePage;
  }, [isDark, pathname]);
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  preferLight?: boolean;
}

function NavLink({ href, children, onClick, preferLight = false }: NavLinkProps) {
  const { isDark } = useTheme();
  const scrolled = useScrolled(4);
  
  const textColorClass = useMemo(() => {
    if (preferLight) return "text-black/90 hover:text-black";
    if (scrolled) {
      return !isDark 
        ? "text-black/90 hover:text-black" 
        : "text-white/90 hover:text-white";
    }
    return "text-white/90 hover:text-white";
  }, [preferLight, scrolled, isDark]);
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-1 text-sm transition ${textColorClass}`}
    >
      <span>{children}</span>
      <svg 
        className="h-3 w-3 opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
        viewBox="0 0 20 20" 
        fill="currentColor" 
        aria-hidden="true"
      >
        <path 
          fillRule="evenodd" 
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
          clipRule="evenodd" 
        />
      </svg>
    </Link>
  );
}

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const scrolled = useScrolled(4);
  const preferLight = usePreferLight();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        preferLight ? "bg-black/10 hover:bg-black/20 text-black" : scrolled ? (!isDark ? "bg-black/10 hover:bg-black/20 text-black" : "bg-white/10 hover:bg-white/20 text-white") : "bg-white/10 hover:bg-white/20 text-white"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}

function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const { isDark } = useTheme();
  const scrolled = useScrolled(4);
  const preferLight = usePreferLight();
  
  return (
    <button
      onClick={onClick}
      className={`md:hidden px-4 py-2 rounded-full transition-all duration-300 ${
        preferLight ? "bg-black/10 hover:bg-black/20 text-black" : scrolled 
          ? (!isDark ? "bg-black/10 hover:bg-black/20 text-black" : "bg-white/10 hover:bg-white/20 text-white") 
          : "bg-white/10 hover:bg-white/20 text-white"
      }`}
      aria-label="Toggle mobile menu"
    >
      <span className="text-sm font-medium">{isOpen ? 'Close' : 'Menu'}</span>
    </button>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { isDark } = useTheme();
  const scrolled = useScrolled(4);
  const preferLight = usePreferLight();
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${isDark ? 'bg-black/60' : 'bg-black/40'}`}
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className={`h-full ${isDark ? 'bg-black' : 'bg-white'} shadow-2xl flex flex-col`}>
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${preferLight ? 'border-black/10' : isDark ? 'border-white/10' : 'border-black/10'}`}>
            <span className={`font-semibold text-lg ${preferLight ? 'text-black' : isDark ? 'text-white' : 'text-black'}`}>Menu</span>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                preferLight ? 'hover:bg-black/10' : isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'
              }`}
            >
              <svg className={`w-5 h-5 ${preferLight ? 'text-black' : isDark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block text-lg font-medium transition-colors ${
                      preferLight ? 'text-black/80 hover:text-black' : isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className={`p-6 border-t ${preferLight ? 'border-black/10' : isDark ? 'border-white/10' : 'border-black/10'}`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(4);
  const { isDark } = useTheme();
  const { openCart, totalItems } = useCart();
  const preferLight = usePreferLight();
  
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  
  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all",
          scrolled
            ? isDark
              ? "backdrop-blur-sm bg-black/50  "
              : "backdrop-blur-sm bg-white/90  "
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="h-14 md:h-16 flex items-center justify-between">
            <div className="flex items-center gap-28">
              <Link href="/" className={`font-semibold tracking-wider ${preferLight ? "text-black" : scrolled ? (!isDark ? "text-black" : "text-white") : "text-white"}`}>
                Flair Home
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href} preferLight={preferLight}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
           
              <button id="cart-button" onClick={openCart} className={`group inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition ${scrolled ? (isDark ? "bg-white/10 hover:bg-white/15 text-white" : "bg-black/10 hover:bg-black/15 text-black") : preferLight ? "bg-black/10 hover:bg-black/15 text-black" : "bg-white/10 hover:bg-white/15 text-white"}`}>
                <span className={`text-sm ${preferLight ? "text-black" : scrolled ? (!isDark ? "text-black" : "text-white") : "text-white"}`}>Bag</span>
                <span className={`${(!isDark ? "bg-black text-white" : "bg-white text-black") } rounded-full px-1.5 text-xs leading-5`}>{totalItems}</span>
                <svg className="h-3 w-3 opacity-80 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
