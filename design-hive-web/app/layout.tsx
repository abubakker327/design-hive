import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Design Hive | Creative Design Studio",
  description: "We build brands, websites & digital growth engines for businesses & startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "bg-black text-white antialiased selection:bg-white/20 selection:text-white")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
