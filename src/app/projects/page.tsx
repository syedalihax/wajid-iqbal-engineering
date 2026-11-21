import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Selected Projects",
  description:
    "Browse residential, commercial, institutional, and civil engineering projects in Karachi.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection />
    </main>
  );
}