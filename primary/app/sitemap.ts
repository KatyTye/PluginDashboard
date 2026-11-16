import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://sessentials.org/",
			changeFrequency: "yearly",
			lastModified: "2026-11-14",
			priority: 1
		},
		{
			url: "https://sessentials.org/downloads",
			changeFrequency: "monthly",
			lastModified: "2026-11-14",
			priority: 0.9
		},
		{
			url: "https://sessentials.org/docs",
			changeFrequency: "monthly",
			lastModified: "2026-11-14",
			priority: 0.5
		},
		{
			url: "https://sessentials.org/support",
			changeFrequency: "never",
			lastModified: "2026-11-14",
			priority: 0.75
		},
		{
			url: "https://sessentials.org/terms",
			changeFrequency: "never",
			lastModified: "2026-11-14",
			priority: 0.1
		}
	]
}
