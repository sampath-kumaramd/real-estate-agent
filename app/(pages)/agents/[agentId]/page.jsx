"use client";

import SubNavigation from "@/components/subNavigation";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import Image from "next/image";
import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import SocialMedia from "@/components/socialMedia";

const agentData = {
    id: 1,
    name: "Peter Sørensen",
    address: "Statsautoriseret ejendomsmægler",
    call: "+45 7070 4012",
    image: "/assets/agent.png",
    email: "peter@dinmaegler.com",
    description1:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    description2:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.",
  }


function Agent() {
  return (
    <>
      <SubNavigation title="Kontakt en medarbejder" />
      <div className="flex mx-96 justify-between mb-24">
        <div className="flex flex-col p-8 w-[45rem] h-auto border border-gray-300">
          <div className="flex">
            <div className="w-2/5">
              <Image
                src={agentData.image}
                alt="description_of_image"
                width="280"
                height="200"
              />
               <div className="flex absolute z-10 bottom-48 bg-[#162A41] w-28 h-10 p-3 justify-between">
                  <SocialMedia />
                </div>
            </div>
            <div className="w-3/5 pl-8">
              <div className="flex justify-between">
                <div className="font-bold text-2xl">{agentData.name}</div>
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/heart.svg"
                    alt="description_of_image"
                    width="15"
                    height="15"
                  />
                </div>
              </div>
              <div className="text-gray-400 text-lg">
                {agentData.address}
              </div>
              <Separator className="bg-gray-300 w-1/5 h-[0.08rem] my-5" />
              <div className="flex">
                <Image
                  src="/icons/call_blue.svg"
                  alt="description_of_image"
                  width="22"
                  height="22"
                />
                <div className="pl-3 text-lg">{agentData.call}</div>
              </div>
              <div className="flex mt-4">
                <Image
                  src="/icons/paper-plan_blue.svg"
                  alt="description_of_image"
                  width="22"
                  height="22"
                />
                <div className="pl-3 text-lg">{agentData.email}</div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="text-lg font-bold mt-7 gap-1">
              Om {agentData.name}
            </div>
            <Separator className="bg-[#162A41] w-[3.5rem] h-[0.25rem] mt-4" />
            <div className="text-lg my-5">
              {agentData.description1}
              <br />
              <br />
              {agentData.description2}
            </div>
          </div>
          <div className="border border-gray-200 rounded h-auto p-10">
            <div className="text-lg font-bold gap-1">
              Kontakt {agentData.name}
            </div>
            <Separator className="bg-[#162A41] w-[3.5rem] h-[0.25rem] mt-4" />
            <ContactUsForm isAgant='false'/>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 bg-sky-50 h-auto w-[24rem] p-7">
            <div className="text-2xl font-bold">Search Property</div>
            <Separator className="bg-gray-300 w-full h-[0.05rem]" />
            <div className="relative">
              <Image
                src="/icons/search.svg"
                alt="description_of_image"
                width="25"
                height="25"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              />
              <Input
                placeholder="Search"
                className="pl-10 text-[1rem] rounded"
              />
            </div>
          </div>
          <div className="flex flex-col bg-[#162A41] h-[30rem] w-[24rem] py-24 px-12 items-center text-center justify-center gap-7">
            <p className="text-white text-[2rem] leading-10">
              Find The Best <br /> Property <br />
              For Rent Or Buy
            </p>
            <Separator className=" bg-white w-[3rem] h-[0.3rem]" />
            <p className="text-white text-lg">Call Us Now</p>
            <p className="text-white text-[2rem] leading-12">+00 123 456 789</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agent;
