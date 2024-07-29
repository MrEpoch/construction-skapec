"use client";
import React from "react";
import { CookieIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookieConsent({
  demo = false,
  content,
  onAcceptCallback = () => {
    localStorage.setItem("item", "true");
    window.location.reload();
  },
  onDeclineCallback = () => {
    localStorage.setItem("item", "false");
  },
}: {
  content: any;
  onAcceptCallback?: any;
  onDeclineCallback?: any;
  demo?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (
        document.cookie.includes("cookieConsent=true") ||
        document.cookie.includes("cookieConsent=false")
      ) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed z-[200] bottom-0 right-0 sm:right-4 sm:bottom-4 w-full sm:max-w-md transition-transform duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden",
      )}
    >
      <div className="bg-secondary rounded-md m-2">
        <div className="grid gap-2">
          <div className="border-b border-border h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">{content.heading}</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <p className="text-sm font-normal">
              {content.para}
              <br />
              <br />
              <Link href={content.learnMore} className="text-xs underline">
                {content.learnMoreText}
              </Link>
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border bg-background/20">
            <Button onClick={accept} className="w-full">
              {content.btnAccept}
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              {content.btnDecline}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
