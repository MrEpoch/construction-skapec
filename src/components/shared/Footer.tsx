import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/assets/construction1.webp"
          width={800}
          height={800}
          alt="Stavební ukázka"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {" "}
                Zavolejte nám{" "}
              </span>

              <Link
                href="#"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </Link>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Od pondělí do pátku: 9h - 17h</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkedin</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Služby</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    1on1 Coaching{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Company Review{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Accounts Review{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    HR Consulting{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Společnost</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    O nás{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about#team"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Tým{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. Skapec. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
