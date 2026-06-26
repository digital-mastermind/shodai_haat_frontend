import { notFound } from "next/navigation";

import { ProductDetails } from "./ProductDetails";
import { getProductById, productCatalog } from "./product-data";

export function generateStaticParams() {
  return productCatalog.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
