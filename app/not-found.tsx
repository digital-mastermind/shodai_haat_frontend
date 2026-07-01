import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className=" max-w-300 mx-auto py-30">
      <Image
        src="/404.png"
        alt="404 illustration"
        width={1024}
        height={767}
        priority
        className="h-auto w-full"
      />
    </main>
  );
}
