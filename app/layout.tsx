import HeaderComponent from "@/components/layouts/HeaderComponent";
import { HomepageFooter } from "@/components/layouts/HomepageFooter";
import { siteConfig } from "@/lib/seo";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ttNormsPro = localFont({
  src: [
    {
      path: "../public/fonts/TTNormsPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TTNormsPro-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/TTNormsPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-norms-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Online Grocery and Essentials Shopping`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Online Grocery and Essentials Shopping`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultImage,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Online Grocery and Essentials Shopping`,
    description: siteConfig.description,
    images: [siteConfig.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ttNormsPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <HeaderComponent />
        {children}
        <HomepageFooter />
      </body>
    </html>
  );
}
