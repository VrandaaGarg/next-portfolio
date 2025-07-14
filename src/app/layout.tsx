import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import Script from "next/script";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vranda Garg - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* Animated background for entire site */}
        <AnimatedBackground particleCount={40} />

        {/* Custom animated cursor */}

        <div className="relative z-20">
          <Navbar />
          {children}
          <Footer />
        </div>

        <Script
          defer
          src="https://stats.ayush-sharma.in/script.js"
          data-website-id="2f059d1b-0567-4314-960f-1dcc56c8eb19"
        />
      </body>
    </html>
  );
}
