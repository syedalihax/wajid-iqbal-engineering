import type { Metadata } from "next";
import Image from "next/image";
import AboutCeo from "@/components/AboutCeo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the leadership and site teams behind Wajid Iqbal & Engineering in Karachi.",
};

const FIELD_IMAGES = [
  {
    src: "/images/image (1).jpg",
    alt: "Site engineer reviewing construction drawings at a building project",
    title: "Site supervision",
    description: "On-site review keeps drawings, materials, and construction aligned.",
  },
  {
    src: "/images/image (3).jpg",
    alt: "Construction team reviewing plans together at a residential site",
    title: "Team coordination",
    description: "Clear coordination helps crews move safely through each project stage.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <AboutCeo />
      <section className="border-b border-[#E2E8F0] bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B5EB9]">
              On-Site Delivery
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2">
              Engineering oversight at every stage.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FIELD_IMAGES.map((item) => (
              <article key={item.src} className="border border-[#E2E8F0] bg-white">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}