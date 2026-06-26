import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  {
    id: 9,
    image: "/product_image/9.jpeg",
    name: "Hydrating Face Wash for Fresh Daily Glow",
    pack: "1 tube (100 g)",
    price: 145,
    originalPrice: 190,
    discountText: "45 OFF",
    tag: "Oil Control",
    rating: 4.5,
    reviews: "3.8k",
  },
  {
    id: 10,
    image: "/product_image/10.jpeg",
    name: "Soft Touch Body Lotion for Dry Skin Care",
    pack: "1 bottle (400 ml)",
    price: 299,
    originalPrice: 360,
    discountText: "61 OFF",
    tag: "Deep Moisture",
    rating: 4.6,
    reviews: "8.4k",
  },
  {
    id: 11,
    image: "/product_image/11.jpeg",
    name: "Refreshing Shower Gel with Long Lasting Fragrance",
    pack: "1 bottle (250 ml)",
    price: 220,
    originalPrice: 275,
    discountText: "55 OFF",
    tag: "Fresh Feel",
    rating: 4.7,
    reviews: "5.2k",
  },
  {
    id: 12,
    image: "/product_image/12.jpeg",
    name: "Daily Care Toothpaste for Strong Teeth",
    pack: "1 pc (150 g)",
    price: 135,
    originalPrice: 165,
    discountText: "30 OFF",
    tag: "Cavity Care",
    rating: 4.8,
    reviews: "18.6k",
  },
  {
    id: 13,
    image: "/product_image/13.jpeg",
    name: "Antibacterial Hand Wash Refill Pack",
    pack: "1 pouch (750 ml)",
    price: 189,
    originalPrice: 240,
    discountText: "51 OFF",
    tag: "Germ Protect",
    rating: 4.6,
    reviews: "7.9k",
  },
  {
    id: 14,
    image: "/product_image/14.jpeg",
    name: "Premium Dishwash Liquid with Lemon Power",
    pack: "1 bottle (500 ml)",
    price: 160,
    originalPrice: 210,
    discountText: "50 OFF",
    tag: "Grease Clean",
    rating: 4.7,
    reviews: "9.1k",
  },
  {
    id: 15,
    image: "/product_image/15.jpeg",
    name: "Kitchen Cleaner Spray for Tough Stains",
    pack: "1 pc (500 ml)",
    price: 249,
    originalPrice: 315,
    discountText: "66 OFF",
    tag: "Quick Clean",
    rating: 4.5,
    reviews: "2.4k",
  },
  {
    id: 16,
    image: "/product_image/16.jpeg",
    name: "Floor Cleaner with Floral Fragrance",
    pack: "1 bottle (1 L)",
    price: 210,
    originalPrice: 260,
    discountText: "50 OFF",
    tag: "Floral Fresh",
    rating: 4.6,
    reviews: "6.7k",
  },
  {
    id: 17,
    image: "/product_image/17.jpeg",
    name: "Laundry Detergent Powder for Bright Clothes",
    pack: "1 pack (1 kg)",
    price: 175,
    originalPrice: 230,
    discountText: "55 OFF",
    tag: "Bright Wash",
    rating: 4.7,
    reviews: "14.3k",
  },
  {
    id: 18,
    image: "/product_image/18.jpeg",
    name: "Liquid Detergent for Top Load Washing Machine",
    pack: "1 bottle (1 L)",
    price: 255,
    originalPrice: 320,
    discountText: "65 OFF",
    tag: "Machine Wash",
    rating: 4.6,
    reviews: "10.5k",
  },
  {
    id: 19,
    image: "/product_image/19.jpeg",
    name: "Fabric Conditioner with Fresh Bloom Scent",
    pack: "1 bottle (860 ml)",
    price: 275,
    originalPrice: 350,
    discountText: "75 OFF",
    tag: "Soft Clothes",
    rating: 4.8,
    reviews: "4.9k",
  },
  {
    id: 20,
    image: "/product_image/20.jpeg",
    name: "Bathroom Cleaner for Shine and Hygiene",
    pack: "1 bottle (500 ml)",
    price: 199,
    originalPrice: 260,
    discountText: "61 OFF",
    tag: "Hygiene Care",
    rating: 4.5,
    reviews: "3.1k",
  },
  {
    id: 21,
    image: "/product_image/21",
    name: "Baby Care Gentle Wipes with Soft Texture",
    pack: "1 pack (80 pcs)",
    price: 185,
    originalPrice: 245,
    discountText: "60 OFF",
    tag: "Baby Safe",
    rating: 4.7,
    reviews: "11.2k",
  },
  {
    id: 22,
    image: "/product_image/22.jpeg",
    name: "Refreshing Deo Spray for All Day Confidence",
    pack: "1 pc (150 ml)",
    price: 299,
    originalPrice: 399,
    discountText: "100 OFF",
    tag: "Long Stay",
    rating: 4.4,
    reviews: "2.8k",
  },
  {
    id: 23,
    image: "/product_image/23.jpeg",
    name: "Men Grooming Face Cream with Matte Finish",
    pack: "1 tube (50 g)",
    price: 155,
    originalPrice: 210,
    discountText: "55 OFF",
    tag: "Matte Look",
    rating: 4.5,
    reviews: "1.9k",
  },
  {
    id: 24,
    image: "/product_image/24.jpeg",
    name: "Daily Wellness Soap Bar Family Pack",
    pack: "4 pcs (125 g each)",
    price: 195,
    originalPrice: 260,
    discountText: "65 OFF",
    tag: "Family Pack",
    rating: 4.8,
    reviews: "21.4k",
  },
];

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <article className="group w-[8.5rem] shrink-0">
      <div className="relative aspect-square h-[9rem] w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
        <Image
          alt={product.name}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-[7px] border-r-[3px] border-b-[3px] border-[#0d5f2a] bg-[#238b3f] px-[7px] py-1 pt-2 text-base leading-none font-bold text-white">
            ৳{product.price}
          </span>
          <span className="text-sm text-slate-500 line-through">
            ৳{product.originalPrice}
          </span>
        </div>

        <div className="wrapper mt-[-4px] flex items-center gap-3">
          <p className="mt-2 shrink-0 whitespace-nowrap text-xs leading-none font-bold uppercase tracking-normal text-[#238b3f]">
            ৳{product.discountText}
          </p>
          <div className="mt-2 h-px w-full bg-[repeating-linear-gradient(to_right,#cbd5e1_0_6px,transparent_6px_12px)]" />
        </div>

        <h3 className="mt-1 min-h-17 font-semibold text-slate-900 line-clamp-3 text-sm  ">
          {product.name}
        </h3>

        <p className="text-xs text-slate-500">{product.pack}</p>

        <div className="mt-3 inline-flex rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700">
          {product.tag}
        </div>

        <div className="mt-3 flex items-center gap-1 text-xs text-slate-600">
          <Star className="size-3 fill-green-700 text-green-700" />
          <span className="font-semibold leading-0 mt-1 text-green-700">
            {product.rating}
          </span>
          <span className="leading-0 mt-1">({product.reviews})</span>
        </div>
      </div>
    </article>
  );
}

export function HomepageFeaturedProducts() {
  return (
    <section className="mx-auto mt-14 w-full max-w-300 grid grid-cols-8 gap-2 gap-y-10">
      {featuredProducts.map((product) => (
        <Link href={`/product/1`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </section>
  );
}
