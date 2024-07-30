import { Black_Ops_One } from "next/font/google";
import Link from "next/link";
import React from "react";
import HeaderClientParts from "./HeaderClientParts";
import { constHeader } from "@/constants/cs_main";

const black_ops_one = Black_Ops_One({ subsets: ["latin"], weight: "400" });

export default function Header({ isWhite = false }) {
  return (
    <header className="bg-transparent">
      <div className="max-w-container py-8 flex items-center">
        <Link
          className="inline-flex flex-1 text-yellow-500 items-center gap-2 text-primary"
          href="/"
        >
          <span className="sr-only">{constHeader.srMain}</span>
          <span className={`${black_ops_one.className} uppercase text-3xl`}>
            {constHeader.companyName}
          </span>
        </Link>
        <HeaderClientParts isWhite={isWhite} />
      </div>
    </header>
  );
}
