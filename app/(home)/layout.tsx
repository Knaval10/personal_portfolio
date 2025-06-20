import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";

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
        <div className="bg-[#0F103F] min-h-screen">
          <Navbar />
          <div className="min-h-[calc(100vh-97px)] pt-[97px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
