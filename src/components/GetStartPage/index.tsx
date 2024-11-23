import { useState } from "react";
import {
  ComprehensiveIcon,
  DecentralizedIcon,
  EnhanceIcon,
  InstantIcon,
  RealTimeIcon,
  UserIcon,
} from "../../utils/icon";
import { useTheme } from "../../utils/ThemeContext";
import React from "react";

export function GetStartPage() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeSyntaxIndex, setActiveSyntaxIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleSyntaxClick = (index: number) => {
    setActiveSyntaxIndex(index);
  };

  return (
    <div className="px-4 md:px-10 py-12 relative">
      <h1 className="text-center relative z-1 flex gradient-text-color text-[32px] md:text-[96px] leading-[40px] md:leading-[130.94px] font-black">
       Why Block Surety?
      </h1>
      <div
        className={`relative solution-table-shadow ${
          theme ? "bg-[#FFFFFF]" : "bg-[#2D2D2D]"
        } rounded-[15px] px-4 md:px-14 z-50 py-8 md:my-[-26px] flex flex-col md:flex-row gap-4`}
      >
        <div className="mx-0 md:mx-16 mt-8 relative">
          <span
            className={`flex text-left bg-[#C4C4C440] py-10 px-20 text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] ${
              theme ? "text-[#000000]" : "text-[#FFFFFF]"
            }`}
          >
            Embrace the digital revolution with confidence. Our dedicated team at Block Surety is committed to guiding you through the entire tokenization process. From strategy development to implementation, we provide comprehensive support, ensuring a seamless integration of tokenization into your business model. Elevate your company to new heights by unlocking the value of your real-world assets with our expertise and proprietary layer one blockchain.

          </span>
          
          <div className="flex mt-8">
          <div className="hidden md:flex w-full rounded-[7px] bg-[#DEDEDE] h-[12px] absolute bottom-0"></div>
          <div
            className="hidden md:flex rounded-[7px] gradient-color w-[80%] h-[12px] absolute bottom-0"
            style={{
              width: `${
                activeSyntaxIndex === 5
                  ? 100
                  : (activeSyntaxIndex + 1) * 16.3333
              }%`,
            }}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
