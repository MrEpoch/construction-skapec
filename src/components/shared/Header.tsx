import { Black_Ops_One } from "next/font/google";
import Link from "next/link";
import React from "react";
import HeaderClientParts from "./HeaderClientParts";
import Image from "next/image";

const black_ops_one = Black_Ops_One({ subsets: ["latin"], weight: "400" });

export default function Header({ isWhite = false }) {
  return (
    <header className="bg-transparent">
      <div className="max-w-container py-8 flex items-center">
        <Link
          className="inline-flex flex-1 text-yellow-500 items-center gap-2 text-primary"
          href="/"
        >
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
          <span className={`${black_ops_one.className} uppercase text-3xl`}>
            Skapec
          </span>
        </Link>
        <HeaderClientParts isWhite={isWhite} />
      </div>
    </header>
  );
}
