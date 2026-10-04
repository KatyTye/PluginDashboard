import HeaderComponent from "@/src/components/ui/Header";
import FooterComponent from "@/src/components/ui/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "SEssentials",
	description: "Created by KatyTyi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			<body>
				<HeaderComponent />
				<main className="page-content flex flex-col p-4 md:p-20 pt-10 pb-10">
					{children}
				</main>
				<FooterComponent />
			</body>
		</html>
	);
}