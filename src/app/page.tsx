import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <ServicesGrid />

      <section className="border-b border-[#E2E8F0] bg-[#0B2F6B] text-white py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#BFDBFE]">
            From Planning to Handover
          </p>
          <p className="text-sm sm:text-base font-medium">
            Structural work, finishing, coordination and site delivery managed under one team.
          </p>
        </div>
      </section>

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}
