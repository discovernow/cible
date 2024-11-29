import Image from "next/image";
import PartnersLogo from "../../public/partnersLogo.png";
import React from "react";

export default function Partners() {
  return (
    <div className="flex py-[40px] px-4 xl:px-[112px] flex-col justify-center items-center gap-8 xl:gap-16 self-stretch">
      <div className="flex flex-col items-center justify-center gap-2 self-stretch">
        <p className="text-[#111827] font-nunito_sans text-center text-[24px] font-bold leading-[28.8px] tracking-[-0.48px] ">
          Trusted by
        </p>
        <p className="text-[#4B5563] font-nunito_sans text-center text-[16px] font-normal leading-[25.6px] ">
          Our team of experts are trusted by reputable global brands
        </p>
      </div>

      <Image
        src={PartnersLogo}
        width={400}
        height={48}
        alt="hero image of world"
      />
    </div>
  );
}
