import React from "react";
import ContactInfo from "./_sections/ContactInfo";
import Faq from "./_sections/FAQ";

export default function page() {
  return (
    <main className="h-view-container">
      <div className="max-w-container flex flex-col gap-8">
        <ContactInfo />
        <Faq />
      </div>
    </main>
  );
}
