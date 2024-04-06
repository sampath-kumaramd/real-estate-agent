import React from "react";
import Image from "next/image";

function SubNavigation({ title}) {
  return (
    <div className="relative flex items-center justify-center h-36 mb-10">
      <Image
        src="/assets/subNavigation_BG.png"
        alt="description_of_image"
        width="1710"
        height="36"
        className="absolute"
      />
      <div className="z-10 text-[3rem] text-white font-bold">{title}</div>
    </div>
  );
}

export default SubNavigation;
