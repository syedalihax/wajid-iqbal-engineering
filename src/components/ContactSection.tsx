"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Residential Construction");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
        const message = `Assalam-o-Alaikum, I would like a construction consultation from Wajid Iqbal & Engineering.
    Name: ${name}
    Phone: ${phone}
    Service: ${service}
    Karachi Area: ${location}
    Details: ${details}`;

    window.open(
      COMPANY_INFO.phones[0].whatsapp + "?text=" + encodeURIComponent(message),
      "_blank"
    );
  }

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B5EB9]">
              Direct Consultation
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]">
              Discuss Your Project in Karachi
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Schedule an on-site inspection or share your plot dimensions and
              drawings with our engineering team directly via WhatsApp, phone, or
              office visit.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0B5EB9] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase text-[#64748B]">
                    Head Office (Karachi)
                  </p>
                  <p className="text-sm font-medium text-[#0F172A] mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0B5EB9] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase text-[#64748B]">
                    Business Numbers
                  </p>
                  <div className="flex flex-col gap-1.5 mt-1.5">
                    {COMPANY_INFO.phones.map((phone) => (
                      <a
                        key={phone.display}
                        href={"tel:" + phone.tel}
                        className="text-sm font-mono font-semibold text-[#0B2F6B] hover:text-[#0B5EB9] transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0B5EB9] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase text-[#64748B]">
                    Email
                  </p>
                  <a
                    href={"mailto:" + COMPANY_INFO.email}
                    className="text-sm font-medium text-[#0F172A] hover:text-[#0B5EB9] break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-[#E2E8F0] rounded-[5px] bg-[#F8FAFC] p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#475569] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mahmood"
                    className="w-full bg-white border border-[#E2E8F0] rounded-[5px] px-4 py-3 text-sm focus:outline-none focus:border-[#0B5EB9]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#475569] mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    className="w-full bg-white border border-[#E2E8F0] rounded-[5px] px-4 py-3 text-sm focus:outline-none focus:border-[#0B5EB9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#475569] mb-2">
                    Project Category
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-[#E2E8F0] rounded-[5px] px-4 py-3 text-sm focus:outline-none focus:border-[#0B5EB9]"
                  >
                    <option>Residential Construction</option>
                    <option>Commercial Building / Plaza</option>
                    <option>Showroom &amp; Workshop</option>
                    <option>Civil Engineering Works</option>
                    <option>Architecture &amp; Design</option>
                    <option>Interior Design</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#475569] mb-2">
                    Site Location (Karachi)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. DHA, Clifton, Gulshan, Gadap"
                    className="w-full bg-white border border-[#E2E8F0] rounded-[5px] px-4 py-3 text-sm focus:outline-none focus:border-[#0B5EB9]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#475569] mb-2">
                  Project Scope / Plot Size
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Briefly describe plot size (sq. yds / sq. ft), grey structure or turnkey requirement..."
                  className="w-full h-32 resize-none overflow-y-auto rounded-[5px] bg-white border border-[#E2E8F0] px-4 py-3 text-sm focus:outline-none focus:border-[#0B5EB9]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2F6B] text-white px-7 py-3.5 text-sm font-semibold rounded-[5px] hover:bg-[#0B5EB9] transition-colors"
              >
                Send Inquiry via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
