import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Construction, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

const links = [
  { href: "/", label: "Domov" },
  { href: "/about", label: "O nás" },
  { href: "/careers", label: "Kariéra" },
  { href: "/services", label: "Služby" },
  { href: "/contact", label: "Kontakt" },
];

export default function HeaderClientParts({ isWhite = false }) {
  return (
    <div className="flex flex-1 items-center justify-end ">
      <nav aria-label="Global" className="relative hidden md:block">
        <ul
          className="flex header items-center gap-6 text-sm
    "
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
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
            <span className="sr-only">Navigační menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <Link href="#" prefetch={false}>
            <Construction className="h-6 w-6" />
            <span className="sr-only">Skapec</span>
          </Link>
          <ul
            className="flex flex-col items-center gap-6 py-8 text-sm
    "
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link className={`transition text-black`} href={link.href}>
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
