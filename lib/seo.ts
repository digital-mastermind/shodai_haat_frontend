import type { Metadata } from "next";

export const siteConfig = {
  name: "Shodai Haat",
  url: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shodaihaat.com",
  ),
  description:
    "Shop groceries, beauty, personal care, baby care, and household essentials online from Shodai Haat with fast delivery and everyday value.",
  keywords: [
    "Shodai Haat",
    "online grocery shopping",
    "grocery delivery",
    "beauty products",
    "personal care",
    "household essentials",
    "Bangladesh ecommerce",
  ],
  locale: "en_US",
  currency: "BDT",
  defaultImage: "/logos/shodai_haat_logo.png",
};

export function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, siteConfig.url)
    .toString();
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.defaultImage,
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
