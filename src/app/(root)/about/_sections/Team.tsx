import { constAboutPage } from "@/constants/cs_main";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamMemberCardInfo {
  name: string;
  jobDescription: string;
  imageUrl: string;
  description: string;
  FacebookLink: string;
  LinkedInLink: string;
}

function TeamMemberCard({ info }: { info: TeamMemberCardInfo }) {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
          alt={info.name}
          width={400}
          height={400}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={info.imageUrl}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {info.name}
          </h2>
          <h3 className="text-gray-500 mb-3">{info.jobDescription}</h3>
          <p className="mb-4">{info.description}</p>
          <span className="inline-flex items-center">
            <Link href={info.FacebookLink} className="text-gray-500">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href={info.LinkedInLink} className="ml-2 text-gray-500">
              <Linkedin className="w-5 h-5" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="text-gray-600 min-h-screen w-full body-font">
      <div className="w-full">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-2xl py-4 text-gray-900 tracking-widest">
            {constAboutPage.team.heading}
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {constAboutPage.team.para}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {constAboutPage.team.TeamMembers.map((member, index) => (
            <TeamMemberCard key={index} info={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
