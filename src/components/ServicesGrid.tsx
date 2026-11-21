import { SERVICES } from "@/data/company";

export default function ServicesGrid() {
  return (
    <section id="services" className="border-b border-[#E2E8F0] bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B5EB9]">
            Core Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] mt-2">
            End-to-End Engineering, Architecture &amp; Construction Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.code}
              className="border border-[#E2E8F0] p-8 bg-white rounded-[5px] hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-medium text-[#0B5EB9]">
                  {service.code}
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mt-3">
                  {service.description}
                </p>
              </div>

              <ul className="mt-6 pt-4 border-t border-[#F1F5F9] space-y-1.5">
                {service.scope.map((point) => (
                  <li
                    key={point}
                    className="text-xs font-mono text-[#475569] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-[1px] bg-[#0B5EB9] inline-block" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
