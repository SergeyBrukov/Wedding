import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono, Urbanist, Great_Vibes } from "next/font/google";
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
import { ToastContainer } from "react-toastify";
// import localFont from "next/font/local";

// const shelleyScript = localFont({
//   src: "./fonts/Shelley-AndanteScript.ttf",
//   display: "swap",
// });

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"], variable: "--font-great-vibes" });
const avenir = Urbanist({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-avenir" });

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
      className={`${avenir.className} ${greatVibes.className} antialiased flex flex-col min-h-screen`}
    >
    <ScrollPage />
    <Header />
    <main className="flex-1">
      <MainSection />
      {children}
    </main>
    <Footer />
    <ToastContainer />
    </body>
    </html>
  );
}
