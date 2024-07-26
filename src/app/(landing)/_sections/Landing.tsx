import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Landing() {
  return (
    <section className="text-gray-600 h-full body-font min-h-screen flex w-full items-center">
      <div className="container mx-auto flex items-center justify-center h-full flex-1 px-5 pb-32">
        <div className="absolute top-0 left-0 w-full h-full z-[-2]">
          <Image
            className="absolute top-0 left-0 w-full h-full brightness-50
      mb-10 object-cover object-center"
            width={2000}
            loading="eager"
            priority
            height={2000}
            alt="hero"
            src="/assets/construction1.webp"
          />
        </div>
        <div className="text-center text-white h-full flex flex-col w-[700px] justify-center items-center rounded py-8 px-16">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
            Kvalitní a rychlá práce
          </h1>
          <Separator className="mb-8 h-1 w-8 bg-primary" />
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" className="text-black font-bold rounded">
              Stavby
            </Button>
            <Button variant="outline" className="text-black rounded">
              O nás
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
