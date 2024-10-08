import { constHomePage } from "@/constants/cs_main";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Review() {
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="flex flex-col w-full">
        <div className="w-full mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              width={1200}
              height={800}
              alt={""}
              className="object-cover object-center h-full w-full"
              src="/assets/construction1.webp"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  {constHomePage.review.personName}
                </h2>
                <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                <p className="text-base">{constHomePage.review.personPara}</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                {constHomePage.review.para}
              </p>
              <Link
                href="/services"
                className="text-primary inline-flex items-center"
              >
                {constHomePage.review.link1}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
