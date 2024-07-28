import Image from "next/image";
import React from "react";

function AboutCard({
  i,
  data,
}: {
  i: number;
  data: { imageUrl: string; title: string; description: string };
}) {
  return (
    <div
      className={`flex justify-center min-h-screen w-full flex-col md:flex-${i % 2 === 0 ? "row" : "row-reverse"} items-center text-left gap-4`}
    >
      <div className="w-full md:w-3/5 lg:w-1/2 relative">
        <Image
          width={900}
          height={900}
          src={data.imageUrl}
          alt={data.title}
          className="object-cover w-full h-full"
        />

        <div className="w-full h-full top-0 right-0 z-[-1] absolute bg-yellow-500" />
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2 md:px-4 text-center md:text-left lg:pl-12">
        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          {data.title}
        </h3>
        <p className="sm:text-lg mt-6">{data.description}</p>
      </div>
    </div>
  );
}

const AboutInformation = [
  {
    title: "Začátek",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla ",
    imageUrl: "/assets/construction1.webp",
  },
  {
    title: "Práce",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla ",
    imageUrl: "/assets/construction1.webp",
  },
  {
    title: "Snaha",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla ",
    imageUrl: "/assets/construction1.webp",
  },
];

export default function About() {
  return (
    <section className="text-black flex items-center justify-center py-16 min-h-screen w-full body-font">
      <div className="w-full">
        <div className="text-center">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Kdo jsme?
          </h2>
          <div className="py-16 flex flex-col gap-8">
            {AboutInformation.map((info, index) => (
              <AboutCard key={index} i={index} data={info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
