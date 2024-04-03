import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer({}) {
  return (
    <>
      <div className="bg-[#F8F8FB] h-[25rem]">
        <div className="mx-64 z-10 py-10">
          <Image
            src="/icons/logo.png"
            alt="description_of_image"
            width="220"
            height="18"
          />
          <div className="text-sm pt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <br /> alteration in some form, by
            injected humour, or randomised words.
          </div>
          <div className="flex gap-36 pt-8">
            <div className="w-[25rem] h-auto bg-white shadow-sm p-12">
              <div className="flex flex-col gap-8">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#162A41] rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/call.png"
                      alt="description_of_image"
                      width="15"
                      height="15"
                    />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-[#7B7B7B]">
                      Ring til os
                    </div>
                    <div className="text-sm font-bold mt-1">+45 7070 4000</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#162A41] rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/paper-plane.png"
                      alt="description_of_image"
                      width="15"
                      height="15"
                    />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-[#7B7B7B]">
                      Send en mail
                    </div>
                    <div className="text-sm font-bold mt-1">
                      4000@dinmaegler.com
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#162A41] rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/location.png"
                      alt="description_of_image"
                      width="15"
                      height="15"
                    />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-[#7B7B7B]">Butik</div>
                    <div className="text-sm font-bold mt-1">
                      Stændertorvet 78, 4000 Roskilde
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm mt-8">
                Din Mægler Roskilde, er din <br />
                boligibutik i lokalområdet.
              </div>
            </div>
            <div className="flex flex-col gap-24">
              <div>
                <p className="text-2xl font-bold mb-5">Quick Links</p>
                <div className="flex flex-col gap-2  font-[14px]">
                  <Link href="/">Boliger til salg</Link>
                  <Link href="/agents">Mæglere</Link>
                  <Link href="/contact-us">Kontakt os</Link>
                  <Link href="">Log ind / bliv bruger</Link>
                </div>
              </div>
              <div className="text-[#7B7B7B]">
                <p className="text-[0.7rem]">Medlem af </p>
                <p className="text-5xl font-bold">DMS</p>
                <p>Dansk Mægler Sammenslutning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[12rem]" />
      <div className="bg-[#162A41] text-white text-sm mx-auto text-center py-2">
        Layout By Jit Banik 2020
      </div>
    </>
  );
}

export default Footer;
