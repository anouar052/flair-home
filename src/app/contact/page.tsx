import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Flair Home - Let's Create Something Extraordinary",
  description: "Get in touch with our design experts. Visit our showrooms, book consultations, or start your furniture project. We're here to transform your space with exceptional craftsmanship.",
  keywords: "contact flair home, furniture consultation, design services, showroom locations, custom furniture",
};

export default function Contact() {
  return <ContactPage />;
}
