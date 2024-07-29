import React from "react";
import Landing from "./_sections/Landing";
import Team from "./_sections/Team";
import About from "./_sections/About";
import CTA from "@/components/shared/CTA";

export default function page() {
  return (
    <main className="h-view-container">
      <div className="max-w-container">
        <Landing />
        <About />
        <CTA />
        <Team />
      </div>
    </main>
  );
}
