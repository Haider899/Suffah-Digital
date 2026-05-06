import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const amiri = Amiri({ weight: ["400", "700"], subsets: ["arabic", "latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Suffah Digital | Learn Quran Online",
  description: "Professional online Islamic education platform offering comprehensive courses in Tajweed, Hifz, and Arabic for all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${amiri.variable}`}>
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
