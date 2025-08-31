"use client";

import React, { useState } from "react";
import { useTheme } from "../ui/theme";
import { Button } from "../ui/Button";
import { clsx } from "../ui/clsx";

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

export default function ContactForm() {
  const { isDark } = useTheme();
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
  );
}

