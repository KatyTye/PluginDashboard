import type { Metadata } from "next";
import "./globals.css";

import HeaderComponent from "@/src/components/ui/header";
import FooterComponent from "@/src/components/ui/footer";

export const metadata: Metadata = {
	title: "SEssentials",
	description: "Customize your plugin for your server.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

	return (
		<html lang="en" className="h-full antialiased" >
			<body className="h-dvh flex flex-col font-medium">
				<HeaderComponent loggedIn={true} />
				{children}
				<FooterComponent />
			</body>
		</html>
	);
}
