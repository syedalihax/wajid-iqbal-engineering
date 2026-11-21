import type { Metadata } from "next";
import Image from "next/image";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Construction & Engineering Services",
  description:
    "Residential, commercial, automotive, civil engineering, architecture, and interior services in Karachi.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesGrid />
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B5EB9]">
              Construction Delivery
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              From structural work through exterior finishing.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl">
              Each project is managed around its site conditions, engineering
              requirements, and agreed scope of work.
            </p>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E2E8F0] bg-[#F1F5F9]">
            <Image
              src="/images/image (2).jpg"
              alt="Workers carrying out exterior finishing on a building under construction"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}