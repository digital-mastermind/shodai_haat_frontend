import Image from "next/image";
import { PiShoppingCart, PiUserCircle } from "react-icons/pi";
import HomepageSearchBarComponent from "./HomePageSearchBarComponent";

export default function HeaderComponent() {
  return (
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
  );
}
