import { constServicesPage } from "@/constants/cs_main";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://construction-skapec.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://construction-skapec.vercel.app/services",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://construction-skapec.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://construction-skapec.vercel.app/careers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://construction-skapec.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...constServicesPage.services.servicesData.map((post: any) => ({
      url: `https://construction-skapec.vercel.app/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "never" as any,
      priority: 0.5,
    })),
  ];
}
