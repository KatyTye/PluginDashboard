import type { Metadata, MetadataRoute } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: { default: "SEssentials", template: "%s | SEssentials" },
	description: "Created by KatyTyi",
	alternates: { canonical: "/" },
	openGraph: {
		title: "SEssentials: Modern Minecraft Plugin",
		description: "All-in-one Bukkit essentials plugin built for flexibility, performance, and style. Elevate your community with enterprise-grade server management.",
		url: "https://sessentials.org",
		siteName: "SEssentials",
		images: ["/images/frontpage.jpg"],
		type: "website"
	}
}

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			{children}
		</html>
	);
}