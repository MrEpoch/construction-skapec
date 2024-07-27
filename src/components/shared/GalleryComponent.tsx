"use client";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import Link from "next/link";

export default function GalleryComponent({
  images,
  galleryID,
}: {
  images: any;
  galleryID: string;
}) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="flex flex-wrap -m-4" id={galleryID}>
      {images.map((image, index) => (
        <Link
          href={image.largeURL}
          key={galleryID + "-" + index}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
          className="lg:w-1/3 sm:w-1/2 p-4"
        >
          <div className="flex relative">
            <Image
              src={image.thumbnailURL}
              className="absolute inset-0 w-full h-full object-cover object-center"
              alt={image.title}
              width={image.width}
              height={image.height}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition">
              <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                {image.title}
              </h2>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h2>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
