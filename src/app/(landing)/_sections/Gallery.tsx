import React from "react";
import GalleryComponent from "@/components/shared/GalleryComponent";
import { constHomePage } from "@/constants/cs_main";

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full">
      <div className="py-24">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font pb-4 text-gray-900">
            {constHomePage.gallery.heading}
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {constHomePage.gallery.para}
          </p>
        </div>
        <div className="">
          <GalleryComponent
            images={constHomePage.gallery.galleryImages}
            galleryID="gallery-1"
          />
        </div>
      </div>
    </section>
  );
}
