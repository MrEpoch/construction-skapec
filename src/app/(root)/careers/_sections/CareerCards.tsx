import Link from "next/link";
import React from "react";

function Card({
  type,
  title,
  description,
}: {
  type: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {type}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {title}
        </h1>
        <p className="leading-relaxed mb-3">{description}</p>
        <Link
          href="/contact"
          className="text-yellow-500 inline-flex items-center"
        >
          Kontaktovat
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

const cardContent = [
  {
    type: "Manager",
    title: "Pozice pro manažera",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    type: "Cihlář",
    title: "Volné cihlářské pozice",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    type: "Učetní",
    title: "Volné učetní pozice",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

export default function CareerCards() {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full">
      <div className="container px-5 items-center flex flex-col gap-8 py-24 mx-auto">
        <h1 className="text-3xl w-fit font-semibold sm:text-4xl rounded-xl text-center bg-primary text-black px-4 py-2">
          Volné pozice
        </h1>
        <div className="flex flex-wrap -m-4">
          {cardContent.map((card, index) => (
            <Card
              key={index}
              type={card.type}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
