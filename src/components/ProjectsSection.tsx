"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/company";

const CATEGORIES: Array<"All" | ProjectItem["category"]> = [
  "All",
  "Commercial & Auto",
  "Residential",
  "Institutional",
  "Civil Engineering",
];

export default function ProjectsSection() {
  const [active, setActive] = useState<"All" | ProjectItem["category"]>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === active);

  return (
    <section id="projects" className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B5EB9]">
              Executed Portfolio
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] mt-2">
              Selected Projects in Karachi
            </h2>
          </div>

          <div className="flex flex-wrap border border-[#E2E8F0] rounded-[5px] overflow-hidden bg-white">
            {CATEGORIES.map((category) => {
              const isSelected = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={
                    "px-4 py-2.5 text-xs font-medium transition-colors border-r last:border-r-0 border-[#E2E8F0] " +
                    (isSelected
                      ? "bg-[#0B2F6B] text-white"
                      : "bg-white text-[#475569] hover:text-[#0B2F6B]")
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-[#E2E8F0] rounded-[5px] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#E2E8F0] bg-[#F1F5F9]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`${project.title} image placeholder`}
                    className="flex h-full flex-col items-center justify-center gap-3 text-[#64748B]"
                  >
                    <ImageIcon className="w-8 h-8" aria-hidden="true" />
                    <span className="font-mono text-xs uppercase tracking-wider">
                      Project image coming soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#0B5EB9]">
                    <span>{project.category}</span>
                    <span className="text-[#64748B]">{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
