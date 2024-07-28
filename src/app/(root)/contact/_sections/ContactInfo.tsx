import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Globe, Mail, Phone } from "lucide-react";
import React from "react";

const contactMethods = [
  {
    icon: Globe,
    contact: "Praha, Neznámá 123.",
    title: "Naše kancelář:",
  },
  {
    icon: Phone,
    contact: "+1 (555) 000-000",
    title: "Telefon:",
  },
  {
    icon: Mail,
    contact: "podpora@priklad.com",
    title: "Email:",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h1 className="text-primary font-semibold text-lg text-start">
            Kontakt
          </h1>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Kontaktujte nás a my vám poradíme
          </p>
        </div>
        <div>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
            {contactMethods.map((item, idx) => (
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
            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d127179.30650160482!2d-26.35755221343306!3d52.43548334989852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d52.4037188!2d-27.230145!4m3!3m2!1d52.451518199999995!2d-26.4985039!5e0!3m2!1scs!2scz!4v1722158915803!5m2!1scs!2scz"
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
