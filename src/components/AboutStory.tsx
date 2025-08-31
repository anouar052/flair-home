"use client";
import React, { useRef, useLayoutEffect } from "react";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { clsx } from "./ui/clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TimelineItem } from "@/types/about";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutStoryProps {
  timeline: TimelineItem[];
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  mobile: {
    imageDuration: { reveal: 1.2, hide: 0.8 },
    textDuration: 0.6,
    stagger: 0.1,
    triggers: { start: "center 70%", end: "center 30%" }
  },
  desktop: {
    imageDuration: { reveal: 0.8, hide: 0.6 },
    textDuration: { yearGroup: 0.8, title: 0.9, description: 0.8, details: 0.7 },
    triggers: { start: "center 60%", end: "center 40%" }
  }
} as const;

// Dot style configurations
const DOT_STYLES = {
  mobile: {
    active: { backgroundColor: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,1)" },
    inactive: { backgroundColor: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.5)" }
  },
  desktop: {
    light: {
      active: { backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(0,0,0,1)" },
      inactive: { backgroundColor: "rgba(0,0,0,0.2)", borderColor: "rgba(0,0,0,0.4)" }
    },
    dark: {
      active: { backgroundColor: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,1)" },
      inactive: { backgroundColor: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.4)" }
    }
  }
} as const;

export default function AboutStory({ timeline }: AboutStoryProps) {
  const { isDark } = useTheme();
  const storyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!storyRef.current) return;
    
    // Kill existing timeline triggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id?.includes('timeline')) trigger.kill();
    });
    
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      
      // Initialize header animations
      initializeHeaderAnimations();
      
      // Initialize timeline animations based on platform
      if (isMobile) {
        initializeMobileTimeline();
      } else {
        initializeDesktopTimeline();
      }
      
      // Setup resize handler
      setupResizeHandler();
      
      function initializeHeaderAnimations() {
        const headers = storyRef.current?.querySelectorAll(".section-header");
        headers?.forEach(header => {
          const elements = {
            line1: header.querySelector(".header-line-1"),
            dash: header.querySelector(".header-dash"),
            line2: header.querySelector(".header-line-2"),
            line3: header.querySelector(".header-line-3")
          };

          gsap.set(Object.values(elements), { y: 40, opacity: 0 });

          const headerTl = gsap.timeline({
            scrollTrigger: {
              trigger: header,
              start: "top 75%",
              end: "bottom 25%",
              id: "timeline-header"
            }
          });

          headerTl
            .to(elements.line1, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
            .to(elements.dash, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.7")
            .to(elements.line2, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
            .to(elements.line3, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");
        });
      }
      
      function initializeMobileTimeline() {
        const elements = getMobileElements();
        if (!elements.isValid) return;
        
        // Set up mobile image stacking
        setupImageStacking(elements.stickyImages);
        
        // Set up GSAP pin for the mobile timeline image container
        const mobileImageContainer = storyRef.current?.querySelector('.md\\:hidden .sticky-image-container') as HTMLElement;
        const mobileTextContainer = storyRef.current?.querySelector('.md\\:hidden .timeline-text-container') as HTMLElement;
        
        if (mobileImageContainer && mobileTextContainer) {
          ScrollTrigger.create({
            trigger: mobileTextContainer,
            pin: mobileImageContainer,
            pinSpacing: true,
            start: "top top",
            end: "bottom bottom",
            id: "timeline-mobile-pin",
            pinType: "transform", // Use transform instead of position: fixed
            anticipatePin: 3 // Anticipate pin changes to reduce jitter
          });
        }
        
        // Initialize mobile animations
        setupMobileImageTriggers(elements);
        setupTimelineProgress(elements, true);
        setupTextAnimations(elements.textItems, true);
        setupYearLineAnimations(true);
      }
      
      function initializeDesktopTimeline() {
        const elements = getDesktopElements();
        if (!elements.isValid) return;
        
        // Set up desktop image stacking
        setupImageStacking(elements.stickyImages);
        
        // Set up GSAP pin for the timeline image container
        const rightColumn = storyRef.current?.querySelector('.hidden.md\\:block .md\\:relative') as HTMLElement;
        const leftColumn = storyRef.current?.querySelector('.hidden.md\\:block .timeline-text-container') as HTMLElement;
        
        if (rightColumn && leftColumn) {
          ScrollTrigger.create({
            trigger: leftColumn,
            pin: rightColumn,
            pinSpacing: true,
            start: "top top",
            end: "bottom bottom",
            id: "timeline-desktop-pin",
            pinType: "transform", // Use transform instead of position: fixed
            anticipatePin: 3 // Anticipate pin changes to reduce jitter
          });
        }
        
        // Position dots first, then setup triggers
        positionDesktopDots(elements, () => {
          setupDesktopImageTriggers(elements);
          setupTimelineProgress(elements, false);
          setupTextAnimations(elements.textItems, false);
          setupYearLineAnimations(false);
        });
      }
      
      function getMobileElements() {
        const stickyImages = Array.from(storyRef.current?.querySelectorAll(".md\\:hidden .timeline-sticky-image") || []) as HTMLElement[];
        const textItems = Array.from(storyRef.current?.querySelectorAll(".md\\:hidden .timeline-text-item") || []) as HTMLElement[];
        const timelineDots = Array.from(storyRef.current?.querySelectorAll(".md\\:hidden .timeline-dot") || []) as HTMLElement[];
        const contentContainer = storyRef.current?.querySelector(".md\\:hidden .timeline-content") as HTMLElement;
        
        return {
          stickyImages,
          textItems,
          timelineDots,
          contentContainer,
          isValid: stickyImages.length > 0 && textItems.length > 0 && timelineDots.length > 0 && contentContainer
        };
      }
      
      function getDesktopElements() {
        const stickyImages = Array.from(storyRef.current?.querySelectorAll(".hidden.md\\:block .timeline-sticky-image") || []) as HTMLElement[];
        const textItems = Array.from(storyRef.current?.querySelectorAll(".hidden.md\\:block .timeline-text-item") || []) as HTMLElement[];
        const timelineDots = Array.from(storyRef.current?.querySelectorAll(".hidden.md\\:block .timeline-dot") || []) as HTMLElement[];
        const contentContainer = storyRef.current?.querySelector(".hidden.md\\:block .timeline-content") as HTMLElement;
        
        return {
          stickyImages,
          textItems,
          timelineDots,
          contentContainer,
          isValid: stickyImages.length > 0 && textItems.length > 0 && timelineDots.length > 0 && contentContainer
        };
      }
      
      function setupImageStacking(stickyImages: HTMLElement[]) {
        stickyImages.forEach((img, index) => {
          gsap.set(img, {
            zIndex: index + 1,
            clipPath: index === 0 
              ? "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
          });
        });
      }
      
      function positionDesktopDots(elements: any, callback: () => void) {
        setTimeout(() => {
          elements.textItems.forEach((textItem: HTMLElement, index: number) => {
            const dot = elements.timelineDots[index];
            if (dot && textItem) {
              const yearText = textItem.querySelector(".timeline-year") as HTMLElement;
              if (yearText) {
                const yearRect = yearText.getBoundingClientRect();
                const contentRect = elements.contentContainer.getBoundingClientRect();
                const relativeTop = yearRect.top - contentRect.top + (yearText.offsetHeight / 2) + 10;
                gsap.set(dot, { top: `${relativeTop}px` });
              }
            }
          });
          
          // Initialize first dot
          if (elements.timelineDots.length > 0) {
            const firstDotStyle = isDark ? DOT_STYLES.desktop.dark.active : DOT_STYLES.desktop.light.active;
            gsap.set(elements.timelineDots[0], {
              scale: 1.5,
              ...firstDotStyle
            });
          }
          
          ScrollTrigger.refresh();
          callback();
        }, 100);
      }
      
      function setupMobileImageTriggers(elements: any) {
        elements.timelineDots.forEach((dot: HTMLElement, index: number) => {
          ScrollTrigger.create({
            trigger: dot,
            start: ANIMATION_CONFIG.mobile.triggers.start,
            end: ANIMATION_CONFIG.mobile.triggers.end,
            id: `timeline-mobile-dot-${index}`,
            onEnter: () => revealImage(elements, index, true),
            onLeaveBack: () => hideCurrentImage(elements, index, true)
          });
        });
        
        // Initialize first mobile dot
        if (elements.timelineDots.length > 0) {
          gsap.set(elements.timelineDots[0], {
            scale: 1.5,
            ...DOT_STYLES.mobile.active
          });
        }
      }
      
      function setupDesktopImageTriggers(elements: any) {
        elements.timelineDots.forEach((dot: HTMLElement, index: number) => {
          ScrollTrigger.create({
            trigger: dot,
            start: ANIMATION_CONFIG.desktop.triggers.start,
            end: ANIMATION_CONFIG.desktop.triggers.end,
            id: `timeline-desktop-dot-${index}`,
            onEnter: () => revealImage(elements, index, false),
            onLeaveBack: () => hideCurrentImage(elements, index, false)
          });
        });
      }
      
      function revealImage(elements: any, index: number, isMobile: boolean) {
        const config = isMobile ? ANIMATION_CONFIG.mobile : ANIMATION_CONFIG.desktop;
        
        // Scroll down: Only reveal current image (clean transition)
        if (index < elements.stickyImages.length) {
          gsap.to(elements.stickyImages[index], {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: config.imageDuration.reveal,
            ease: "power3.out"
          });
        }
        
        // Update dots
        updateDots(elements.timelineDots, index, isMobile);
      }
      
      function hideCurrentImage(elements: any, index: number, isMobile: boolean) {
        const config = isMobile ? ANIMATION_CONFIG.mobile : ANIMATION_CONFIG.desktop;
        
        // Scroll up: Only hide current image (clean transition)
        if (index < elements.stickyImages.length) {
          gsap.to(elements.stickyImages[index], {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: config.imageDuration.hide,
            ease: "power3.out"
          });
        }
        
        // Update dots to show previous one as active
        const prevIndex = index - 1;
        if (prevIndex >= 0) {
          updateDots(elements.timelineDots, prevIndex, isMobile);
        }
      }
      
      function updateDots(timelineDots: HTMLElement[], activeIndex: number, isMobile: boolean) {
        timelineDots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === activeIndex;
          let styles;
          
          if (isMobile) {
            styles = isActive ? DOT_STYLES.mobile.active : DOT_STYLES.mobile.inactive;
          } else {
            const theme = isDark ? DOT_STYLES.desktop.dark : DOT_STYLES.desktop.light;
            styles = isActive ? theme.active : theme.inactive;
          }
          
          gsap.to(dot, {
            scale: isActive ? 1.5 : 1,
            ...styles,
            duration: 0.3
          });
        });
      }
      
      function setupTimelineProgress(elements: any, isMobile: boolean) {
        const lastTextItem = elements.textItems[elements.textItems.length - 1];
        if (!lastTextItem || !elements.contentContainer) return;
        
        const selector = isMobile 
          ? ".md\\:hidden .timeline-line-progress" 
          : ".hidden.md\\:block .timeline-line-progress";
        
        gsap.to(selector, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: elements.contentContainer,
            start: isMobile ? "top 80%" : "top 65%",
            end: isMobile ? "bottom 10%" : () => {
              const lastItemRect = lastTextItem.getBoundingClientRect();
              const containerRect = elements.contentContainer.getBoundingClientRect();
              return `+=${lastItemRect.bottom - containerRect.top + 100}`;
            },
            scrub: isMobile ? 0.5 : 0.3,
            id: `timeline-progress-${isMobile ? 'mobile' : 'desktop'}`
          }
        });
      }
      
      function setupTextAnimations(textItems: HTMLElement[], isMobile: boolean) {
        textItems.forEach((item, index) => {
          const elements = {
            yearGroup: item.querySelector(".timeline-year-group"),
            title: item.querySelector(".timeline-title"),
            description: item.querySelector(".timeline-description"),
            details: item.querySelector(".timeline-details")
          };
          
          gsap.set(Object.values(elements), { y: isMobile ? 40 : 60, opacity: 0 });
          
          const textTl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: isMobile ? "top 85%" : "top 80%",
              end: isMobile ? "bottom 15%" : "bottom 20%",
              toggleActions: "play none none reverse",
              id: `timeline-text-${isMobile ? 'mobile' : 'desktop'}-${index}`
            }
          });

          if (isMobile) {
            textTl.to(Object.values(elements), { 
              y: 0, 
              opacity: 1, 
              duration: ANIMATION_CONFIG.mobile.textDuration, 
              ease: "power2.out",
              stagger: ANIMATION_CONFIG.mobile.stagger
            });
          } else {
            const config = ANIMATION_CONFIG.desktop.textDuration;
            textTl
              .to(elements.yearGroup, { y: 0, opacity: 1, duration: config.yearGroup, ease: "power3.out" })
              .to(elements.title, { y: 0, opacity: 1, duration: config.title, ease: "power3.out" }, "-=0.5")
              .to(elements.description, { y: 0, opacity: 1, duration: config.description, ease: "power3.out" }, "-=0.6")
              .to(elements.details, { y: 0, opacity: 1, duration: config.details, ease: "power3.out" }, "-=0.5");
          }
        });
      }
      
      function setupYearLineAnimations(isMobile: boolean) {
        const selector = isMobile 
          ? ".md\\:hidden .timeline-year-line" 
          : ".hidden.md\\:block .timeline-year-line";
        
        gsap.utils.toArray(selector).forEach((line) => {
          gsap.fromTo(line as HTMLElement,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: isMobile ? 0.6 : 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: line as HTMLElement,
                start: isMobile ? "top 85%" : "top 80%",
                end: isMobile ? "bottom 15%" : "bottom 20%",
                toggleActions: "play none none reverse",
                id: `timeline-year-line-${isMobile ? 'mobile' : 'desktop'}`
              }
            }
          );
        });
      }
      
      function setupResizeHandler() {
        let resizeTimeout: NodeJS.Timeout;
        
        const handleResize = () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            const newIsMobile = window.innerWidth < 768;
            if (newIsMobile !== isMobile) {
              // Platform changed - reinitialize
              ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.id?.includes('timeline')) trigger.kill();
              });
              ScrollTrigger.refresh();
            } else {
              ScrollTrigger.refresh();
            }
          }, 250);
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
          clearTimeout(resizeTimeout);
        };
      }
    });

    return () => ctx.revert();
  }, [isDark, timeline]);

  return (
    <section id="story" ref={storyRef} className={`relative ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Mobile Full-Screen Sticky Background */}
      <div className="md:hidden absolute inset-0 z-0 min-h-screen">
        <div className="sticky-image-container relative w-full h-screen overflow-hidden">
          {timeline.map((item, index) => (
            <div
              key={`mobile-image-${item.year}`}
              className="timeline-sticky-image absolute inset-0"
              data-year={item.year}
              data-index={index}
              style={{
                zIndex: index + 1,
                clipPath: index === 0 
                  ? "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)"
                  : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
              }}
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={index === 0}
                quality={90}
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-black/50'}`} />
              
              <div className="absolute bottom-8 right-8">
                <div className={`text-6xl font-light ${isDark ? 'text-white/20' : 'text-white/30'}`}>
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scrolling Content */}
      <div className="md:hidden relative z-10 min-h-screen">
        <div className="timeline-text-container px-4 py-16 pb-32">
          <div className="section-header mb-16 text-center">
            <div className="header-line-1 text-2xl font-medium mb-4 text-white">Our story unfolds</div>
            <span className="header-dash h-10 inline-flex items-center opacity-80 text-white justify-center">—</span>
            <div className="text-3xl leading-tight text-white">
              <div className="header-line-2">From vision</div>
              <div className="header-line-3 text-white/70">to reality</div>
            </div>
          </div>
          
          <div className="timeline-content space-y-32 relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px">
              <div className="timeline-line-bg w-full h-full bg-white/20" />
              <div className="timeline-line-progress absolute top-0 left-0 w-full bg-white/50" style={{ height: '0%' }} />
              
              {/* Mobile Timeline Dots */}
              {timeline.map((_, index) => (
                <div
                  key={`mobile-dot-${index}`}
                  className="timeline-dot absolute w-2 h-2 rounded-full left-1/2 -translate-x-1/2 transition-all duration-300 bg-white/30 border border-white/50"
                  data-index={index}
                  style={{ top: `${((index * 100) / (timeline.length - 1)) + 10}%` }}
                />
              ))}
            </div>
            
            {timeline.map((item, index) => (
              <div
                key={`mobile-text-${item.year}`}
                className="timeline-text-item relative"
                data-year={item.year}
                data-index={index}
              >
                <div className={`space-y-6 p-6 ml-8 rounded-2xl backdrop-blur-xs ${isDark ? 'bg-black/60' : 'bg-black/40'} border border-white/10`}>
                  <div className="timeline-year-group space-y-2">
                    <div className="timeline-year text-sm font-medium tracking-wider uppercase text-white/70">
                      {item.year}
                    </div>
                    <div className="timeline-year-line w-16 h-px bg-white/30" />
                  </div>
                  
                  <h3 className="timeline-title text-3xl font-light leading-tight text-white">
                    {item.title}
                  </h3>
                  
                  <p className="timeline-description text-lg leading-relaxed text-white/80">
                    {item.description}
                  </p>

                  <div className="timeline-details pt-4">
                    <div className="text-sm text-white/60 leading-relaxed">
                      {index === 0 && (
                        <p>Founded with a passion for beautiful, functional design. We started small, crafting each piece by hand with sustainable materials and unwavering attention to detail.</p>
                      )}
                      {index === 1 && (
                        <p>Launched our first collection featuring clean Scandinavian lines and eco-conscious materials. The response validated our commitment to timeless, sustainable design.</p>
                      )}
                      {index === 2 && (
                        <p>Expanded across Europe, opening curated showrooms that reflect both local culture and our core design philosophy while maintaining our commitment to quality.</p>
                      )}
                      {index === 3 && (
                        <p>Pioneering smart furniture solutions and sustainable materials for tomorrow's living spaces. Innovation meets tradition in our forward-thinking approach.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2">
            <div className="timeline-text-container relative py-16 md:py-24 px-4 md:px-12">
              <div className="section-header mb-16 md:mb-24">
                <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Our story unfolds</div>
                <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
                <div className="text-3xl md:text-5xl leading-tight">
                  <div className="header-line-2">From vision</div>
                  <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>to reality</div>
                </div>
              </div>
              <div className="timeline-content space-y-64 md:space-y-80 relative pb-32">
                <div className="absolute -left-7 top-0 bottom-0 w-px">
                  <div className={`timeline-line-bg w-full h-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                  <div className={`timeline-line-progress absolute top-0 left-0 w-full ${isDark ? 'bg-white/30' : 'bg-black/30'}`} style={{ height: '0%' }} />
                  
                  {timeline.map((_, index) => (
                    <div
                      key={`desktop-dot-${index}`}
                      className={`timeline-dot absolute w-3 h-3 rounded-full left-1/2 -translate-x-1/2 transition-all duration-300 ${isDark ? 'bg-white/20 border-2 border-white/40' : 'bg-black/20 border-2 border-black/40'}`}
                      data-index={index}
                    />
                  ))}
                </div>
                {timeline.map((item, index) => (
                  <div
                    key={`desktop-text-${item.year}`}
                    className="timeline-text-item relative"
                    data-year={item.year}
                    data-index={index}
                  >
                    <div className="space-y-8">
                      <div className="timeline-year-group space-y-2">
                        <div className={clsx(
                          "timeline-year text-sm font-medium tracking-wider uppercase",
                          isDark ? "text-white/50" : "text-black/50"
                        )}>
                          {item.year}
                        </div>
                        <div className={`timeline-year-line w-16 h-px ${isDark ? 'bg-white/30' : 'bg-black/30'}`} />
                      </div>
                      
                      <h3 className="timeline-title text-4xl md:text-6xl font-light leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className={`timeline-description text-xl md:text-2xl leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                        {item.description}
                      </p>

                      <div className="timeline-details space-y-4 pt-8">
                        <div className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'} leading-relaxed`}>
                          {index === 0 && (
                            <p>Founded with a passion for beautiful, functional design. We started small, crafting each piece by hand with sustainable materials and unwavering attention to detail.</p>
                          )}
                          {index === 1 && (
                            <p>Launched our first collection featuring clean Scandinavian lines and eco-conscious materials. The response validated our commitment to timeless, sustainable design.</p>
                          )}
                          {index === 2 && (
                            <p>Expanded across Europe, opening curated showrooms that reflect both local culture and our core design philosophy while maintaining our commitment to quality.</p>
                          )}
                          {index === 3 && (
                            <p>Pioneering smart furniture solutions and sustainable materials for tomorrow's living spaces. Innovation meets tradition in our forward-thinking approach.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:relative h-screen">
              <div className="sticky-image-container relative w-full h-full overflow-hidden">
                {timeline.map((item, index) => (
                  <div
                    key={`desktop-image-${item.year}`}
                    className="timeline-sticky-image absolute inset-0"
                    data-year={item.year}
                    data-index={index}
                    style={{
                      zIndex: index + 1,
                      clipPath: index === 0 
                        ? "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)"
                        : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
                    }}
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                      quality={100}
                      />
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
                    
                    <div className="absolute bottom-8 right-8">
                      <div className={`text-6xl md:text-8xl font-light ${isDark ? 'text-white/20' : 'text-black/20'}`}>
                        {item.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}