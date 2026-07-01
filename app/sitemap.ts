import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { productCatalog } from "./(product)/product/[id]/product-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...productCatalog.map((product) => ({
      url: absoluteUrl(`/product/${product.id}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: product.images.map((image) => absoluteUrl(image)),
    })),
  ];
}
