import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corfudigital.com";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "services/hotel-websites", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "services/villa-booking-engines", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "services/boat-tours-transfers", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "services/digital-transformation", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "case-studies", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "κατασκευή-ιστοσελίδων-κέρκυρα", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const elPath = route.path ? `/el/${route.path}` : "/el";
    const enRoute = route.path === "κατασκευή-ιστοσελίδων-κέρκυρα" ? "website-development-corfu" : route.path;
    const enPath = enRoute ? `/en/${enRoute}` : "/en";

    // Greek Entry
    entries.push({
      url: `${baseUrl}${elPath}`,
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
