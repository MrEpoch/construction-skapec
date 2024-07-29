import { constContactPage } from "@/constants/cs_main";
import React from "react";

export default function ContactInfo() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h1 className="text-primary font-semibold text-lg text-start">
            {constContactPage.contactInfo.heading}
          </h1>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {constContactPage.contactInfo.para}
          </p>
        </div>
        <div>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
            {constContactPage.contactInfo.contactMethods.map((item, idx) => (
              <li key={idx}>
                <h4 className="text-gray-800 text-lg font-medium">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-x-3">
                  <div className="flex-none text-gray-400">
                    <item.icon />
                  </div>
                  <p>{item.contact}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-8 w-full flex items-center justify-center">
          <iframe
            src={constContactPage.contactInfo.iframeSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
