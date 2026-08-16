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
  title: "SEssentials",
  description: "Created by KatyTyi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <HeaderComponent />
        <main className="page-content flex flex-col p-4 md:p-20 pt-10 pb-10">
          <Suspense fallback={<LoadingComponent />}>
            {children}
          </Suspense>
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}