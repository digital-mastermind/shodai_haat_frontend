import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  absoluteUrl,
  createPageMetadata,
  jsonLdScript,
  siteConfig,
} from "@/lib/seo";
import { ProductDetails } from "./ProductDetails";
import { getProductById, productCatalog } from "./product-data";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return productCatalog.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${product.name} - ${product.pack}`;
  const description = `${product.description} Shop ${product.brand} ${product.name} online from ${siteConfig.name}.`;
  const productPath = `/product/${product.id}`;
  const image = product.images[0] ?? siteConfig.defaultImage;

  return createPageMetadata({
    title,
    description,
    path: productPath,
    image,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const productUrl = absoluteUrl(`/product/${product.id}`);
  const productImages = product.images.map((image) => absoluteUrl(image));
  const reviewCount = parseReviewCount(product.reviews);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: productImages,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.categoryTrail.join(" > "),
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: siteConfig.currency,
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...product.categoryTrail.map((category, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: category,
      })),
      {
        "@type": "ListItem",
        position: product.categoryTrail.length + 2,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(productJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(breadcrumbJsonLd),
        }}
      />
      <ProductDetails product={product} />
    </>
  );
}

function parseReviewCount(reviews: string) {
  const normalized = reviews.trim().toLowerCase();
  const value = Number.parseFloat(normalized.replace(/[^0-9.]/g, ""));

  if (Number.isNaN(value)) {
    return 0;
  }

  if (normalized.endsWith("k")) {
    return Math.round(value * 1000);
  }

  if (normalized.endsWith("m")) {
    return Math.round(value * 1000000);
  }

  return Math.round(value);
}
