"use client";
import React, { useEffect } from "react";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TeamMember } from "@/types/about";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutTeamProps {
  team: TeamMember[];
}

export default function AboutTeam({ team }: AboutTeamProps) {
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".section-header").forEach((header: any) => {
        const line1 = header.querySelector(".header-line-1");
        const dash = header.querySelector(".header-dash");
        const line2 = header.querySelector(".header-line-2");
        const line3 = header.querySelector(".header-line-3");

        gsap.set([line1, dash, line2, line3], { y: 40, opacity: 0 });

        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom 25%",
          }
        });

        headerTl
          .to(line1, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
          .to(dash, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.7")
          .to(line2, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
          .to(line3, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");
      });

      gsap.utils.toArray(".team-member").forEach((member: any, index) => {
        const image = member.querySelector(".team-image");
        const content = member.querySelector(".team-content");
        
        gsap.set(image, { clipPath: "inset(100% 0 0 0)" });
        gsap.set(content, { y: 40, opacity: 0 });
        
        const memberTl = gsap.timeline({
          scrollTrigger: {
            trigger: member,
            start: "top 70%",
            end: "bottom 30%",
          }
        });

        memberTl
          .to(image, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.out" })
          .to(content, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="section-header mb-24">
          <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">The minds behind the mission</div>
          <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
          <div className="text-3xl md:text-5xl leading-tight">
            <div className="header-line-2">People who</div>
            <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>make it happen</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {team.map((member, index) => {
            const gridClasses = [
              "md:col-span-5",
              "md:col-span-4",
              "md:col-span-3"
            ];
            
            const heights = [
              "h-[70vh] md:h-[80vh]",
              "h-[60vh] md:h-[70vh]",
              "h-[60vh] md:h-[65vh]"
            ];

            return (
              <div key={member.name} className={`team-member ${gridClasses[index]} ${index === 1 ? 'md:mt-16' : index === 2 ? 'md:mt-32' : ''}`}>
                <div className="relative group">
                  <div className={`team-image relative w-full ${heights[index]} overflow-hidden`}>
                    <SafeImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'} transition-opacity duration-700 group-hover:opacity-0`} />
                  </div>
                  
                  <div className="team-content absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className={`backdrop-blur-sm rounded-lg p-6 ${isDark ? 'bg-black/40' : 'bg-white/40'} border ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      <h3 className="text-xl md:text-2xl font-light mb-2">{member.name}</h3>
                      <p className={`text-sm font-medium uppercase tracking-wider mb-3 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                        {member.role}
                      </p>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

