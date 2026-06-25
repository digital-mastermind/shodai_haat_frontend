import { Star } from "lucide-react";
import Image from "next/image";

type ProductItem = {
  id: number;
  image: string;
  name: string;
  pack: string;
  price: number;
  originalPrice: number;
  discountText: string;
  tag: string;
  rating: number;
  reviews: string;
  badge?: string;
};

const featuredProducts: ProductItem[] = [
  {
    id: 1,
    image: "/product_image/1.jpeg",
    name: "Streax Professional Vitariche Gloss Hair Serum",
    pack: "1 pc (50 ml)",
    price: 334,
    originalPrice: 355,
    discountText: "21 OFF",
    tag: "Smooth & Silky",
    rating: 4.7,
    reviews: "15.2k",
    badge: "New",
  },
  {
    id: 2,
    image: "/product_image/2",
    name: "Premium Hair Care Serum with Soft Finish",
    pack: "1 pc (100 ml)",
    price: 198,
    originalPrice: 260,
    discountText: "62 OFF",
    tag: "Fresh & Fragrant",
    rating: 4.8,
    reviews: "40.3k",
  },
  {
    id: 3,
    image: "/product_image/3.jpeg",
    name: "Daily Use Shampoo for Strong and Healthy Hair",
    pack: "1 bottle (340 ml)",
    price: 274,
    originalPrice: 540,
    discountText: "266 OFF",
    tag: "Hair Repair",
    rating: 4.7,
    reviews: "13.8k",
  },
  {
    id: 4,
    image: "/product_image/4.jpeg",
    name: "Refreshing Hair Mist for Everyday Styling",
    pack: "1 pc (120 ml)",
    price: 357,
    originalPrice: 420,
    discountText: "63 OFF",
    tag: "Long Lasting",
    rating: 4.7,
    reviews: "1.2k",
    badge: "Hot",
  },
  {
    id: 5,
    image: "/product_image/5.jpeg",
    name: "Nourishing Conditioner with Smooth Texture",
    pack: "1 bottle (250 ml)",
    price: 198,
    originalPrice: 430,
    discountText: "232 OFF",
    tag: "Colour Protect",
    rating: 4.7,
    reviews: "6.4k",
  },
  {
    id: 6,
    image: "/product_image/6.jpeg",
    name: "Salon Care Hair Cream for Soft Manageable Hair",
    pack: "1 pack (4 kg)",
    price: 650,
    originalPrice: 855,
    discountText: "205 OFF",
    tag: "Salon Finish",
    rating: 4.6,
    reviews: "1.6k",
  },
  {
    id: 7,
    image: "/product_image/7.jpeg",
    name: "Professional Hair Oil Refill for Tough Dryness",
    pack: "1 pc (1 L)",
    price: 235,
    originalPrice: 299,
    discountText: "64 OFF",
    tag: "Stain Removal",
    rating: 4.7,
    reviews: "12.1k",
  },
  {
    id: 8,
    image: "/product_image/8.jpeg",
    name: "Gentle Wash Liquid for Daily Hair Care Routine",
    pack: "1 pc (950 g)",
    price: 179,
    originalPrice: 189,
    discountText: "10 OFF",
    tag: "Gentle Care",
    rating: 4.6,
    reviews: "1.1k",
  },
];

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <article className="group w-[8.5rem] shrink-0">
      <div className="relative aspect-square h-[9rem] w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
        <Image
          alt={product.name}
          className="object-cover"
          fill
          sizes="173px"
          src={product.image}
        />

        <button
          className="text-[14px] absolute bottom-1 right-1 rounded-lg border-2 h-9 flex items-center justify-center border-pink-500 bg-white px-3 py-2 pb-1 cursor-pointer font-bold text-pink-500 "
          type="button"
        >
          ADD
        </button>
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <span className="rounded-[0.55rem] bg-green-600 px-2.5 py-1 text-[1.05rem] leading-none font-bold text-white">
            ৳{product.price}
          </span>
          <span className="text-base font-semibold text-slate-400 line-through">
            ৳{product.originalPrice}
          </span>
        </div>

        <p className="mt-1 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-green-600">
          ৳{product.discountText}
        </p>

        <div className="mt-2 border-t border-dashed border-slate-200" />

        <h3 className="mt-3 min-h-18 text-[1.02rem] leading-7 font-semibold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-1 text-[0.95rem] text-slate-500">{product.pack}</p>

        <div className="mt-3 inline-flex rounded-lg bg-cyan-50 px-2.5 py-1 text-[0.88rem] font-medium text-cyan-700">
          {product.tag}
        </div>

        <div className="mt-3 flex items-center gap-1 text-[0.92rem] text-slate-600">
          <Star className="size-4 fill-green-500 text-green-500" />
          <span className="font-semibold text-green-700">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
      </div>
    </article>
  );
}

export function HomepageFeaturedProducts() {
  return (
    <section className="mx-auto mt-14 w-full max-w-300 grid grid-cols-8 gap-2 ">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
