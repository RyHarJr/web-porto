import { MetadataRoute } from "next"

const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN_URL,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
