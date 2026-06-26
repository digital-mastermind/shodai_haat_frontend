"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Slot } from "radix-ui";
import { QRCodeSVG } from "qrcode.react";
import { ArrowUpRight, Smartphone, X } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";

type AppDownloadQrModalProps = {
  children: React.ReactNode;
  playStoreUrl?: string;
  title?: string;
  description?: string;
};

const DEFAULT_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.banizzik.app&hl=en";

export function AppDownloadQrModal({
  children,
  playStoreUrl = DEFAULT_PLAY_STORE_URL,
  title = "Continue in the app",
  description = "Scan this QR code on your phone to open the Play Store and download the app before continuing.",
}: AppDownloadQrModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <Slot.Root
        onClick={() => setIsOpen(true)}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        {children}
      </Slot.Root>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <div className="fixed inset-0 z-[100]">
                  <motion.button
                    type="button"
                    aria-label="Close modal"
                    className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                  />

                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.94, y: 16 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 16 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="relative w-full max-w-md rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] sm:p-8"
                    >
                      <button
                        type="button"
                        aria-label="Close"
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                      >
                        <X className="size-4" />
                      </button>

                      <div className="pr-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#eef7ff] px-3 py-1 text-sm font-semibold text-[#0f5ea8]">
                          <Smartphone className="size-4" />
                          Mobile app required
                        </div>
                        <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                          {title}
                        </h2>
                        <p className="mt-3 text-base leading-7 text-slate-600">
                          {description}
                        </p>
                      </div>

                      <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                        <div className="mx-auto flex w-fit rounded-[1.5rem] bg-white p-4 shadow-sm">
                          <QRCodeSVG
                            value={playStoreUrl}
                            size={220}
                            bgColor="#ffffff"
                            fgColor="#0f172a"
                            includeMargin={true}
                          />
                        </div>
                        <p className="mt-4 text-center text-sm text-slate-500">
                          Scan with your phone camera to open the Play Store.
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        <Button
                          asChild
                          className="h-12 rounded-2xl bg-[#ff166a] text-base font-semibold text-white hover:bg-[#e81461]"
                        >
                          <Link href={playStoreUrl} target="_blank" rel="noreferrer">
                            Open Play Store
                            <ArrowUpRight className="size-4" />
                          </Link>
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="h-12 rounded-2xl"
                          onClick={() => setIsOpen(false)}
                        >
                          Maybe later
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}
