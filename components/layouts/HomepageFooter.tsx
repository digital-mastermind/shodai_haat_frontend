import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { PiFarmDuotone, PiFlagBanner, PiFlagBannerFold, PiFlagBannerFoldDuotone, PiLightbulbFilamentBold, PiLightbulbFilamentDuotone } from "react-icons/pi";

const footerColumns = [
  {
    title: "Shop by Category",
    links: [
      "Fresh Produce",
      "Fresh Fruits",
      "Vegetables",
      "Fish and Meat",
      "Meat",
      "Seafood",
      "Rice and Staples",
      "Rice and Grains",
      "Spices",
      "Bakery",
      "Breakfast",
      "Snacks",
      "Beverages",
      "Dairy",
      "Frozen Food",
      "Ready to Cook",
      "Personal Care",
      "Beauty and Grooming",
      "Health and Wellness",
      "Cleaning Supplies",
      "Home Essentials",
      "Baby Care",
      "Fashion",
      "Pet Supplies",
    ],
  },
  {
    title: "Customer Services",
    links: [
      "How to Order",
      "Delivery Coverage",
      "Same Day Delivery",
      "Scheduled Delivery",
      "Track Your Order",
      "Order Cancellation",
      "Return Policy",
      "Refund Information",
      "Payment Methods",
      "Cash on Delivery",
      "Digital Wallets",
      "Gift Cards",
      "Membership Benefits",
      "Offers and Discounts",
      "Coupon Help",
      "Product Availability",
      "Report an Issue",
    ],
  },
  {
    title: "Business Solutions",
    links: [
      "Corporate Orders",
      "Wholesale Supply",
      "Restaurant Partnerships",
      "Office Pantry Supply",
      "Bulk Grocery Plans",
      "Event Catering Supply",
      "Vendor Onboarding",
      "Sell on Shodai Haat",
      "Supplier Portal",
      "Promotional Campaigns",
      "Brand Partnerships",
      "B2B Credit Support",
    ],
    secondaryTitle: "Resources",
    secondaryLinks: [
      "Buying Guides",
      "Recipe Stories",
      "Seasonal Picks",
      "Weekly Market Prices",
      "Storage Tips",
      "Nutrition Notes",
      "Food Safety Tips",
      "Sustainable Shopping",
      "Community Updates",
      "FAQs",
      "Blog",
    ],
  },
  {
    title: "Company",
    links: [
      "About Shodai Haat",
      "Careers",
      "Press",
      "Our Stores",
      "Our Farmers",
      "Sustainability",
      "Investor Relations",
      "Contact Sales",
      "Privacy Policy",
      "Terms and Conditions",
      "Cookie Policy",
    ],
    secondaryTitle: "Support",
    secondaryLinks: [
      "Help Center",
      "Live Chat",
      "Call Us: +880 1700-000000",
      "Email Support",
      "Delivery Hotline",
      "Complaint Center",
      "Safety and Trust",
      "Accessibility",
    ],
  },
];

export function HomepageFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-300">
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

          <div className="space-y-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold text-violet-600 transition hover:text-violet-700"
            >
              <PiLightbulbFilamentBold className="size-4" />
              Digital Mastermind
            </Link>
            <p className="text-sm text-slate-700">
              Developed by Digital Mastermind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
