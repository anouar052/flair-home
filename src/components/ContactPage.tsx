"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { Button } from "./ui/Button";
import { clsx } from "./ui/clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Form validation
interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

const CONTACT_INFO = [
  {
    title: "Visit Our Showroom",
    content: "Experience our furniture in person",
    details: ["123 Design District", "Copenhagen, Denmark 2100"],
    icon: "📍",
    action: "Get Directions"
  },
  {
    title: "Let's Talk",
    content: "Ready to transform your space?",
    details: ["+45 33 12 34 56", "hello@flairhome.com"],
    icon: "💬",
    action: "Call Now"
  },
  {
    title: "Business Hours",
    content: "We're here when you need us",
    details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"],
    icon: "🕒",
    action: "Schedule Visit"
  }
];

const OFFICES = [
  {
    city: "Copenhagen",
    address: "123 Design District, 2100 Copenhagen",
    phone: "+45 33 12 34 56",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&auto=format&fit=crop&w=800&h=600",
    isHeadquarters: true
  },
  {
    city: "Stockholm",
    address: "456 Gamla Stan, 111 29 Stockholm",
    phone: "+46 8 123 456",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&auto=format&fit=crop&w=800&h=600",
    isHeadquarters: false
  },
  {
    city: "Oslo",
    address: "789 Aker Brygge, 0250 Oslo",
    phone: "+47 22 12 34 56",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&auto=format&fit=crop&w=800&h=600",
    isHeadquarters: false
  }
];

const FAQ_ITEMS = [
  {
    question: "What's your design consultation process?",
    answer: "We start with a complimentary 60-minute consultation to understand your space, lifestyle, and design preferences. Our expert designers then create a personalized proposal with 3D renderings and detailed timelines."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Delivery times vary by location: EU (2-4 weeks), North America (4-6 weeks), Rest of World (6-8 weeks). All items are carefully packaged and fully insured."
  },
  {
    question: "What warranty do you provide?",
    answer: "All furniture comes with our comprehensive 10-year structural warranty. Upholstery and finishes are covered for 5 years. We also offer extended protection plans for complete peace of mind."
  },
  {
    question: "Can I customize existing designs?",
    answer: "Absolutely! Over 90% of our pieces can be customized. Choose from premium fabrics, wood finishes, metal accents, and dimensional modifications to perfectly fit your space and style."
  }
];

