import Image from "next/image";
import { HomepageCarouselComponent } from "./components/HomepageCarouselComponent";
import { HomepageFeaturedProducts } from "./components/HomepageFeaturedProducts";

export default function Homepage() {
  return (
    <>
      <div className="category-part max-w-300 mx-auto mt-10">
        <HomepageCarouselComponent />
      </div>

      <div className="banner-part  max-w-300 mx-auto w-full mt-10">
        <div className="wrapper flex items-center gap-4 w-full">
          <Image
            alt="Featured promotion"
            className="rounded-[10%] corner-squircle h-80 w-full object-cover"
            height={320}
            src="https://i.pinimg.com/1200x/f1/f5/48/f1f548096667dd39160c9827ce9b9d93.jpg"
            width={640}
          />

          <Image
            alt="Seasonal offer"
            className="rounded-[10%] corner-squircle h-80 w-full object-cover"
            height={320}
            src="https://i.pinimg.com/1200x/f2/09/35/f209353247afa6116778e0f6316ed3a3.jpg"
            width={640}
          />
        </div>
      </div>

      <HomepageFeaturedProducts />
    </>
  );
}
