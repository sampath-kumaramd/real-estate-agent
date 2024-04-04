import SubNavigation from "@/components/subNavigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function ContactUs() {
  return (
    <>
      <SubNavigation title="Kontakt os" />
      <div className="mx-64">
        <div className="text-2xl font-bold mb-4">
          Vi sidder klar til at besvare dine spørgsmål
        </div>
        <div className="w-[5.5rem] h-1 bg-[#162A41]"></div>
        <div className="text-sm mt-7 mb-10">
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
          med at sælge sin bolig.
          <br /> Vores medarbejdere sider klar alle ugens dage til at svare på
          dine spørgsmål.
        </div>
        <div className="flex justify-between gap-10 h-[30rem] pb-10">
          <div className="border-2 border-[#D3DEE8] w-[40rem]">
            <Button variant="default" size="default"/>
          </div>
          <div className="border-2 border-[#D3DEE8] w-[20rem]">2</div>
        </div>
      </div>
      <div>
        <Image
          src="/assets/map.png"
          alt="description_of_image"
          width="1600"
          height="15"
        />
      </div>
    </>
  );
}

export default ContactUs;
