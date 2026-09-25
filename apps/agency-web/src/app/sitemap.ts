import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corfudigital.com";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "services/hotel-websites", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "services/villa-booking-engines", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "services/boat-tours-transfers", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "services/digital-transformation", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "case-studies", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const elPath = route.path ? `/el/${route.path}` : "/el";
    const enPath = route.path ? `/en/${route.path}` : "/en";

    // Greek Entry
    entries.push({
      url: `${baseUrl}${elPath}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          el: `${baseUrl}${elPath}`,
          en: `${baseUrl}${enPath}`,
          "x-default": `${baseUrl}${elPath}`,
        },
      },
    });

    // English Entry
    entries.push({
      url: `${baseUrl}${enPath}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          el: `${baseUrl}${elPath}`,
          en: `${baseUrl}${enPath}`,
          "x-default": `${baseUrl}${elPath}`,
        },
      },
    });
  }

  return entries;
}
