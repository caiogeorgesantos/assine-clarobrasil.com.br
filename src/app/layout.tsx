import { Footer } from "@/components/footer";
import { Hire } from "@/components/hire";
import { HowItWorks } from "@/components/how-it-works";
import { NavProfile } from "@/components/nav-profile";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/constants";
import { amx } from "@/fonts/amx";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "claro planos",
    "planos claro",
    "claro internet",
    "internet claro",
    "claro telefone",
    "telefone claro",
    "claro tv",
    "tv claro",
    "claro celular",
    "celular claro",
    "claro para empresas",
    "planos claro para empresas",
    "claro planos empresariais",
    "planos empresariais claro",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  robots: "index, follow",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image-1200x630.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
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
        className={`${amx.variable} antialiased bg-[#f8f8f8] text-[#1f1d1d]`}
      >
        <NavProfile />
        {children}
        <Hire />
        <HowItWorks />
        <Footer />
      </body>
    </html>
  );
}
