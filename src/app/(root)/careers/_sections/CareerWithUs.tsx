import { constCareersPage } from "@/constants/cs_main";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({
  title,
  description,
  ImgIcon,
}: {
  title: string;
  description: string;
  ImgIcon: any;
}) {
  return (
    <div className="flex flex-col mb-10 lg:items-start items-center">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
        <ImgIcon className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        <Link
          href="/contact"
          className="mt-3 text-yellow-500 inline-flex items-center"
        >
          Kontaktovat
        </Link>
      </div>
    </div>
  );
}

export default function CareerWithUs() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="feature"
            className="object-cover object-center h-full w-full"
            width={900}
            height={900}
            src={constCareersPage.careerWithUs.landingImage}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {constCareersPage.careerWithUs.CareerCardContent.map(
            (card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                ImgIcon={card.icon}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
