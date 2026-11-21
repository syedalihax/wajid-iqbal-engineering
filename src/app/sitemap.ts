import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wajidiqbalengineering.pk",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["about", "services", "projects", "contact"].map((page) => ({
      url: `https://wajidiqbalengineering.pk/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
