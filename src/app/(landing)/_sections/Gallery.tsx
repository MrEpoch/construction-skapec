import React from "react";
import Image from "next/image";
import GalleryComponent from "@/components/shared/GalleryComponent";

const images = [
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    width: 1200,
    height: 800,
  },
  {
    largeURL: "/assets/construction1.webp",
    thumbnailURL: "/assets/construction1.webp",
    title: "Stavby",
    width: 1200,
    height: 800,
  },
];

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Naše hotové stavby
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="">
          <GalleryComponent images={images} galleryID="gallery-1" />
        </div>
      </div>
    </section>
  );
}
