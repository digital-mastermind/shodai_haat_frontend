"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Heart, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import type { ProductDetail } from "./product-data";
import { HomepageFeaturedProducts } from "@/app/(homepage)/components/HomepageFeaturedProducts";

type ProductDetailsProps = {
  product: ProductDetail;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const heroBottom = heroRef.current?.offsetTop ?? 240;
    setHasScrolledPastHero(latest > heroBottom + 120);
  });

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    updateSelectedIndex();
    carouselApi.on("select", updateSelectedIndex);
    carouselApi.on("reInit", updateSelectedIndex);

    return () => {
      carouselApi.off("select", updateSelectedIndex);
      carouselApi.off("reInit", updateSelectedIndex);
    };
  }, [carouselApi]);

  const discountAmount = product.originalPrice - product.price;

  return (
    <>
      <main className="mx-auto w-full max-w-300 px-4 pb-28 pt-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          {product.categoryTrail.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-slate-300">›</span>
              <span>{item}</span>
            </span>
          ))}
          <span className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="text-slate-300">›</span>
            {product.name}
          </span>
        </nav>

        <section
          ref={heroRef}
          className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] relative"
        >
          <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-5 h-max sticky top-5">
            <div className="grid gap-4 lg:grid-cols-[5.5rem_minmax(0,1fr)]">
              <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={cn(
                      "relative h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-slate-50 transition",
                      selectedIndex === index
                        ? "border-slate-900 shadow-[0_0_0_2px_rgba(15,23,42,0.08)]"
                        : "border-slate-200 hover:border-slate-400"
                    )}
                  >
                    <Image
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="object-cover"
                      fill
                      sizes="80px"
                      src={image}
                    />
                  </button>
                ))}
              </div>

              <div className="order-1 lg:order-2">
                <Carousel
                  setApi={setCarouselApi}
                  opts={{ loop: true, align: "start" }}
                  className="relative"
                >
                  <CarouselContent className="ml-0">
                    {product.images.map((image) => (
                      <CarouselItem key={image} className="pl-0">
                        <div className="relative aspect-square overflow-hidden rounded-md border border-slate-200 bg-[#f8fafc]">
                          <Image
                            alt={product.name}
                            className="object-contain "
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 640px"
                            src={image}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3 border-slate-200 bg-white shadow-sm cursor-pointer" />
                  <CarouselNext className="right-3 border-slate-200 bg-white shadow-sm cursor-pointer" />
                </Carousel>
              </div>
            </div>

            <div className="mt-6">
              <Button className="h-13 w-full rounded-lg bg-[#ff166a] text-base font-semibold text-white hover:bg-[#e81461]">
                Add to Cart
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{product.brand}</p>
                  <h1 className="mt-3 text-xl leading-tight font-semibold text-slate-950">
                    {product.name}
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{product.pack}</span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1 font-medium text-green-700">
                      <Star className="size-4 fill-green-700 text-green-700" />
                      {product.rating}
                    </span>
                    <span>({product.reviews})</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                >
                  <Heart className="size-5" />
                </button>
              </div>

              <div className="mt-6 flex items-end gap-4">
                <span className="inline-flex items-center rounded-lg border-r-[4px] border-b-[4px] border-[#0d5f2a] bg-[#238b3f] px-3 py-1 pt-2 text-2xl font-bold text-white">
                  ৳{product.price}
                </span>
                <div className="pb-1 ">
                  <p className="text-sm text-slate-500">
                    MRP <span className="line-through">৳{product.originalPrice}</span>
                  </p>
                  <p className="font-semibold text-green-700 text-sm">৳{discountAmount} OFF</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-600">{product.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.deliveryBadges.map((badge, index) => (
                  <div
                    key={badge}
                    className="rounded-lg bg-slate-100/80 p-4 text-center"
                  >
                    {index === 0 ? (
                      <ShieldCheck className="mx-auto size-9 text-slate-500" />
                    ) : (
                      <Truck className="mx-auto size-9 text-slate-500" />
                    )}
                    <p className="mt-3 text-sm font-semibold text-slate-800">{badge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-7">
              <h2 className="text-xl font-semibold text-slate-950">
                Product Description
              </h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p>{product.description}</p>
                {product.highlightRows.map((row) => (
                  <div key={row.label}>
                    <p className="font-semibold text-slate-900">{row.label}</p>
                    <p>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HomepageFeaturedProducts/>
      </main>

      <AnimatePresence>
        {hasScrolledPastHero ? (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur"
          >
            <div className="mx-auto flex w-full max-w-300 items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-500 line-through">৳{product.originalPrice}</p>
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-bold text-slate-950">৳{product.price}</p>
                  <p className="text-sm font-semibold text-green-700">৳{discountAmount} OFF</p>
                </div>
              </div>

              <Button className="h-13 min-w-40 rounded-2xl bg-[#ff166a] px-6 text-base font-semibold text-white hover:bg-[#e81461]">
                <ShoppingCart className="size-4" />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
