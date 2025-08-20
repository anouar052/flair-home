"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { throttle } from "@/lib/utils";

/**
 * Hook for detecting when an element is in view
 * Optimized with automatic cleanup and configurable options
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  
  // Memoize options to prevent unnecessary re-creation of observer
  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
      ...options,
    }),
    [options]
  );
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(element);
          }
        });
      },
      observerOptions
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [observerOptions]);
  
  return { ref, inView } as const;
}

/**
 * Hook for detecting scroll state with throttling for performance
 */
export function useScrolled(threshold: number = 8) {
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > threshold);
    }, 16), // ~60fps
    [threshold]
  );
  
  useEffect(() => {
    // Initial check
    setScrolled(window.scrollY > threshold);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, threshold]);
  
  return scrolled;
}

/**
 * Hook for tracking window size
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>(() => {
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });
  
  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return windowSize;
}

/**
 * Hook for media queries
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);
  
  return matches;
}

/**
 * Hook for detecting if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
