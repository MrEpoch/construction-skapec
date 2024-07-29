import Gallery from "@/app/(landing)/_sections/Gallery";
import React from "react";
import Landing from "./_sections/Landing";
import Image from "next/image";
import Construction1 from "../../../../public/assets/construction1.webp";
import Services from "./_sections/Services";

export default function page() {
  return (
    <main className="h-view-container">
      <Image
        className="w-full h-72 object-cover"
        alt="hero"
        src={Construction1}
      />
      <div className="max-w-container">
        <Landing />
        <Services />
        <Gallery />
      </div>
    </main>
  );
}
