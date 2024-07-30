import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constCTA } from "@/constants/cs_main";

export default function CTA() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-primary py-8 md:py-12 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                {constCTA.heading}
              </h2>

              <p className="hidden text-black/90 sm:mt-4 sm:block">
                {constCTA.para}
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/contact"
                  aria-label={constCTA.link}
                  className="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-yellow-500 transition hover:bg-transparent hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  {constCTA.link}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="CTA obrázek 1"
              src={constCTA.img1}
              width={500}
              height={800}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <Image
              alt="CTA obrázek 2"
              src={constCTA.img2}
              width={500}
              height={800}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
