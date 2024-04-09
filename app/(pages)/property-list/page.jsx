"use client";

import SubNavigation from "@/components/subNavigation";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useState } from "react";
import { propertiesData } from "@data/property-data";

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
import PropertyCard from "@/components/propertyCard";


function PropertyList() {
  const [properties, setProperties] = useState(propertiesData);

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
            <PropertyCard key={index} property={property}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
