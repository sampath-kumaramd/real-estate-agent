"use client";

import SubNavigation from "@/components/subNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const propertyData = [
  {
    id: 1,
    type: "Villa",
    name: "Klosterengen 234",
    price: "4.567.890",
    image: "/assets/villa_1.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "A",
    letterBG: "bg-lime-500",
  },
  {
    id: 2,
    type: "Villa",
    name: "Lønbjergparken 22 • Vindinge",
    price: "4.567.890",
    image: "/assets/villa_2.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "B",
    letterBG: "bg-cyan-500",
  },
  {
    id: 3,
    type: "Villa",
    name: "Lønbjergparken 22 • Vindinge",
    price: "4.567.890",
    image: "/assets/villa_3.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "B",
    letterBG: "bg-cyan-500",
  },
  {
    id: 4,
    type: "Villa",
    name: "Lønbjergparken 22 • Vindinge",
    price: "4.567.890",
    image: "/assets/villa_4.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "B",
    letterBG: "bg-red-500",
  },
  {
    id: 5,
    type: "Villa",
    name: "Klosterengen 234",
    price: "4.567.890",
    image: "/assets/villa_1.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "A",
    letterBG: "bg-lime-500",
  },
  {
    id: 6,
    type: "Villa",
    name: "Lønbjergparken 22 • Vindinge",
    price: "4.567.890",
    image: "/assets/villa_2.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "B",
    letterBG: "bg-cyan-500",
  },
  {
    id: 7,
    type: "Villa",
    name: "Lønbjergparken 22 • Vindinge",
    price: "4.567.890",
    image: "/assets/villa_3.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "B",
    letterBG: "bg-cyan-500",
  },
  {
    id: 8,
    type: "Villa",
    name: "Lønbjergparken 22 • Vindinge",
    price: "4.567.890",
    image: "/assets/villa_4.png",
    address: "4000 Roskilde",
    roomsCount: 5,
    area: 156,
    energyLable: "B",
    letterBG: "bg-red-500",
  },
];

function PropertyList() {
  const [properties, setProperties] = useState(propertyData);

  const handleFavouriteClick = (id) => {
    setProperties(
      properties.map((property) =>
        property.id === id
          ? { ...property, isFavourite: !property.isFavourite }
          : property
      )
    );
  };

  
  return (
    <div className="h-auto mb-24">
      <SubNavigation title="Boliger til salg" />
      <div className="mx-96">
        <div className="text-2xl font-bold">Søg efter dit drømmehus</div>
        <Separator className="bg-[#162A41] w-[3.5rem] h-[0.25rem] mt-2 mb-4 " />
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <div className="text-lg">Ejendomstype</div>
            <div className="pb-10">
              <Select>
                <SelectTrigger className="w-[320px] rounded-none text-gray-400 h-12">
                  <SelectValue placeholder="Ejendomstype" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sample</SelectLabel>
                    <SelectItem value="sample1">Sample1</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Pris-interval</div>
            <div>
              <Slider defaultValue={[33, 20]} max={100} step={1} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-7 justify-between">
          {properties.map((property, index) => (
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
                    <Image
                      src={
                        property.isFavourite
                          ? "/icons/black_heart.svg"
                          : "/icons/heart.svg"
                      }
                      alt="description_of_image"
                      width="15"
                      height="15"
                      onClick={() => handleFavouriteClick(property.id)}
                    />
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
                    <div className="font-bold text-xl">
                      Kr. {property.price}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
