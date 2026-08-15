import { Geist, Geist_Mono } from "next/font/google";
import LoadingComponent from "@/components/Loading";
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEssentials Primary",
  description: "Created by KatyTyi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <HeaderComponent />
        <Suspense fallback={<LoadingComponent />}>
          {children}
        </Suspense>
        <FooterComponent />
      </body>
    </html>
  );
}