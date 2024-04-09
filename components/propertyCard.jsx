"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertyCard({ property, index }) {
  
  const [isFavourite, setIsFavourite] = useState(property.isFavourite);

  const toggleIsFavorite = () => {
    setIsFavourite(!isFavourite);
  };


  return (
    <>
      <Card key={index} className="w-[34.5rem] border-none">
        <CardContent className="flex flex-col p-0 h-auto w-full rounded shadow-md">
          <Link href={`/property-list/${property.id}`}>
            <Image
              src={property.image}
              alt="description_of_image"
              width="560"
              height="200"
              className="p-0 m-0"
            />
          </Link>
          <div className="flex flex-end top-0 w-full h-full p-5 mb-[-4rem] justify-end">
            <div className="w-10 h-10 z-10 mt-[-15rem] bg-white rounded-full flex items-center justify-center">
              <button onClick={toggleIsFavorite}>
                <Image
                  src={
                    isFavourite
                      ? "/icons/black_heart.svg"
                      : "/icons/heart.svg"
                  }
                  alt="description_of_image"
                  width="15"
                  height="15"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <p className="font-bold text-xl pt-5">{property.name}</p>
            <p className="text-lg">{property.address}</p>
            <div className="flex gap-1">
              <p className="font-bold text-lg">{property.type} . </p>
              <p className="text-lg">Ejerudgift :{property.price} kr </p>
            </div>
            <Separator />
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div
                  className={`h-7 w-7 ${property.letterBG} justify-center items-center flex text-white font-bold`}
                >
                  {property.energyLable}
                </div>
                <div className="flex text-sm pt-1">
                  {property.roomsCount} værelser . {property.area} m
                  <sup className="text-xs">2</sup>
                </div>
              </div>
              <div className="font-bold text-xl">Kr. {property.price}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
