import Image from "next/image";
import { PiShoppingCart, PiUserCircle } from "react-icons/pi";
import { HomepageCarouselComponent } from "./components/HomepageCarouselComponent";
import { HomepageFeaturedProducts } from "./components/HomepageFeaturedProducts";
import { HomepageFooter } from "./components/HomepageFooter";
import HomepageSearchBarComponent from "./components/HomePageSearchBarComponent";

export default function Homepage() {
  return (
    <>
      <div className="header-part border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-300 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 px-6 py-5">
          <div className="left-part shrink-0">
            <Image
              alt="Shodai Haat"
              className="h-auto w-15 object-contain"
              height={100}
              src="/logos/shodai_haat_logo.png"
              width={100}
            />
          </div>

          <div className="mid-part min-w-0 w-full">
            <HomepageSearchBarComponent />
          </div>

          <div className="right-part flex shrink-0 items-center gap-8">
            <button
              className="flex flex-col items-center gap-1 text-slate-950"
              type="button"
            >
              <PiUserCircle size={28} />
              <span className="text-sm font-medium">Login</span>
            </button>

            <button
              className="relative flex flex-col items-center gap-1 text-slate-950"
              type="button"
            >
              <span className="absolute -right-3 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-violet-600 px-1 text-sm font-semibold text-white">
                4
              </span>
              <PiShoppingCart size={28} />
              <span className="text-sm font-medium">Cart</span>
            </button>
          </div>
        </div>
      </div>

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

      <HomepageFooter />
    </>
  );
}
