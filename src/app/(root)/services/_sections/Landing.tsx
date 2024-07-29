import { constServicesPage } from "@/constants/cs_main";
import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <section className="text-gray-600 body-font min-h-full py-24 w-full">
      <div className="flex py-6 items-center justify-center flex-col">
        <div className="text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {constServicesPage.landing.heading}
          </h1>
          <p className="pb-8 leading-relaxed">
            {constServicesPage.landing.para}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="text-black bg-primary py-2 shadow-lg px-4 hover:bg-primary/90  font-bold rounded"
            >
              {constServicesPage.landing.link1}
            </Link>
            <Link
              href="/about"
              className="text-black bg-card shadow-lg hover:bg-card/80 transition py-2 px-4 font-bold rounded"
            >
              {constServicesPage.landing.link2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
