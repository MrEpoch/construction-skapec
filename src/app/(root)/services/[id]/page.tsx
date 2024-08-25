import CTA from "@/components/shared/CTA";
import { constServicesTypePage } from "@/constants/cs_main";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";

export default function Page({ params }: { params: { id: string } }) {
  const paramsValidationZod = z.string().min(1);
  if (!params.id) redirect("/services");
  const paramsValidation = paramsValidationZod.safeParse(params.id);
  if (!paramsValidation.success) redirect("/services");

  const data =
    constServicesTypePage[
      paramsValidation.data as keyof typeof constServicesTypePage
    ];
  if (!data) redirect("/services");
  return (
    <main className="h-view-container">
      <div className="max-w-container flex flex-col gap-16">
        <h1 className="text-3xl font-semibold">{data?.heading}</h1>
        <p className="text-lg">{data?.para1}</p>
        <Image
          src={data?.imgSrc}
          alt={`${data?.heading}`}
          width={1200}
          height={700}
          className="w-full h-72 object-cover"
        />
        <h2 className="text-3xl font-semibold">{data?.heading2}</h2>
        <p className="text-lg">{data?.para2}</p>
        <CTA />
      </div>
    </main>
  );
}
