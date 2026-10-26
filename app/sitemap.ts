import type { MetadataRoute } from "next";

const BASE_URL = "https://syed-dev-portfolios.vercel.app";

// Add your actual project slugs here.
// Only include projects that have published detail pages.
const projectSlugs: string[] = [
  // "ntca",
  // "amway",
  // "hdfc-sky",
  "aruba-ai-assistant",
  "personal-developer-portfolio",
  "ntca-secure-file-sharing",
  "amway-ecommerce-platform",
  "hdfc-sky-trading-platform",
  "one-muthoot-web-application",
  "jeeves-admin-control-panel",
  "chicos-ecommerce-platform",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/skills`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/aruba-ai`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic project detail pages
  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${encodeURIComponent(slug)}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
