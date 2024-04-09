"use client";

import React from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

import SocialMedia from "@/components/socialMedia";

import { propertyData } from "@data/property-data";
import { agentData } from "@data/property-data";
import { imagePaths } from "@data/property-data";

function Property() {
  return (
    <div className="flex flex-col">
      <Image
        src={propertyData.image}
        alt="description_of_image"
        width="1950"
        height="200"
      />
      <div className="flex mx-96 mt-6 justify-between">
        <div className="flex flex-col text-xl font-semibold gap-1">
          <p>{propertyData.name}</p>
          <p>{propertyData.address}</p>
        </div>
        <div className="flex gap-10">
          {imagePaths.map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`description_of_image_${index}`}
              width="40"
              height="10"
            />
          ))}
        </div>
        <div className="font-semibold text-3xl mt-3">
          Kr. {propertyData.price}{" "}
        </div>
      </div>
      <Separator className="mx-96 bg-gray-300 w-auto h-[0.06rem] my-6 " />
      <div className="mx-96 flex justify-between font-medium">
        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>Sagsnummer: </p>
            <p>Sagsnummer: </p>
            <p>Grundareal: </p>
            <p>Rum/ Værelser: </p>
            <p>Antal plan: </p>
          </div>
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>{propertyData.caseNumber}</p>
            <p>
              {propertyData.livingArea} m<sup className="text-xs">2</sup>
            </p>
            <p>
              {propertyData.groundArea} m<sup className="text-xs">2</sup>
            </p>
            <p>{propertyData.rooms}</p>
            <p>{propertyData.numberPlan}</p>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>Kælder: </p>
            <p>Byggeår: </p>
            <p>Ombygget: </p>
            <p>Energimærke: </p>
          </div>
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>-</p>
            <p>
              {propertyData.yearOfConstruction} m
              <sup className="text-xs">2</sup>
            </p>
            <p>
              {propertyData.Rebuilt} m<sup className="text-xs">2</sup>
            </p>
            <p>{propertyData.energyLable}</p>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>udbetaing: </p>
            <p>Brutto ex ejerudgift: </p>
            <p>Netto ex ejerudgift: </p>
            <p>Ejerudgifter: </p>
          </div>
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>Kr. {propertyData.payout}</p>
            <p>
              Kr. {propertyData.grossExOwnersExpense} m
              <sup className="text-xs">2</sup>
            </p>
            <p>
              Kr. {propertyData.netExOwnersExpense} m
              <sup className="text-xs">2</sup>
            </p>
            <p>Kr. {propertyData.ownersExpense}</p>
          </div>
        </div>
      </div>
      <div className="flex mx-96 py-16 gap-12">
        <div className="flex flex-col gap-3 w-1/2">
          <p className="text-2xl font-semibold">Beskrivelse</p>
          <p className="text-lg">{propertyData.description1}</p>
          <p className="text-lg">{propertyData.description2}</p>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <p className="text-2xl font-semibold">Ansvalig mægler</p>
          <div className="flex border border-gray-200 h-auto p-8">
            <div className="flex">
              <div className="flex flex-col w-3/5 relative">
                <Image
                  src={agentData.image}
                  alt="description_of_image"
                  width="300"
                  height="300"
                />
                <div className="flex absolute z-10 bottom-5 bg-[#162A41] w-28 h-9 p-2 justify-between">
                  <SocialMedia />
                </div>
              </div>

              <div className="w-3/5 ml-8">
                <div className="flex justify-between">
                  <div className="font-bold text-2xl">{agentData.name}</div>
                </div>
                <div className="text-gray-400 text-base">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
