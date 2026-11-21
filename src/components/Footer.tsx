import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#0B2F6B] text-white border-t border-[#0B5EB9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5">
                <Image
                  src="/images/logo.png"
                  alt="Wajid Iqbal & Engineering"
                  width={36}
                  height={36}
                />
              </div>
              <span className="text-lg font-bold tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Licensed civil engineering, architectural, residential, and
              commercial construction contractors serving Karachi for over 30 years.
            </p>
            <p className="text-xs font-mono text-white/70">
              CEO: {COMPANY_INFO.ceoName}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white/60">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-white/85">
              <li><Link href="/about" className="hover:underline">About &amp; CEO</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/projects" className="hover:underline">Karachi Projects</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white/60">
              Karachi Office
            </p>
            <p className="text-sm text-white/85">{COMPANY_INFO.address}</p>
            <div className="flex flex-col gap-1 text-sm font-mono text-white/90">
              {COMPANY_INFO.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={"tel:" + phone.tel}
                  className="hover:text-[#BFDBFE] transition-colors"
                >
                  {phone.display}
                </a>
              ))}
            </div>
            <p className="text-sm text-white/85 break-all">{COMPANY_INFO.email}</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <a
            href="https://www.syedalihax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono cursor-pointer underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Website created by Syed Ali Hax
          </a>
        </div>
      </div>
    </footer>
  );
}
