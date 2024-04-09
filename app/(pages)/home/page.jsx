import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const homepageIcon = [
  {
    src: "/icons/homepage_icons/house.svg",
    name: "boliger solgt",
    count: 4826,
  },
  {
    src: "/icons/homepage_icons/home.svg",
    name: "boliger til salg",
    count: 158,
  },
];

const iconList1 = [
  {
    src: "/icons/iconList1/1.svg",
    topic: "Bestil et salgstjek",
    description: "",
  },
  {
    src: "/icons/iconList1/2.svg",
    topic: "74 butikker",
    description:
      "Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.",
  },
  {
    src: "/icons/iconList1/3.svg",
    topic: "Tilmeld køberkartotek",
    description:
      "Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.",
  },
];

function HomePage() {
  return (
    <div>
      <div className="h-auto">
        {/* hero image section */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/Hero.png"
            alt="description_of_image"
            width="1920"
            height="10"
          />
          <div className="absolute z-10 text-[3rem] text-white font-bold">
            Søg efter din drømmebolig
          </div>
          <div className="flex flex-col absolute z-10 bottom-[11rem] w-[55rem] h-auto bg-white p-6">
            <div className="text-lg font-semibold gap-1">
              Søg blandt 158 boliger til salg i 74 butikker{" "}
            </div>
            <Separator className="bg-black w-[3.5rem] h-[0.25rem] mt-2 mb-4" />
            <div className="text-lg">Hvad skal din næste bolig indeholde</div>
            <div className="flex gap-4">
              <Input
                placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                className="w-[45rem] rounded text-base h-12"
              />
              <Button className="h-12 w-24">Søg</Button>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="flex flex-col h-[60rem] py-28 mx-96">
          <div className="flex">
            <div className="w-1/2">
              <Image
                src="/assets/family.png"
                alt="description_of_image"
                width="450"
                height="300"
                className="absolute"
              />
              <div className="relative z-10 left-8 top-8 border-[0.8rem] border-[#162A41] w-[28.5rem] h-[30rem]">
                <div className="flex flex-col items-center justify-center relative z-10 gap-2 left-56 top-64 border-[0.8rem] bg-[#162A41] border-[#162A41] w-[13.5rem] h-[13rem] p-5 text-white">
                  <p className="text-6xl font-bold">38+</p>
                  <p className="text-2xl">års mægler-</p>
                  <p className="text-2xl">erfaring</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-4xl font-bold w-full mt-10">
                Vi har fulgt danskerne hjem
                <br /> i snart 4 årtier
              </p>
              <p className="text-2xl font-semibold pt-10">
                Det synes vi siger noget om os!
              </p>
              <p className="pt-5 text-[1.1rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has normal
                distribution.
              </p>
              <p className="pt-5 text-[1.1rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="w-4/5">
                <div className="flex flex-wrap justify-between mt-12">
                  {homepageIcon.map((icon, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="w-16 h-16 bg-sky-100 rounded-none flex items-center justify-center">
                        <Image
                          src={icon.src}
                          alt={icon.name}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-2xl font-semibold">{icon.count}</p>
                        <p className="text-lg">{icon.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Separator className="my-24 border" />
          </div>
          <div className="flex justify-between">
            {iconList1.map((icon, index) => (
              <div key={index} className="flex gap-5">
                <div className="w-12 h-12 bg-sky-100 rounded-none flex items-center justify-center">
                  <Image src={icon.src} alt="sample" width={28} height={28} />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-xl font-semibold">{icon.topic}</p>
                  <p className="text-base w-72">{icon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* property section */}
        <div className="bg-[#F8F8FB]">
          <div className="h-auto py-24 mx-96">
            <div className="flex flex-col items-center justify-center gap-7">
              <p className="text-4xl font-bold text-[#162A41]">
                Udvalgte Boliger
              </p>
              <p className="text-lg text-center font-medium">
                There are many variations of passages of Lorem Ipsum available
                but the this in <br /> majority have suffered alteration in some
              </p>
            </div>
            <div className="h-[38rem]"></div>
            <div className="flex w-full items-center justify-center mt-10">
              <Button
                type="submit"
                className="w-48 rounded bg-[#162A41] h-16 text-[1.1rem]"
              >
                Se alle boliger
              </Button>
            </div>
          </div>
        </div>

        {/* Subscribe section */}
        <div className="relative flex flex-col items-center justify-center">
          <Image
            src="/assets/Subscribe.png"
            alt="description_of_image"
            width="1920"
            height="10"
          />
          <div className="absolute z-10 flex flex-row gap-12">
            <div className="text-3xl top-9 text-white font-bold">
              Tilmeld dig vores nyhedsbrev og
              <br /> hold dig opdateret på boligmarkedet
            </div>
            <div>
              <div className="relative">
                <Input
                  placeholder="Indtast din email adresse"
                  className="pl-10 text-[1rem] rounded w-[30rem] h-[4rem]"
                />
                <Image
                  src="/icons/arrow.svg"
                  alt="description_of_image"
                  width="25"
                  height="25"
                  className="absolute ml-8 left-96 top-1/2 transform -translate-y-1/2 h-12 w-8 text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* agent list section */}
        <div className="bg-white h-auto py-24 mx-96">
          <div className="flex flex-col items-center justify-center gap-7">
            <p className="text-4xl font-bold text-[#162A41]">
              Mød vores engagerede medarbejdere
            </p>
            <p className="text-lg text-center font-medium">
              Din Mægler er garant for altid veluddannet assistance i dit
              boligsalg. <br /> Kontakt en af vores medarbejdere.
            </p>
          </div>
          <div className="h-[38rem]"></div>
          <div className="flex w-full items-center justify-center mt-10">
            <Button
              type="submit"
              className="w-48 rounded bg-[#162A41] h-16 text-[1.1rem]"
            >
              Se alle mæglere
            </Button>
          </div>
        </div>

        <div className="bg-[#162A41] mt-10">
          <div className="flex justify-between mx-96">
            <div className="flex flex-col text-white py-16 gap-5">
              <div className="text-2xl font-bold">
                Hold dig opdateret <br />
                på salgsprocessen
              </div>
              <p className="text-[0.7rem]">
                Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med
                den <br /> ansvarlige mægler eller butik med vores app. Her kan
                du også se statistik på <br />
                interessen for din bolig i alle vores salgskanaler.
              </p>
              <div className="flex gap-5">
                <button className="flex bg-white rounded w-36 text-[#162A41]">
                  <div className="flex gap-2 py-2 mx-auto">
                    <Image
                      src="/icons/play-store.png"
                      alt="description_of_image"
                      width="20"
                      height="15"
                    />
                    <p className="text-[0.8rem] font-bold">Google Play</p>
                  </div>
                </button>
                <button className="flex bg-[#162A41] rounded w-36 border border-white text-white">
                  <div className="flex gap-2 py-2 mx-auto">
                    <Image
                      src="/icons/apple-store.png"
                      alt="description_of_image"
                      width="20"
                      height="15"
                    />
                    <p className="text-[0.8rem] font-bold">Apple</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex pt-10">
              <Image
                src="/assets/phone-LS.png"
                alt="description_of_image"
                width="150"
                height="15"
                className="h-72 w-52 mr-[-4rem] z-10"
              />
              <Image
                src="/assets/phone-RS.png"
                alt="description_of_image"
                width="150"
                height="15"
                className="h-[18rem] w-48"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
