import React from "react";

export default function Clients() {
  return (
    <div className=" flex px-6 py-10 xl:px-[288px] xl:py-[112px] flex-col justify-center items-center gap-[72px]">
      <div className="flex flex-col items-center gap-4 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <p className="text-[#111827] text-center font-nunito_sans text-[32px] xl:text-[48px] font-semibold tracking-[-0.96px] xl:tracking-[-1.44px]">
            Let’s work <span className="text-[#4B4EFC]">together</span>
          </p>
          <p className="text-[#4B5563] xl:w-[620px] text-center font-nunito_sans text-[16px] font-normal leading-6">
            We`&apos;d love to hear from you! You can reach us directly using
            the contact information provided. Let`&apos;s start a conversation
            and explore how we can help you achieve your goals. Your success is
            our priority.
          </p>
        </div>
      </div>
    </div>
  );
}
