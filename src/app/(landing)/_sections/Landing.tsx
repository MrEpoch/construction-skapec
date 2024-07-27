import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <section className="text-gray-600 h-full body-font min-h-full flex w-full items-center justify-center">
      <div className="flex items-center justify-center h-full flex-1 w-full">
        <div className="absolute top-0 left-0 w-full h-full z-[-2]">
          <Image
            className="absolute top-0 left-0 w-full min-h-full brightness-50
      mb-10 object-cover object-center"
            width={2000}
            loading="eager"
            priority
            height={2000}
            alt="hero"
            src="/assets/construction1.webp"
          />
        </div>
        <div className="text-center text-white h-full w-full flex-1 flex flex-col justify-center items-center rounded py-8">
          <h1 className="text-white">Kvalitní a rychlá práce</h1>
          <Separator className="my-8 h-1 w-8 bg-primary" />
          <p className="py-8 description-p">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/services"
              className="text-black bg-primary py-2 px-4 hover:bg-primary/90  font-bold rounded"
            >
              Služby
            </Link>
            <Link
              href="/about"
              className="text-black bg-card hover:bg-card/80 transition py-2 px-4 font-bold rounded"
            >
              O nás
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
