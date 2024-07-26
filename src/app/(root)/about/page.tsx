import React from "react";
import Landing from "./_sections/Landing";
import Team from "./_sections/Team";

export default function page() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Landing />
      <Team />
    </main>
  );
}
