import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessInfo } from "@/data/business-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: businessInfo.name,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.hero.description,
  metadataBase: new URL("https://wemanageconsultancy.com"),
  openGraph: {
    title: businessInfo.name,
    description: businessInfo.hero.description,
    type: "website",
    siteName: businessInfo.name,
  },
  icons: {
    icon: "/images/background-remove-logo-original.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
