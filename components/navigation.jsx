import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navigation({}) {
  return (
    <>
      <div className="bg-[#162A41] h-auto py-3 text-white text-[12px]">
        <div className="mx-64 justify-between flex">
          <div className="flex gap-8">
            <div className="flex gap-3">
              <Image
                src="/icons/paper-plane.png"
                alt="description_of_image"
                width="15"
                height="15"
              />
              <p>4000@dinmaegler.com</p>
            </div>
            <div>
              <div className="flex gap-3">
                <Image
                  src="/icons/call.png"
                  alt="description_of_image"
                  width="15"
                  height="15"
                />
                <p>+45 7070 4000</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-3">
              <Image
                src="/icons/user.png"
                alt="description_of_image"
                width="15"
                height="15"
              />
              <p>Log ind</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-64 h-auto py-3 flex justify-between">
        <div className="flex">
          <Image
            src="/icons/logo.png"
            alt="description_of_image"
            width="180"
            height="10"
          />
        </div>

        <div className="flex gap-8 font-[14px]">
          <Link href="/">Boliger til salg</Link>
          <Link href="/agents">Mæglere</Link>
          <Link href="/favorites">Mine favoritter</Link>
          <Link href="/contact-us">Kontakt os</Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
