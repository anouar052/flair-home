import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useContactAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations with staggered array pattern
      gsap.set([".hero-line-1", ".hero-line-2", ".hero-subtitle", ".hero-cta"], { y: 60, opacity: 0 });

      const heroTimeline = gsap.timeline();
      heroTimeline
        .to([".hero-line-1", ".hero-line-2", ".hero-subtitle", ".hero-cta"], { 
          y: 0, 
          opacity: 1, 
          duration: 0.9, 
          ease: "power3.out", 
          stagger: 0.25, 
          delay: 0.25
        });

      // Section headers with staggered animations
      gsap.utils.toArray(".section-header").forEach((header: any) => {
        const line1 = header.querySelector(".header-line-1");
        const dash = header.querySelector(".header-dash");
        const line2 = header.querySelector(".header-line-2");
        const line3 = header.querySelector(".header-line-3");
        const paragraph = header.querySelector("p");
        const benefitItems = header.querySelectorAll(".flex.items-center.space-x-3");
        const helpText = header.querySelector(".mt-8 p");
        const anchors = header.querySelectorAll("a");

        // Set initial states
        gsap.set([line1, dash, line2, line3], { y: 40, opacity: 0 });
        gsap.set(paragraph, { y: 30, opacity: 0 });
        gsap.set(benefitItems, { y: 20, opacity: 0 });
        gsap.set(helpText, { y: 20, opacity: 0 });
        gsap.set(anchors, { y: 20, opacity: 0 });

        // Animate header elements with stagger
        gsap.to([line1, dash, line2, line3], {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom 25%",
          }
        });

        // Animate paragraph
        gsap.to(paragraph, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom 25%",
          },
          delay: 0.6
        });

        // Animate benefit items with stagger
        if (benefitItems.length > 0) {
          gsap.to(benefitItems, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: header,
              start: "top 75%",
              end: "bottom 25%",
            },
            delay: 0.8
          });
        }

        // Animate help text
        gsap.to(helpText, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom 25%",
          },
          delay: 1.0
        });

        // Animate anchors
        gsap.to(anchors, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom 25%",
          },
          delay: 1.2
        });
      });

      // Contact cards
      gsap.utils.toArray(".contact-card").forEach((card: any, index) => {
        gsap.set(card, { y: 50, opacity: 0 });
        
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
          },
          delay: index * 0.1
        });
      });

      // Form animation with staggered elements
      const formElements = gsap.utils.toArray(".contact-form label, .contact-form input, .contact-form select, .contact-form textarea, .contact-form button");
      
      gsap.set(".contact-form", { y: 40, opacity: 0 });
      gsap.set(formElements, { y: 20, opacity: 0 });
      
      gsap.to(".contact-form", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          end: "bottom 20%",
        }
      });

      gsap.to(formElements, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          end: "bottom 20%",
        },
        delay: 0.3
      });

      // Office cards with enhanced staggered animations
      gsap.utils.toArray(".office-card").forEach((card: any, index) => {
        const image = card.querySelector(".office-image");
        const content = card.querySelector(".office-content");
        const title = content?.querySelector("h3");
        const address = content?.querySelectorAll("p");
        const button = content?.querySelector("button");
        
        // Set initial states
        gsap.set(image, { clipPath: "inset(100% 0 0 0)" });
        gsap.set([title, ...address, button], { y: 30, opacity: 0 });
        
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 30%",
          },
          delay: index * 0.2 // Stagger between cards
        });

        cardTl
          .to(image, { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power4.out" })
          .to(title, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(address, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1 }, "-=0.4")
          .to(button, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
      });

      // FAQ items with enhanced staggered animations
      gsap.utils.toArray(".faq-item").forEach((item: any, index) => {
        const question = item.querySelector("h3");
        const answer = item.querySelector("p");
        const icon = item.querySelector("svg");
        
        // Set initial states
        gsap.set([question, icon], { y: 20, opacity: 0 });
        gsap.set(answer, { y: 15, opacity: 0 });
        
        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
          },
          delay: index * 0.15 // Stagger between FAQ items
        });

        itemTl
          .to([question, icon], { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
          .to(answer, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4");
      });

      // Parallax
      gsap.utils.toArray(".parallax-bg").forEach((bg: any) => {
        gsap.fromTo(bg,
          { y: -30 },
          {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: bg,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);
}
