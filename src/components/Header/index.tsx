import { SquareIcon } from "../../utils/icon";
import { DarkButton } from "../DarkButton";
import { useTheme } from "../../utils/ThemeContext";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`relative HeaderBorder rounded-[10px] ${
        theme ? "text-[#FFFFFF] bg-[#D91A21]" : "text-[#FFFFFF] bg-[#2D2D2D]"
      } w-full h-[80px] flex justify-between items-center px-4 md:px-[60px]`}
    >
      <div className="flex flex-row items-center w-full">
        <img src="./images/header.png" className="h-[50px] w-[250px]"/>
        <div className="hidden md:flex flex-row ml-10 lg:ml-16 xl:ml-20 gap-8 lg:gap-24 xl:gap-48">
          <span className="text-[15px] md:text-[17px] font-normal leading-[25.5px] cursor-pointer">
            Swap
          </span>
          <span className="text-[15px] md:text-[17px] font-normal leading-[25.5px] cursor-pointer">
            Stack
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        {/* <DarkButton theme={theme} setTheme={setTheme} /> */}
        <div className="px-[16px] py-[10px] bg-[#FF9001] items-center justify-center rounded-[10px] text-nowrap">
          <p className="text-[14px] leading-[21px] font-medium">Connect Wallet</p>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`absolute top-[60px] z-[100] left-0 w-full ${
            theme
              ? "text-[#000000] bg-[#FFFFFF]"
              : "text-[#FFFFFF] bg-[#2D2D2D]"
          } md:hidden flex flex-col items-center gap-4 py-4`}
        >
          <div className="flex flex-row gap-4">
            <span className="text-[15px] font-normal leading-[25.5px] cursor-pointer">
              Why Us
            </span>
            <span className="text-[15px] font-normal leading-[25.5px] cursor-pointer ">
              Features
            </span>
            <span className="text-[15px] font-normal leading-[25.5px] cursor-pointer ">
              Ecosystem
            </span>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-[15px] font-normal leading-[25.5px] cursor-pointer ">
              Get Started
            </span>
            <span className="text-[15px] font-normal leading-[25.5px] cursor-pointer ">
              Contact
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