export default function ContactPage() {
  const { isDark } = useTheme();
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.set([".hero-line-1", ".hero-line-2"], { y: 60, opacity: 0 });
      gsap.set(".hero-subtitle", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { y: 20, opacity: 0 });

      const heroTimeline = gsap.timeline();
      heroTimeline
        .to(".hero-line-1", { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
        .to(".hero-line-2", { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.6")
        .to(".hero-subtitle", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to(".hero-cta", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.3");

      // Section headers
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
          .to(line1, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
          .to(dash, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
          .to(line2, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
          .to(line3, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
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

      // Form animation
      gsap.set(".contact-form", { y: 40, opacity: 0 });
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

      // Office cards
      gsap.utils.toArray(".office-card").forEach((card: any, index) => {
        const image = card.querySelector(".office-image");
        const content = card.querySelector(".office-content");
        
        gsap.set(image, { clipPath: "inset(100% 0 0 0)" });
        gsap.set(content, { y: 30, opacity: 0 });
        
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 30%",
          }
        });

        cardTl
          .to(image, { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power4.out" })
          .to(content, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      });

      // FAQ items
      gsap.utils.toArray(".faq-item").forEach((item: any, index) => {
        gsap.set(item, { y: 30, opacity: 0 });
        
        gsap.to(item, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
          },
          delay: index * 0.1
        });
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

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      budget: "",
      timeline: ""
    });
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div ref={pageRef} className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="parallax-bg absolute inset-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&auto=format&fit=crop&w=1920&h=1080"
            alt="Modern office space"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
        </div>
        <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/70'}`} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 h-screen flex flex-col justify-end pb-16">
          <div className="hero-text space-y-6">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl text-white overflow-hidden">
              <span className="hero-line-1 inline-block">Let's create something</span> <br />
              <span className="hero-line-2 inline-block">— extraordinary together</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl">
              Ready to transform your space? Our design experts are here to bring your vision to life with personalized solutions and exceptional craftsmanship.
            </p>
            <div className="hero-cta">
              <Button href="#contact-form" variant="white" className="mt-6 w-fit">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Header */}
            <div className="section-header">
              <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Get in touch</div>
              <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
              <div className="text-3xl md:text-5xl leading-tight">
                <div className="header-line-2">Multiple ways to</div>
                <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>connect with us</div>
              </div>
              <p className={`mt-6 text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Ready to transform your space? We offer multiple ways to connect and start your design journey with our expert team.
              </p>
            </div>

            {/* Right Column - Contact Cards */}
            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className={`contact-card p-6 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'} flex items-start space-x-4`}>
                  <div className="text-2xl flex-shrink-0 mt-1">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-light mb-1">{info.title}</h3>
                    <p className={`text-sm mb-3 ${isDark ? 'text-white/60' : 'text-black/60'}`}>{info.content}</p>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <p key={i} className={`text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>{detail}</p>
                      ))}
                    </div>
                    <Button
                      as="button"
                      variant="ghost"
                      className="text-sm px-0 py-1"
                    >
                      {info.action} →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Header */}
            <div className="section-header lg:sticky lg:top-32">
              <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Start your project</div>
              <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
              <div className="text-3xl md:text-5xl leading-tight">
                <div className="header-line-2">Tell us about</div>
                <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>your vision</div>
              </div>
              <p className={`mt-6 text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Share your project details and we'll create a personalized proposal with 3D renderings, timeline, and detailed pricing.
              </p>
              
              {/* Benefits List */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                  <span className={`text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>Free consultation & 3D design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                  <span className={`text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                  <span className={`text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>No commitment required</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={`contact-form rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-light mb-4">Thank you for reaching out!</h3>
                <p className={`${isDark ? 'text-white/70' : 'text-black/70'}`}>
                  We've received your message and will get back to you within 24 hours.
                </p>
                <Button
                  as="button"
                  onClick={() => setSubmitted(false)}
                  variant={isDark ? "white" : "ghost"}
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:bg-white/15" 
                          : "bg-white border-black/20 text-black placeholder-black/60 focus:border-black/40",
                        errors.name && "border-red-500"
                      )}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:bg-white/15" 
                          : "bg-white border-black/20 text-black placeholder-black/60 focus:border-black/40",
                        errors.email && "border-red-500"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:bg-white/15" 
                          : "bg-white border-black/20 text-black placeholder-black/60 focus:border-black/40"
                      )}
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/15" 
                          : "bg-white border-black/20 text-black focus:border-black/40"
                      )}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under €5,000</option>
                      <option value="5k-15k">€5,000 - €15,000</option>
                      <option value="15k-30k">€15,000 - €30,000</option>
                      <option value="30k-50k">€30,000 - €50,000</option>
                      <option value="over-50k">Over €50,000</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:bg-white/15" 
                          : "bg-white border-black/20 text-black placeholder-black/60 focus:border-black/40",
                        errors.subject && "border-red-500"
                      )}
                      placeholder="What can we help you with?"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/15" 
                          : "bg-white border-black/20 text-black focus:border-black/40"
                      )}
                    >
                      <option value="">Project timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="just-exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    className={clsx(
                      "w-full px-4 py-3 rounded-lg border transition-colors resize-none",
                      isDark 
                        ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:bg-white/15" 
                        : "bg-white border-black/20 text-black placeholder-black/60 focus:border-black/40",
                      errors.message && "border-red-500"
                    )}
                    placeholder="Tell us about your project, space, and design preferences..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    * Required fields
                  </p>
                  <Button
                    as="button"
                    type="submit"
                    disabled={isSubmitting}
                    variant={isDark ? "white" : "ghost"}
                    className="px-8 py-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="section-header mb-16 md:mb-24">
            <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Visit us</div>
            <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
            <div className="text-3xl md:text-5xl leading-tight">
              <div className="header-line-2">Our showrooms across</div>
              <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>Scandinavia</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, index) => (
              <div key={index} className="office-card group">
                <div className="office-image relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                  <SafeImage
                    src={office.image}
                    alt={`${office.city} office`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
                  {office.isHeadquarters && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        Headquarters
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="office-content">
                  <h3 className="text-xl md:text-2xl font-light mb-3">{office.city}</h3>
                  <div className="space-y-2 mb-4">
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {office.address}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {office.phone}
                    </p>
                  </div>
                  <Button
                    as="button"
                    variant="ghost"
                    className="text-sm px-0 py-1"
                  >
                    Book Appointment →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${isDark ? "bg-black" : "bg-white"} py-24 md:py-32`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Header */}
            <div className="section-header lg:sticky lg:top-32">
              <div className="header-line-1 text-2xl md:text-4xl font-medium mb-4">Common questions</div>
              <span className="header-dash h-10 inline-flex items-center opacity-80">—</span>
              <div className="text-3xl md:text-5xl leading-tight">
                <div className="header-line-2">Everything you</div>
                <div className={`header-line-3 ${isDark ? "text-white/70" : "text-black/70"}`}>need to know</div>
              </div>
              <p className={`mt-6 text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Find answers to the most frequently asked questions about our design process, services, and policies.
              </p>
              
              <div className="mt-8">
                <p className={`mb-4 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                  Still have questions? We're here to help.
                </p>
                <Button
                  href="#contact-form"
                  variant="ghost"
                  className="px-0 py-1"
                >
                  Get in Touch →
                </Button>
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item rounded-xl border transition-all duration-300 ${isDark ? 'border-white/10 hover:border-white/20' : 'border-black/10 hover:border-black/20'}`}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left p-6 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium pr-4">{item.question}</h3>
                      <div className={`transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200">
          {/* Placeholder for interactive map */}
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Google Maps integration would go here</p>
            </div>
          </div>
        </div>
        
        {/* Overlay with contact info */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-sm">
          <h3 className="font-medium text-gray-900 mb-2">Copenhagen Headquarters</h3>
          <p className="text-sm text-gray-600 mb-3">123 Design District<br />2100 Copenhagen, Denmark</p>
          <Button
            as="button"
            variant="ghost"
            className="text-sm text-gray-900 border-gray-300 hover:border-gray-500"
          >
            Get Directions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
