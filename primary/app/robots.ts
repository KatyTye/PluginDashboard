import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/profile",
				"/profile/*",
				"/files/*",
				"/images/*"
			]
		},
		sitemap: "https://sessentials.org/sitemap.xml"
	}
}