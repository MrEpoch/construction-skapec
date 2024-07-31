import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { constHeader } from "@/constants/cs_main";
import Image from "next/image";

export default function HeaderClientParts({ isWhite = false }) {
  return (
    <div className="flex flex-1 items-center justify-end ">
      <nav aria-label="Global" className="relative hidden md:block">
        <ul
          className="flex header items-center gap-6 text-sm
    "
        >
          {constHeader.links.map((link) => (
            <li key={link.href}>
              <Link
                aria-label={link.label}
                className={`transition text-${isWhite ? "white" : "black"}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`rounded hover:bg-${isWhite ? "transparent" : "black"} bg-${isWhite ? "transparent" : "black"} md:hidden`}
          >
            <MenuIcon className="h-6 w-6 text-white" />
            <span className="sr-only">{constHeader.srNav}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <Link href="#" prefetch={false}>
            <Image
              src={constHeader.companyLogo}
              width={60}
              height={60}
              className="object-cover w-8 h-8"
              alt="logo"
            />
            <span className="sr-only">{constHeader.companyName}</span>
          </Link>
          <ul
            className="flex flex-col items-center gap-6 py-8 text-sm
    "
          >
            {constHeader.links.map((link) => (
              <li key={link.href}>
                <Link
                  className={`transition text-black`}
                  aria-label={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
