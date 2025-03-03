import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/sections/Header/Header";
import VerticalTilesWrapper from "@/components/VerticleTilesWrapper";
import { AppProvider } from "@/context/appProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  sections,
}: Readonly<{
  children: React.ReactNode;
  sections: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <AppProvider>
          <div className="relative">
            {children} {/* Main Page */}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
