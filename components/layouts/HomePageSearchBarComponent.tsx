import { SearchIcon } from "lucide-react";
import { useId } from "react";

import { Input } from "@/components/ui/input";

export default function HomepageSearchBarComponent() {
  const id = useId();
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Input
          className="peer h-12 w-full rounded-2xl border-slate-200 bg-white ps-14 pe-5 text-md shadow-none placeholder:text-slate-500 focus-visible:border-slate-300 focus-visible:ring-0"
          id={id}
          placeholder='Search for "apple juice"'
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 text-slate-700 peer-disabled:opacity-50">
          <SearchIcon size={18} strokeWidth={2.25} />
        </div>
      </div>
    </div>
  );
}
