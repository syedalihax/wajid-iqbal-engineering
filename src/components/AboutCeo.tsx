import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

export default function AboutCeo() {
  return (
    <section id="about" className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E2E8F0] p-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/ceo-iqbal-khan.jpg"
                  alt="Iqbal Khan - CEO of Wajid Iqbal & Engineering"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="pt-4 pb-1 px-1 flex items-baseline justify-between border-t border-[#E2E8F0] mt-3">
                <div>
                  <p className="text-base font-bold text-[#0F172A]">
                    {COMPANY_INFO.ceoName}
                  </p>
                  <p className="text-xs text-[#64748B]">
                    {COMPANY_INFO.ceoTitle}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#0B5EB9]">
                  30+ YRS EXP.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B5EB9]">
              Leadership &amp; Legacy
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]">
              Three Decades of Dependable Civil &amp; Commercial Construction in Karachi.
            </h2>
            <p className="text-[#475569] leading-relaxed">
              For over 30 years, {COMPANY_INFO.name} has operated exclusively across
              Karachi—delivering projects where structural integrity, transparent
              costing, and on-schedule handover matter most. From DHA academic
              campuses and Gadap Town’s VIP Jamia Masjid to flagship automotive
              showrooms and workshops for Haval and Chery, our work stands across
              every major zone of the city.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Operating as a licensed engineering and construction firm from Hassan
              Square, every site is supervised with disciplined material quality,
              proper foundation waterproofing, and direct leadership oversight.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white border border-[#E2E8F0] p-5">
                <p className="font-mono text-xs text-[#0B5EB9] uppercase">
                  Credentials
                </p>
                <p className="font-semibold text-[#0F172A] mt-1">
                  {COMPANY_INFO.licensingNote}
                </p>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-5">
                <p className="font-mono text-xs text-[#0B5EB9] uppercase">
                  Jurisdiction
                </p>
                <p className="font-semibold text-[#0F172A] mt-1">
                  Dedicated Exclusively to Karachi Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
