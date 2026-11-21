import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Project Quotes",
  description:
    "Contact Wajid Iqbal & Engineering to discuss a construction project in Karachi.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}