import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
              30 Years of Civil &amp; Turnkey Construction in Karachi.
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              From private villas and DHA campuses to commercial plazas and automotive
              showrooms — Wajid Iqbal &amp; Engineering handles design, structure, and
              finishing under one roof.
            </p>

            <div className="pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#0B2F6B] text-white px-5 py-3 text-sm font-semibold rounded-[5px] hover:bg-[#0B5EB9] transition-colors"
              >
                Projects
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/haval-showroom.jpg"
                  alt="Haval Motors Commercial Showroom built in Karachi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between px-3 py-3 text-xs font-mono text-[#475569] border-t border-[#E2E8F0] mt-2">
                <span>FEATURED DELIVERY: HAVAL MOTORS SHOWROOM</span>
                <span className="text-[#0B5EB9]">KARACHI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
