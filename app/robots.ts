import { MetadataRoute } from "next"

const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: DOMAIN_URL + "/sitemap.xml",
  }
}
