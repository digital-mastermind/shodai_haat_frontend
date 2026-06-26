export type ProductDetail = {
  id: string;
  slug: string;
  brand: string;
  categoryTrail: string[];
  name: string;
  pack: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: string;
  deliveryBadges: string[];
  highlightRows: Array<{ label: string; value: string }>;
  description: string;
  images: string[];
};

export const productCatalog: ProductDetail[] = [
  {
    id: "1",
    slug: "streax-professional-vitariche-gloss-hair-serum",
    brand: "Streax Professional",
    categoryTrail: ["Beauty", "Hair Care", "Serums"],
    name: "Streax Professional Vitariche Gloss Hair Serum",
    pack: "1 pc (50 ml)",
    price: 334,
    originalPrice: 355,
    rating: 4.7,
    reviews: "15.2k",
    deliveryBadges: ["Same Day Exchange", "Fast Delivery"],
    description:
      "Lightweight hair serum that smooths flyaways, adds shine, and leaves a salon-soft finish without feeling greasy.",
    highlightRows: [
      { label: "Brand", value: "Streax Professional" },
      { label: "Product Type", value: "Hair Serum" },
      { label: "Key Features", value: "Adds gloss, tames frizz, and keeps hair silky throughout the day." },
      { label: "Hair Type", value: "Normal to dry hair" },
      { label: "Finish", value: "Smooth & glossy" },
      { label: "Usage", value: "Post-wash styling and daily touch-ups" },
    ],
    images: [
      "/product_image/1.jpeg",
      "/product_image/4.jpeg",
      "/product_image/5.jpeg",
      "/product_image/3.jpeg",
      "/product_image/7.jpeg",
    ],
  },
  {
    id: "2",
    slug: "premium-hair-care-serum-soft-finish",
    brand: "Shodai Select",
    categoryTrail: ["Beauty", "Hair Care", "Serums"],
    name: "Premium Hair Care Serum with Soft Finish",
    pack: "1 pc (100 ml)",
    price: 198,
    originalPrice: 260,
    rating: 4.8,
    reviews: "40.3k",
    deliveryBadges: ["Easy Return", "Fast Delivery"],
    description:
      "A nourishing everyday serum formulated for soft texture, shine, and manageable hair in humid weather.",
    highlightRows: [
      { label: "Brand", value: "Shodai Select" },
      { label: "Product Type", value: "Hair Serum" },
      { label: "Key Features", value: "Soft finish, anti-frizz support, and lightweight feel." },
      { label: "Hair Type", value: "All hair types" },
      { label: "Volume", value: "100 ml" },
      { label: "Used For", value: "Styling and daily nourishment" },
    ],
    images: [
      "/product_image/2",
      "/product_image/6.jpeg",
      "/product_image/8.jpeg",
      "/product_image/10.jpeg",
      "/product_image/12.jpeg",
    ],
  },
];

export function getProductById(id: string) {
  return productCatalog.find((product) => product.id === id);
}
