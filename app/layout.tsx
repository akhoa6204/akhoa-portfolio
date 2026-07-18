import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InitialLoader } from "@/components/ui/initial-loader";
import { Header } from "@/components/home-page/header";
import { Footer } from "@/components/home-page/footer";
import { getBranchData } from "@/lib/portfolio-data";
import { Profile } from "@/types/portfolio";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AKhoaIsMe - Full-stack Developer",
    template: "%s | AKhoaIsMe",
  },
  description:
    "Portfolio of Phan Nguyễn Anh Khoa, a Full-stack Developer building maintainable web applications.",
  keywords: [
    "Phan Nguyễn Anh Khoa",
    "Full-stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Spring Boot Developer",
    "Da Nang Developer",
  ],
  authors: [{ name: "Phan Nguyễn Anh Khoa" }],
  creator: "Phan Nguyễn Anh Khoa",
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070a",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const profile = await getBranchData<Profile>("profile");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header profile={profile} />
        <InitialLoader />
        {children}
        <Footer name={profile.name} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
