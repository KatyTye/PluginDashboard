import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "SEssentials",
	description: "Created by KatyTyi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			{children}
		</html>
	);
}