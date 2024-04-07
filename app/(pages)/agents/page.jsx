import SubNavigation from "@/components/subNavigation";
import React from "react";
import Image from "next/image";
import Link from 'next/link';

import { Card, CardContent } from "@/components/ui/card";

const agentsData = [
  {
    id: 1,
    name: "Grant Marshall",
    address: "Ejendomsmægler, MDMS ",
  },
  {
    id: 2,
    name: "Grant Marshall",
    address: "Ejendomsmægler, MDMS ",
  },
  {
    id: 3,
    name: "Grant Marshall",
    address: "Ejendomsmægler, MDMS ",
  },
  {
    id: 4,
    name: "Grant Marshall",
    address: "Ejendomsmægler, MDMS ",
  },
  {
    id: 5,
    name: "Grant Marshall",
    address: "Ejendomsmægler, MDMS ",
  },
  {
    id: 6,
    name: "Grant Marshall",
    address: "Ejendomsmægler, MDMS ",
  },
];

function Agents() {
  return (
    <div className="h-auto">
      <SubNavigation title="Medarbejdere i Roskilde" />
      <div className="flex flex-wrap justify-between mx-96 mb-12">
        {agentsData.map((agent, index) => (
          <Card key={index} className="w-[21.5rem] m-4">
            <CardContent className="flex flex-col items-center justify-center p-0 h-auto w-full rounded border border-gray-200">
              <Image
                src="/assets/agentProfile.svg"
                alt="description_of_image"
                width="400"
                height="200"
              />
              <p className="font-bold text-2xl pt-5"><Link href={`/agents/${agent.id}`}>{agent.name}</Link></p>
              <p className="text-gray-400 text-lg">{agent.address}</p>
              <div className="flex gap-5 mb-5 mt-6">
                <Image
                  src="/icons/message.svg"
                  alt="description_of_image"
                  width="20"
                  height="20"
                />
                <Image
                  src="/icons/linkedin.svg"
                  alt="description_of_image"
                  width="20"
                  height="20"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Agents;
