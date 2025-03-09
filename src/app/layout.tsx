import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/constants/seo.constants";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "yet-another-react-lightbox/styles.css";

import "swiper/css";
import "swiper/css/pagination";
import MainSection from "@/components/section/main/MainSection";
import React from "react";
import ScrollPage from "@/app/scrollPage/ScrollPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
    >
    <ScrollPage />
    <Header />
    <main className="flex-1">
      <MainSection />
      {children}
    </main>
    <Footer />
    </body>
    </html>
  );
}
