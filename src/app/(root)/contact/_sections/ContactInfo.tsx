import { Globe, Mail, Phone } from "lucide-react";
import React from "react";

const contactMethods = [
  {
    icon: Globe,
    contact: "Mountain View, California, United State.",
    title: "Our office",
  },
  {
    icon: Phone,
    contact: "+1 (555) 000-000",
    title: "Phone",
  },
  {
    icon: Mail,
    contact: "Support@example.com",
    title: "Email",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="text-primary font-semibold">Kontakt</h3>
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
      </div>
    </section>
  );
}
