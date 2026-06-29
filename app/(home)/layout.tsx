import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import TechBackground from "@/components/Animation/TechBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabal Khadka",
  description:
    "Nabal Khadka – Frontend developer specializing in React & Next.js. Explore responsive, scalable web apps in my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#070718] min-h-screen relative">
          {/* Animated tech background — shared by all pages */}
          <TechBackground />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070718]/40 via-transparent to-[#070718]/50 pointer-events-none z-0" />
          <Navbar />
          <div className="relative z-10 min-h-[calc(100vh-97px)] pt-[97px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
