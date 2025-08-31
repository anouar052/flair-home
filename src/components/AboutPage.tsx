"use client";
import React from "react";
import { useTheme } from "./ui/theme";
import Footer from "./Footer";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import AboutTeam from "./AboutTeam";
import AboutVision from "./AboutVision";
import type { TimelineItem, ValueItem, TeamMember } from "@/types/about";

export default function AboutPage() {
  const { isDark } = useTheme();

  // Static data - could be moved to a separate data file in the future
  const timeline: TimelineItem[] = [

    {
      year: "2019",
      title: "The Beginning",
      description: "Started in a small studio apartment with a simple belief: everyone deserves beautiful, functional furniture.",
      image: "https://images.unsplash.com/photo-1755062291836-3df312a193ff?auto=format&fit=crop&w=1600&h=2400&q=90"
    },
    {
      year: "2020",
      title: "First Collection",
      description: "Launched our minimalist line, focusing on clean lines and sustainable materials.",
      image: "https://images.unsplash.com/photo-1688439227385-83245055e376?auto=format&fit=crop&w=1600&h=2400&q=90"
    },
    {
      year: "2022",
      title: "Going Global",
      description: "Expanded across Europe, bringing Scandinavian design philosophy to homes worldwide.",
      image: "https://images.unsplash.com/photo-1693320417181-34faf919d222?auto=format&fit=crop&w=1600&h=2400&q=90"
    },
    {
      year: "2025+",
      title: "The Future",
      description: "Pioneering new materials and smart furniture solutions for the next generation of living.",
      image: "https://images.unsplash.com/photo-1707993033798-86fc7989f692?auto=format&fit=crop&w=1600&h=2400&q=90"
    }
  ];

  const values: ValueItem[] = [
    {
      title: "Authenticity",
      description: "Every piece tells a story. We believe in creating furniture that reflects genuine craftsmanship and honest materials.",
      number: "01"
    },
    {
      title: "Sustainability", 
      description: "Our future depends on conscious choices today. We source responsibly and design for longevity.",
      number: "02"
    },
    {
      title: "Innovation",
      description: "Tradition meets technology. We honor classic design principles while embracing modern solutions.",
      number: "03"
    },
    {
      title: "Community",
      description: "Design is collaborative. We create with our customers, for our customers, building lasting relationships.",
      number: "04"
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Elena Vasquez",
      role: "Founder & Creative Director",
      bio: "Former architect turned furniture designer with a passion for sustainable living.",
      image: "https://images.unsplash.com/photo-1650784854486-0312affcebb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-purple-400 to-pink-400"
    },
    {
      name: "Marcus Chen",
      role: "Head of Design",
      bio: "20 years crafting furniture that balances beauty with functionality.",
      image: "https://images.unsplash.com/photo-1683133424422-98d4a8a2cc93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Sofia Larsson",
      role: "Sustainability Lead",
      bio: "Environmental scientist ensuring every piece respects our planet.",
      image: "https://images.unsplash.com/photo-1645811852558-973ff49b5c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <AboutHero />
      <AboutStory timeline={timeline} />
      <AboutValues values={values} />
      <AboutTeam team={team} />
      <AboutVision />
      <Footer />
    </div>
  );
}
