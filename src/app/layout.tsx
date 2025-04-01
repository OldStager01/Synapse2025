import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "SYNAPSE 2025 | MIBCS",
  description:
    "Flagship event of MIBCS club at K.K Wagh Institute Of Engineering Education and Research, Nashik",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black overflow-hidden`}
      >
        <AppProvider>
          <div className="relative">
            {children} {/* Main Page */}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
