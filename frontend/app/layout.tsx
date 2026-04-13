import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bahari Group | Inovasi Kelautan & Perikanan Terpadu",
  description: "Bahari Group menyediakan solusi terpadu untuk eksosistem kelautan dan perikanan yang produktif dan lestari melalui inovasi teknologi dan pemberdayaan nelayan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}