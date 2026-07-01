import type { Metadata } from "next";
import Image from "next/image";
import {
  absoluteUrl,
  createPageMetadata,
  jsonLdScript,
  siteConfig,
} from "@/lib/seo";
import { HomepageCarouselComponent } from "./components/HomepageCarouselComponent";
import { HomepageFeaturedProducts } from "./components/HomepageFeaturedProducts";

export const metadata: Metadata = createPageMetadata({
  title: "Online Grocery and Essentials Shopping",
  description:
    "Order groceries, beauty products, personal care, baby care, and household essentials online from Shodai Haat with fast delivery.",
  path: "/",
});

export default function Homepage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.defaultImage),
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(jsonLd),
        }}
      />
      <div className="categories-tab-icons border-b border-slate-200 bg-white ">
        <div className="wrapper max-w-300 mx-auto flex w-full items-center gap-8 h-10 px-4">
          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950 border-b-3 h-10 border-violet-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Diamond-1--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Diamond 1 Streamline Icon: https://streamlinehq.com</desc>
              <g id="diamond-1--diamond-money-payment-finance-wealth-jewelry">
                <path
                  id="Vector 273"
                  fill="#e5d2ff"
                  d="M3.0077 2.18192C2.23396 2.82008 1.17247 4.19384 0.75 5.5c0.61587 1.23174 3.03812 4.5401 5.61116 6.9293 0.36144 0.3356 0.91624 0.3356 1.27768 0C10.2119 10.0401 12.6341 6.73174 13.25 5.5c-0.4225 -1.30616 -1.484 -2.67992 -2.2577 -3.31808C10.8397 2.05604 10.6444 2 10.4466 2H3.55342c-0.19783 0 -0.3931 0.05604 -0.54572 0.18192Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 277"
                  stroke="#7f22fe"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.0077 2.18192C2.23396 2.82008 1.17247 4.19384 0.75 5.5c0.61587 1.23174 3.03812 4.5401 5.61116 6.9293 0.36144 0.3356 0.91624 0.3356 1.27768 0C10.2119 10.0401 12.6341 6.73174 13.25 5.5c-0.4225 -1.30616 -1.484 -2.67992 -2.2577 -3.31808C10.8397 2.05604 10.6444 2 10.4466 2H3.55342c-0.19783 0 -0.3931 0.05604 -0.54572 0.18192Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 274"
                  stroke="#7f22fe"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.758301 5.5H13.2466"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 275"
                  stroke="#7f22fe"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.5 2 7 5.5 10.5 2"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 276"
                  stroke="#7f22fe"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 5.5v7.1809"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            All
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Gambling--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Gambling Streamline Icon: https://streamlinehq.com</desc>
              <g id="gambling--gambling-casino-card-poker-dice-bet">
                <g id="Group 5497">
                  <path
                    id="Union"
                    fill="#d7e0ff"
                    d="M6.92862 0.905818c0.11787 -0.014769 0.23518 -0.029466 0.35181 -0.044397L8.24482 0.72168c0.21704 0.044825 0.43402 0.095339 0.65035 0.153306 0.88621 0.237454 1.71953 0.588754 2.52413 0.927934 0.1094 0.04613 0.2183 0.09204 0.3267 0.13741 0.4274 0.17881 0.6788 0.63063 0.6003 1.0872 -0.0276 0.16035 -0.0551 0.3226 -0.0826 0.48497l-0.0004 0.00228c-0.1758 1.03792 -0.358 2.11388 -0.6462 3.18942 -0.2882 1.07554 -0.6683 2.09849 -1.0351 3.08524 -0.0577 0.15535 -0.1151 0.30976 -0.1718 0.46346 -0.1603 0.4346 -0.60386 0.7002 -1.06338 0.6414 -0.11624 -0.0149 -0.23322 -0.0295 -0.35069 -0.0443l-0.00116 -0.0001 -0.00007 0c-0.46631 -0.0584 -0.94155 -0.118 -1.4192 -0.1975 -0.24502 0.0834 -0.49381 0.1605 -0.74692 0.2283 -0.8862 0.2375 -1.78336 0.3499 -2.64973 0.4584 -0.11789 0.0148 -0.2352 0.0295 -0.35184 0.0444 -0.45953 0.0589 -0.90312 -0.2067 -1.06343 -0.6414 -0.05665 -0.1536 -0.11403 -0.308 -0.17176 -0.4633l-0.00003 -0.0001c-0.36674 -0.98677 -0.74691 -2.00969 -1.0351 -3.08525C1.2687 6.1179 1.08647 5.04194 0.910688 4.00401 0.883014 3.84061 0.8555 3.67815 0.827757 3.51678c-0.078496 -0.45657 0.172873 -0.90839 0.600243 -1.08721 0.10844 -0.04537 0.21735 -0.09128 0.32679 -0.13742l0.00011 -0.00004c0.80458 -0.33918 1.63775 -0.69042 2.52395 -0.92788 0.8862 -0.23745 1.78336 -0.34986 2.64974 -0.458409l0.00003 -0.000003Z"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Intersect"
                    fill="#ffffff"
                    d="M7.20531 11.7954c0.07619 0.7122 0.64898 1.285 1.3608 1.3644 0.52872 0.0589 1.07158 0.1095 1.62509 0.1095 0.5534 0 1.0963 -0.0506 1.625 -0.1095 0.7118 -0.0794 1.2846 -0.6522 1.3608 -1.3644 0.0563 -0.5257 0.1038 -1.0654 0.1038 -1.6157 0 -0.55028 -0.0475 -1.09003 -0.1038 -1.61576 -0.0762 -0.71217 -0.649 -1.28496 -1.3608 -1.3643 -0.5287 -0.05894 -1.0716 -0.10955 -1.625 -0.10955 -0.55351 0 -1.09637 0.05061 -1.62509 0.10955 -0.71182 0.07934 -1.28461 0.65213 -1.3608 1.3643 -0.05625 0.52573 -0.10375 1.06548 -0.10375 1.61576 0 0.5503 0.0475 1.09 0.10375 1.6157Z"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Intersect_2"
                    stroke="#5c6577"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.20531 11.7954c0.07619 0.7122 0.64898 1.285 1.3608 1.3644 0.52872 0.0589 1.07158 0.1095 1.62509 0.1095 0.5534 0 1.0963 -0.0506 1.625 -0.1095 0.7118 -0.0794 1.2846 -0.6522 1.3608 -1.3644 0.0563 -0.5257 0.1038 -1.0654 0.1038 -1.6157 0 -0.55028 -0.0475 -1.09003 -0.1038 -1.61576 -0.0762 -0.71217 -0.649 -1.28496 -1.3608 -1.3643 -0.5287 -0.05894 -1.0716 -0.10955 -1.625 -0.10955 -0.55351 0 -1.09637 0.05061 -1.62509 0.10955 -0.71182 0.07934 -1.28461 0.65213 -1.3608 1.3643 -0.05625 0.52573 -0.10375 1.06548 -0.10375 1.61576 0 0.5503 0.0475 1.09 0.10375 1.6157Z"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Vector 3376"
                    stroke="#5c6577"
                    stroke-linecap="round"
                    d="m9.0791 10.8208 0 0.4806"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Vector 3377"
                    stroke="#5c6577"
                    stroke-linecap="round"
                    d="m11.2568 8.84009 0 0.48059"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Intersect_3"
                    stroke="#5c6577"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.55007 5.0516c-0.33058 -1.23375 -0.78219 -2.39825 -1.19571 -3.51836 -0.16693 -0.45215 -0.6285 -0.728613 -1.10661 -0.667634 -0.96421 0.122978 -1.97381 0.231914 -2.96957 0.498724 -0.99577 0.26681 -1.92457 0.67728 -2.82109 1.05288 -0.44454 0.18624 -0.706054 0.65645 -0.62454 1.13149 0.20194 1.1768 0.39308 2.41109 0.72367 3.64485 0.33058 1.23375 0.78219 2.39825 1.19571 3.51835 0.16692 0.4522 0.62852 0.7286 1.10663 0.6676 0.47243 -0.0602 0.95575 -0.1171 1.44301 -0.1908"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Intersect_4"
                    stroke="#5c6577"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.9733 5.10737c0.1351 -0.69398 0.2461 -1.38004 0.3607 -2.04761 0.0815 -0.47504 -0.18 -0.94525 -0.6246 -1.13149 -0.4654 -0.19499 -0.9395 -0.39938 -1.4272 -0.58818"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Vector 3378"
                    fill="#ffffff"
                    d="m4.02731 6.5186 1.02773 -2.30258 2.04134 1.48023L6.0782 8.03451 4.02731 6.5186Z"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Vector 1163"
                    stroke="#5c6577"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.09638 5.696 5.05504 4.21578 4.02731 6.51836l1.68673 1.25405"
                    stroke-width="1"
                  ></path>
                </g>
              </g>
            </svg>
            Toys
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Ios-Ipados--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Ios Ipados Streamline Icon: https://streamlinehq.com</desc>
              <g id="ios-ipados">
                <path
                  id="Intersect"
                  fill="#d7e0ff"
                  d="M4.10575 11.1036c0.08265 0.9578 0.82489 1.7394 1.78334 1.8146 1.89848 0.1488 3.67808 0.1488 5.57651 0 0.9585 -0.0752 1.7007 -0.8568 1.7834 -1.8146 0.1143 -1.32444 0.2322 -2.69708 0.2322 -4.10372s-0.1179 -2.77929 -0.2322 -4.10368c-0.0827 -0.95783 -0.8249 -1.73946 -1.7834 -1.8146 -1.89843 -0.148839 -3.67803 -0.148839 -5.57651 0 -0.95845 0.07514 -1.70069 0.85677 -1.78334 1.8146 -0.11429 1.32439 -0.23221 2.69704 -0.23221 4.10368s0.11792 2.77928 0.23221 4.10372Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Intersect_2"
                  fill="#ffffff"
                  d="M0.629313 11.1944c0.069331 0.9526 0.798657 1.7444 1.751997 1.8015 0.75372 0.0452 1.48707 0.0452 2.2408 0 0.95334 -0.0571 1.68266 -0.8489 1.75199 -1.8015 0.0586 -0.805 0.11027 -1.63327 0.11027 -2.4787 0 -0.84543 -0.05167 -1.67369 -0.11027 -2.47874 -0.06933 -0.95253 -0.79865 -1.74437 -1.75199 -1.80148 -0.75373 -0.04516 -1.48708 -0.04516 -2.2408 0 -0.95334 0.05711 -1.682666 0.84895 -1.751997 1.80148 -0.058597 0.80505 -0.11027 1.63331 -0.11027 2.47874 0 0.84543 0.051673 1.6737 0.11027 2.4787Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.76181 13.0171c1.22937 0.0336 2.44089 0.0008 3.70519 -0.0985 0.9583 -0.0752 1.7002 -0.857 1.7826 -1.8147 0.114 -1.32452 0.2315 -2.69725 0.2315 -4.10398s-0.1175 -2.77945 -0.2315 -4.10393c-0.0824 -0.95774 -0.8243 -1.73952 -1.7826 -1.81477 -1.88921 -0.148334 -3.66052 -0.148334 -5.54974 0 -0.41037 0.03223 -0.78105 0.194 -1.07725 0.44367 -0.28757 0.24239 -0.50494 0.56762 -0.62028 0.93757"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector_2"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.56201 10.1648 0.81682 0"
                  stroke-width="1"
                ></path>
                <path
                  id="Intersect_3"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.519043 8.73782c0 -0.83378 0.058031 -1.65078 0.124275 -2.44514 0.079886 -0.95795 0.825742 -1.74801 1.784992 -1.81041 0.74724 -0.04861 1.39947 -0.04863 2.1467 -0.00003 0.95926 0.06238 1.70512 0.85244 1.785 1.81039 0.06625 0.79436 0.12428 1.61136 0.12428 2.44514 0 0.83379 -0.05804 1.65083 -0.12428 2.44523 -0.07989 0.9579 -0.82574 1.748 -1.78499 1.8104 -0.74724 0.0486 -1.39947 0.0486 -2.14671 0 -0.95925 -0.0624 -1.705105 -0.8525 -1.784992 -1.8104 -0.066244 -0.7944 -0.124275 -1.6114 -0.124275 -2.44518Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 122"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.0127 10.9902h0.97756"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Mobile
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Router-Wifi-Network--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>
                Router Wifi Network Streamline Icon: https://streamlinehq.com
              </desc>
              <g id="router-wifi-network">
                <path
                  id="Vector 2441"
                  fill="#d7e0ff"
                  d="M0.5 10.2499V8.91241c0 -0.96361 0.68785 -1.78433 1.64531 -1.89299 1.15147 -0.13067 2.83669 -0.2683 4.82694 -0.2683 2.00094 0 3.70905 0.13911 4.87555 0.27041 0.9603 0.10808 1.6522 0.93069 1.6522 1.89705v1.33132c0 0.5523 -0.4477 1 -1 1h-11c-0.552285 0 -1 -0.4477 -1 -1Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2433"
                  stroke="#5c6577"
                  d="M0.5 10.2499V8.91241c0 -0.96361 0.68785 -1.78433 1.64531 -1.89299 1.15147 -0.13067 2.83669 -0.2683 4.82694 -0.2683 2.00094 0 3.70905 0.13911 4.87555 0.27041 0.9603 0.10808 1.6522 0.93069 1.6522 1.89705v1.33132c0 0.5523 -0.4477 1 -1 1h-11c-0.552285 0 -1 -0.4477 -1 -1Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2434"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  d="M3 11.25v1"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2435"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  d="M3.43213 9.25h0.5"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2440"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  d="M6 9.25h0.5"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2437"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  d="m1 1.75 1.5 5.20801"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2438"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  d="m13 1.75 -1.5 5.20801"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2439"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  d="M11 11.25v1"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Electronics
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Dog-1--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Dog 1 Streamline Icon: https://streamlinehq.com</desc>
              <g id="dog-1--nature-head-dog-pet-animals-canine">
                <path
                  id="Vector"
                  fill="#d7e0ff"
                  d="M2.47339 9.68364c0 -0.48202 0.04034 -0.99228 0.10481 -1.49999h-0.50237c-2.999941 -0.5 -1.02977 -4.80628 0.39752 -6.00001C3.59513 1.24544 5.68016 0.816406 7.00033 0.816406c1.32018 0 3.40517 0.429034 4.52697 1.367234 1.4273 1.19373 3.3975 5.50001 0.3975 6.00001h-0.5562c0.0645 0.50771 0.1048 1.01797 0.1048 1.49999 0 2.99996 -2.00001 3.49996 -4.50001 3.49996 -2.5 0 -4.5 -0.5 -4.5 -3.49996Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 1344"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.47314 4.18359s-1 3.1 -1 5.5c0 3.00001 2 3.50001 4.5 3.50001s4.49996 -0.5 4.49996 -3.50001c0 -2.4 -1 -5.5 -1 -5.5"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 1345"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.97314 9.68359 1 0.50001 1 -0.50001"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 1346"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.72314 6.18359v0.5"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 1348"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.22314 6.18359v0.5"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 1347"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.57837 8.18365h-0.50303c-2.99994 -0.5 -1.02977 -4.80628 0.39752 -6.00001C3.59465 1.24544 5.67967 0.816405 6.99985 0.816406 8.32002 0.816407 10.405 1.24544 11.5268 2.18364c1.4273 1.19373 3.3975 5.50001 0.3976 6.00001h-0.5531"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Pet
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Salad-Vegetable-Diet--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>
                Salad Vegetable Diet Streamline Icon: https://streamlinehq.com
              </desc>
              <g id="salad-vegetable-diet">
                <path
                  id="Ellipse 1466"
                  fill="#d7e0ff"
                  d="M7.04505 13.1687c-5.47402 0 -7.20299 -1.7023 -6.205948 -4.78003H13.2505c0.997 3.07773 -0.7314 4.78003 -6.20545 4.78003Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Union"
                  fill="#d7e0ff"
                  d="M6.04246 2.92038c-0.05549 -0.21133 -0.13181 -0.4227 -0.22981 -0.6306C5.11403 0.807773 3.57819 0.063391 2.38224 0.627156 1.1863 1.19092 0.783131 2.84935 1.48174 4.33136c0.09801 0.20789 0.21248 0.40127 0.34019 0.57856 -0.832956 0.72684 -1.163641 2.1287 -0.40673 3.46688l0 0.34943 7.55855 0 0 -3.89692c-0.41844 -1.57584 -1.93891 -2.07268 -2.93129 -1.90893Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Ellipse 1463"
                  stroke="#5c6577"
                  stroke-linejoin="round"
                  d="M7.01429 13.301c-5.47402 0 -7.202992 -1.7022 -6.20595 -4.78H13.2197c0.997 3.0778 -0.7314 4.78 -6.20541 4.78Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector 2130"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.23047 4.27881c1.10794 1.29761 1.50229 2.60446 1.66221 3.835"
                  stroke-width="1"
                ></path>
                <path
                  id="Union_2"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1.38452 8.50939c-0.756909 -1.33818 -0.426224 -2.74004 0.40673 -3.46688 -0.1277 -0.17729 -0.24218 -0.37067 -0.34018 -0.57857 -0.698617 -1.482 -0.29545 -3.14043 0.9005 -3.704196C3.54751 0.195979 5.08336 0.940361 5.78197 2.42237c0.098 0.2079 0.17432 0.41926 0.22982 0.6306 0.99238 -0.16376 2.51285 0.33309 2.93129 1.90892"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract"
                  fill="#ffffff"
                  d="M7.66127 8.38879h5.25163c0.0822 -0.29533 0.1242 -0.62528 0.1242 -0.98791 0 -1.76 -0.99 -2.75 -2.75 -2.75 -1.75999 0 -2.74999 0.99 -2.74999 2.75 0 0.36263 0.04203 0.69258 0.12416 0.98791Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract_2"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.66127 8.38879h5.25163c0.0822 -0.29533 0.1242 -0.62528 0.1242 -0.98791 0 -1.76 -0.99 -2.75 -2.75 -2.75 -1.75999 0 -2.74999 0.99 -2.74999 2.75 0 0.36263 0.04203 0.69258 0.12416 0.98791Z"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Grocery
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Heart-Rate--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Heart Rate Streamline Icon: https://streamlinehq.com</desc>
              <g id="heart-rate--health-beauty-information-data-beat-pulse-monitor-heart-rate-info">
                <path
                  id="Vector"
                  fill="#d7e0ff"
                  d="M7 3.183C3.98 -0.522 0.792 2.111 0.75 4.95c0 4.224 5.055 7.69 6.25 7.69 1.195 0 6.25 -3.467 6.25 -7.692C13.208 2.11 10.02 -0.522 7 3.183Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector_2"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.88 4C1.514 1.595 4.324 -0.102 7 3.183c3.02 -3.705 6.208 -1.073 6.25 1.765 0 4.225 -5.055 7.693 -6.25 7.693 -0.715 0 -2.81 -1.24 -4.379 -3.141"
                  stroke-width="1"
                ></path>
                <path
                  id="Vector_3"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.5 6.5H8l-1.5 2 -2 -3.5L3 7H0.562"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Medicine
          </div>

          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Sofa--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Sofa Streamline Icon: https://streamlinehq.com</desc>
              <g id="sofa--decoration-furniture-interior-design-couch-sofa-decorate-shopping">
                <path
                  id="Intersect"
                  fill="#d7e0ff"
                  d="M4.06043 7.45259c-0.02929 -0.47036 -0.3765 -0.87568 -0.83966 -0.96273 -0.24566 -0.04617 -0.49667 -0.08202 -0.75185 -0.08202s-0.50619 0.03585 -0.75185 0.08202c-0.46316 0.08705 -0.810371 0.49237 -0.839661 0.96273 -0.03958 0.63561 -0.0802 1.29422 -0.0802 1.96905 0 0.96496 0.129805 2.90616 0.129805 2.90616l3.088706 0s0.12491 -1.9412 0.12491 -2.90616c0 -0.67483 -0.04062 -1.33344 -0.0802 -1.96905Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Intersect_2"
                  fill="#d7e0ff"
                  d="M13.1229 7.45259c-0.0293 -0.47036 -0.3765 -0.87568 -0.8396 -0.96273 -0.2457 -0.04617 -0.4967 -0.08202 -0.7519 -0.08202 -0.2552 0 -0.5062 0.03585 -0.7518 0.08202 -0.4632 0.08705 -0.8104 0.49237 -0.83969 0.96273 -0.03958 0.63561 -0.0802 1.29422 -0.0802 1.96905 0 0.96496 0.1298 2.90616 0.1298 2.90616l3.08869 0s0.1249 -1.9412 0.1249 -2.90616c0 -0.67483 -0.0406 -1.33344 -0.0802 -1.96905Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract"
                  fill="#d7e0ff"
                  fill-rule="evenodd"
                  d="M9.90278 8.06852c-0.0245 0.4421 -0.04331 0.89385 -0.04331 1.35312 -0.00001 0.96496 0.1298 2.90616 0.1298 2.90616h0.36383l0 0.0008H7l-2.98438 0s0.12491 -1.9412 0.12491 -2.90614c0 -0.45954 -0.01883 -0.91156 -0.04335 -1.35392 0.11166 -0.05379 0.23537 -0.08752 0.36533 -0.09692l0.18841 -0.01371C5.40961 7.90261 6.19525 7.84534 7 7.84534c0.80475 0 1.5904 0.05727 2.34908 0.11257l0.18842 0.01371c0.12994 0.0094 0.25363 0.04312 0.36528 0.0969Z"
                  clip-rule="evenodd"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract_2"
                  fill="#d7e0ff"
                  fill-rule="evenodd"
                  d="M10.1275 1.82089c0.9505 0.07129 1.7569 0.79061 1.8999 1.73302 0.0728 0.47959 0.1279 0.96931 0.1279 1.46698 0 0.48381 -0.0521 0.96011 -0.1219 1.42689 -0.1653 -0.02411 -0.3328 -0.03991 -0.5022 -0.03991 -0.2552 0 -0.5062 0.03585 -0.7518 0.08202 -0.4632 0.08705 -0.81041 0.49237 -0.8397 0.96273 -0.01265 0.20304 -0.0254 0.40842 -0.03689 0.61593 -0.11165 -0.05378 -0.23534 -0.0875 -0.36528 -0.0969l-0.18842 -0.01371 -0.00002 0c-0.75868 -0.0553 -1.54431 -0.11257 -2.34905 -0.11257 -0.80475 0 -1.59039 0.05727 -2.34907 0.11257l-0.00002 0 -0.18841 0.01371c-0.12994 0.0094 -0.25364 0.04312 -0.36529 0.0969 -0.01149 -0.20751 -0.02424 -0.41289 -0.03688 -0.61593 -0.02929 -0.47036 -0.3765 -0.87568 -0.83966 -0.96273 -0.24566 -0.04617 -0.49667 -0.08202 -0.75185 -0.08202 -0.16937 0 -0.33689 0.0158 -0.50224 0.03992 -0.06977 -0.46679 -0.12189 -0.94309 -0.12189 -1.4269 0 -0.49767 0.05515 -0.9874 0.12793 -1.46698 0.143 -0.94241 0.94939 -1.66173 1.89992 -1.73302 1.01264 -0.07594 2.05817 -0.1495 3.12744 -0.1495s2.11479 0.07356 3.12748 0.1495Zm-0.23157 6.37516c0.00223 -0.04259 0.00453 -0.08509 0.00688 -0.1275 -0.00235 0.04241 -0.00465 0.08491 -0.00688 0.1275Z"
                  clip-rule="evenodd"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract_3"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.0334 6.44778c0.0698 -0.46678 0.1219 -0.94308 0.1219 -1.42689 0 -0.49767 -0.0551 -0.98739 -0.1279 -1.46698 -0.143 -0.94241 -0.9494 -1.66173 -1.8999 -1.73302 -1.01269 -0.07594 -2.05821 -0.1495 -3.12748 -0.1495s-2.1148 0.07356 -3.12744 0.1495c-0.95053 0.07129 -1.75692 0.79061 -1.89992 1.73302 -0.07278 0.47958 -0.12793 0.96931 -0.12793 1.46698 0 0.48381 0.05212 0.96011 0.12189 1.4269"
                  stroke-width="1"
                ></path>
                <path
                  id="Intersect_3"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.1229 7.45259c-0.0293 -0.47036 -0.3765 -0.87568 -0.8396 -0.96273 -0.2457 -0.04617 -0.4967 -0.08202 -0.7519 -0.08202 -0.2552 0 -0.5062 0.03585 -0.7518 0.08202 -0.4632 0.08705 -0.8104 0.49237 -0.83969 0.96273 -0.03958 0.63561 -0.0802 1.29422 -0.0802 1.96905 0 0.96496 0.1298 2.90616 0.1298 2.90616l3.08869 0s0.1249 -1.9412 0.1249 -2.90616c0 -0.67483 -0.0406 -1.33344 -0.0802 -1.96905Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Intersect_4"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.06043 7.45259c-0.02929 -0.47036 -0.3765 -0.87568 -0.83966 -0.96273 -0.24566 -0.04617 -0.49667 -0.08202 -0.75185 -0.08202s-0.50619 0.03585 -0.75185 0.08202c-0.46316 0.08705 -0.810371 0.49237 -0.839661 0.96273 -0.03958 0.63561 -0.0802 1.29422 -0.0802 1.96905 0 0.96496 0.129805 2.90616 0.129805 2.90616l3.088706 0s0.12491 -1.9412 0.12491 -2.90616c0 -0.67483 -0.04062 -1.33344 -0.0802 -1.96905Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract_4"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.90278 8.06852c-0.11165 -0.05378 -0.23534 -0.0875 -0.36528 -0.0969l-0.18842 -0.01371C8.5904 7.90261 7.80475 7.84534 7 7.84534c-0.80475 0 -1.59039 0.05727 -2.34908 0.11257l-0.18841 0.01371c-0.12996 0.0094 -0.25367 0.04313 -0.36533 0.09692m6.25592 4.25926 -6.33748 0.0008"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Home
          </div>
          <div className="icon flex items-center gap-2 cursor-pointer text-slate-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Shirt--Streamline-Flex"
              height="20"
              width="20"
            >
              <desc>Shirt Streamline Icon: https://streamlinehq.com</desc>
              <g id="shirt--clothing-t-shirt-men-top-shopping-catergories">
                <path
                  id="Subtract"
                  fill="#d7e0ff"
                  d="M5.118 1H3.645c-0.367 0 -1.162 0.994 -1.401 1.232 -0.35 0.35 -0.672 0.712 -0.982 1.066 -0.313 0.356 -0.355 0.895 -0.076 1.278 0.103 0.143 0.215 0.283 0.343 0.41 0.127 0.127 0.266 0.24 0.41 0.343 0.382 0.278 0.922 0.236 1.278 -0.076a0.184 0.184 0 0 1 0.304 0.14c-0.024 2.178 -0.027 4.728 0.05 6.564a0.926 0.926 0 0 0 0.615 0.843c1.95 0.675 3.789 0.6 5.717 -0.01a0.94 0.94 0 0 0 0.65 -0.863c0.076 -1.833 0.074 -4.368 0.05 -6.534a0.183 0.183 0 0 1 0.303 -0.14c0.356 0.313 0.895 0.355 1.278 0.077a3.4 3.4 0 0 0 0.41 -0.344c0.128 -0.127 0.24 -0.266 0.344 -0.41 0.278 -0.383 0.236 -0.922 -0.076 -1.278 -0.31 -0.354 -0.633 -0.716 -0.983 -1.066C11.643 1.996 10.85 1 10.478 1H8.786a1.876 1.876 0 0 1 -3.668 0Z"
                  stroke-width="1"
                ></path>
                <path
                  id="Subtract_2"
                  stroke="#5c6577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.118 1H3.645c-0.367 0 -1.162 0.994 -1.401 1.232 -0.35 0.35 -0.672 0.712 -0.982 1.066 -0.313 0.356 -0.355 0.895 -0.076 1.278 0.103 0.143 0.215 0.283 0.343 0.41 0.127 0.127 0.266 0.24 0.41 0.343 0.382 0.278 0.922 0.236 1.278 -0.076a0.184 0.184 0 0 1 0.304 0.14c-0.024 2.178 -0.027 4.728 0.05 6.564a0.926 0.926 0 0 0 0.615 0.843c1.95 0.675 3.789 0.6 5.717 -0.01a0.94 0.94 0 0 0 0.65 -0.863c0.076 -1.833 0.074 -4.368 0.05 -6.534a0.183 0.183 0 0 1 0.303 -0.14c0.356 0.313 0.895 0.355 1.278 0.077a3.4 3.4 0 0 0 0.41 -0.344c0.128 -0.127 0.24 -0.266 0.344 -0.41 0.278 -0.383 0.236 -0.922 -0.076 -1.278 -0.31 -0.354 -0.633 -0.716 -0.983 -1.066C11.643 1.996 10.85 1 10.478 1H8.786a1.876 1.876 0 0 1 -3.668 0Z"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
            Fashion
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
    </>
  );
}
