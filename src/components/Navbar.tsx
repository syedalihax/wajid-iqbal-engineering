"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Wajid Iqbal & Engineering Logo"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
          <div className="leading-tight">
            <span className="block text-base sm:text-lg font-bold tracking-tight text-[#0B2F6B]">
              Wajid Iqbal &amp; Engineering
            </span>
            <span className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
              Licensed Contractors
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0F172A]">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 border-b-2 transition-colors ${
                  isActive
                    ? "border-[#0B5EB9] text-[#0B5EB9]"
                    : "border-transparent text-[#0F172A] hover:border-[#94B8D8] hover:text-[#0B5EB9]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={COMPANY_INFO.phones[0].whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B5EB9] text-white px-5 py-2.5 text-sm font-semibold rounded-[5px] hover:bg-[#0B2F6B] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 border border-[#E2E8F0] text-[#0B2F6B]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-4 space-y-3">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium border-l-4 pl-3 ${
                  isActive
                    ? "border-[#0B5EB9] text-[#0B5EB9] bg-[#EFF6FF]"
                    : "border-transparent text-[#0F172A] border-b border-[#F1F5F9]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={COMPANY_INFO.phones[0].whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#0B5EB9] text-white py-3 text-sm font-semibold rounded-[5px]"
          >
            WhatsApp: {COMPANY_INFO.phones[0].display}
          </a>
        </div>
      )}
    </header>
  );
}
