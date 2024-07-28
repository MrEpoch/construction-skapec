import React from "react";
import CareerCards from "./_sections/CareerCards";
import CareerWithUs from "./_sections/CareerWithUs";

export default function page() {
  return (
    <main className="h-view-container">
      <div className="max-w-container">
        <CareerCards />
        <CareerWithUs />
      </div>
    </main>
  );
}
