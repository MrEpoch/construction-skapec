import React from "react";
import GalleryComponent from "@/components/shared/GalleryComponent";

const images = [
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    heading: "Domovská stavba",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    heading: "Domovská stavba",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    heading: "Domovská stavba",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    heading: "Domovská stavba",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    heading: "Domovská stavba",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    heading: "Domovská stavba",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    width: 1200,
    height: 800,
  },
];

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full">
      <div className="py-24">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font pb-4 text-gray-900">
            Naše hotové stavby
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="">
          <GalleryComponent images={images} galleryID="gallery-1" />
        </div>
      </div>
    </section>
  );
}
