import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import AnimatedCursor from "@/components/animations/AnimatedCursor";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        {/* Animated background for entire site */}
        <AnimatedBackground particleCount={40} />

        {/* Custom animated cursor */}
        <AnimatedCursor />

        <div className="relative z-20">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
