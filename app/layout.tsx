import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mayaskara Bhat | Student Portfolio",
    template: "%s | Mayaskara Bhat",
  },
  description: siteConfig.description,
  keywords: ["Mayaskara Bhat", "Student Portfolio", "Chess", "Technology", "3 Stack Academy", "Sri Venkatramana P.U. College", "Kundapura"],
  authors: [{ name: "Mayaskara Bhat" }],
  creator: "Mayaskara Bhat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayaskarabhat.com",
    title: "Mayaskara Bhat | Student Portfolio",
    description: "One student. One journey. Every move matters.",
    siteName: "Mayaskara Bhat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayaskara Bhat | Student Portfolio",
    description: "One student. One journey. Every move matters.",
  },
  metadataBase: new URL("http://localhost:3000"), // TODO: Replace with production URL when deployed
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans relative`}>
        {/* Animated Grid */}
        <div className="fixed inset-0 chess-grid pointer-events-none z-[-1]" />
        
        {/* Floating Background Elements for Depth */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-5 blur-[2px]">
          {/* Subtle Rook Silhouette */}
          <svg className="absolute top-[10%] left-[5%] w-64 h-64 text-ivory/30 rotate-12" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 20 80 L 80 80 L 80 70 L 70 70 L 70 40 L 80 40 L 80 20 L 65 20 L 65 30 L 55 30 L 55 20 L 45 20 L 45 30 L 35 30 L 35 20 L 20 20 L 20 40 L 30 40 L 30 70 L 20 70 Z" />
          </svg>
          
          {/* Subtle Bishop Silhouette */}
          <svg className="absolute bottom-[20%] right-[10%] w-96 h-96 text-ivory/30 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 50 10 C 50 10 30 40 30 60 C 30 70 40 80 50 80 C 60 80 70 70 70 60 C 70 40 50 10 50 10 Z M 20 90 L 80 90 L 80 100 L 20 100 Z" />
          </svg>
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
