import React from "react";
import Image from "next/image";
import { constAboutPage } from "@/constants/cs_main";

function Card({
  subTitle,
  title,
  description,
  imageUrl,
}: {
  subTitle: string;
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-secondary shadow-lg p-6 rounded-lg">
        <Image
          width={800}
          height={800}
          loading="eager"
          priority
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={imageUrl}
          alt={title}
        />
        <h3 className="tracking-widest text-black text-xs font-medium title-font uppercase">
          {subTitle}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full">
      <div className="w-full">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {constAboutPage.landing.heading}
            </h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-">
            {constAboutPage.landing.para}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {constAboutPage.landing.cardData.map((card, index) => (
            <Card
              key={index}
              subTitle={card.subTitle}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
