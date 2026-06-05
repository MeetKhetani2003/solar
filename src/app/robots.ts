import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schemas";

/**
 * Dynamic robots.txt for Radha Solar.
 * Next.js automatically serves this at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/", "/cdn-cgi/"],
      },
      {
        // Block AI scrapers from training data
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
