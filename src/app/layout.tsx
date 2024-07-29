import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import CookieConsent from "@/components/shared/CookieNotice";
import { constCookieBanner } from "@/constants/cs_main";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Skapec - stavební firma",
  description: "Projekt - stavební firma umístěná v české republice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={poppins.className}>
        {children}
        <Footer />
        <CookieConsent content={constCookieBanner} />
      </body>
    </html>
  );
}
