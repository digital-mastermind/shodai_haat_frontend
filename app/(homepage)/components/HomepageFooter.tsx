import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

const footerColumns = [
  {
    title: "Shop by Category",
    links: [
      "Fresh Produce",
      "Fish and Meat",
      "Rice and Staples",
      "Spices",
      "Snacks",
      "Beverages",
      "Dairy",
      "Frozen Food",
      "Personal Care",
      "Home Essentials",
      "Baby Care",
      "Pet Supplies",
    ],
  },
  {
    title: "Customer Services",
    links: [
      "How to Order",
      "Delivery Coverage",
      "Track Your Order",
      "Return Policy",
      "Refund Information",
      "Payment Methods",
      "Gift Cards",
      "Membership Benefits",
      "Offers and Discounts",
    ],
  },
  {
    title: "Business Solutions",
    links: [
      "Corporate Orders",
      "Wholesale Supply",
      "Restaurant Partnerships",
      "Vendor Onboarding",
      "Promotional Campaigns",
    ],
    secondaryTitle: "Resources",
    secondaryLinks: [
      "Buying Guides",
      "Recipe Stories",
      "Seasonal Picks",
      "Food Safety Tips",
      "Community Updates",
      "FAQs",
    ],
  },
  {
    title: "Company",
    links: [
      "About Shodai Haat",
      "Careers",
      "Press",
      "Contact Sales",
    ],
    secondaryTitle: "Support",
    secondaryLinks: [
      "Help Center",
      "Live Chat",
      "Call Us: +880 1700-000000",
    ],
  },
];

export function HomepageFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid gap-10 border-x border-slate-200 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:px-0">
          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="lg:min-h-[44rem] lg:border-r lg:border-dashed lg:border-slate-200 lg:px-8 last:lg:border-r-0"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-[15px] text-slate-600">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="transition hover:text-slate-950"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {column.secondaryTitle ? (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {column.secondaryTitle}
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[15px] text-slate-600">
                      {column.secondaryLinks?.map((link) => (
                        <li key={link}>
                          <Link
                            href="#"
                            className="transition hover:text-slate-950"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {column.title === "Company" ? (
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-base font-semibold text-violet-600 transition hover:text-violet-700"
                  >
                    Sign in <ArrowRight className="size-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-x border-slate-200 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="space-y-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold text-violet-600 transition hover:text-violet-700"
            >
              <Globe className="size-4" />
              Bangladesh (English)
            </Link>
            <p className="text-sm text-slate-700">
              © 2026 Shodai Haat. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 lg:justify-end">
            <div className="h-10 w-10 rotate-45 rounded-sm bg-slate-950" />
            <button
              className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              type="button"
            >
              Chat now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
