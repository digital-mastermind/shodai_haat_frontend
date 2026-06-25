import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categoryImages = [
  "/category/1.webp",
  "/category/2.webp",
  "/category/3.webp",
  "/category/4.webp",
  "/category/5.webp",
  "/category/6.webp",
  "/category/7.webp",
  "/category/8.webp",
  "/category/9.webp",
  "/category/10.webp",
  "/category/11.webp",
  "/category/12.webp",
  "/category/13.webp",
  "/category/14.webp",
  "/category/15.webp",
  "/category/16.webp",
  "/category/17.webp",
  "/category/18.png",
  "/category/19.webp",
  "/category/20.webp",
  "/category/21.png",
  "/category/22.png",
  "/category/23.png",
];

export function HomepageCarouselComponent() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {categoryImages.map((imageSrc, index) => (
          <CarouselItem
            key={imageSrc}
            className="basis-1/12"
          >
            <div className="p-1">
              <Image
                alt={`Category card ${index + 1}`}
                className="h-auto w-[10rem] object-contain"
                height={335}
                priority={index < 6}
                src={imageSrc}
                width={226}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
