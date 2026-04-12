import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oriva Foundation - Building Impactful Digital Solutions",
  description: "Oriva Foundation focuses on building Islamic applications and creating community-driven projects that deliver impactful digital solutions for society.",
  keywords: ["nonprofit", "Islamic", "technology", "community", "digital solutions"],
  authors: [{ name: "Oriva Foundation" }],
  openGraph: {
    title: "Oriva Foundation - Building Impactful Digital Solutions",
    description: "Creating impactful digital solutions for the community",
    url: "https://oriva.org",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-black antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
