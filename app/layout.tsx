import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SingleSpeed - Premium Automotive Parts",
  description: "High-quality automotive components for enthusiasts. Temperature gauges, performance parts, and custom solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
