import { constServicesPage } from "@/constants/cs_main";
import Link from "next/link";
import React from "react";

function Card({
  type,
  title,
  description,
  slug,
}: {
  slug: string;
  type: string;
  title: string;
  description: string;
}) {
  return (
    <div id={type.toLowerCase()} className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {type}
        </h3>
        <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {title}
        </h2>
        <p className="leading-relaxed mb-3">{description}</p>
        <Link
          href={`/services/${slug}`}
          className="text-yellow-500 inline-flex items-center"
        >
          Prohlédnout
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="min-h-screen w-full items-center justify-center flex flex-col">
      <div className="flex flex-wrap py-8">
        {constServicesPage.services.servicesData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </section>
  );
}
