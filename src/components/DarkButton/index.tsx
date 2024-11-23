import { useState } from "react";
import { MoonIcon, SunIcon } from "../../utils/icon";

interface DarkButtonProps {
  theme: boolean;
  setTheme: any;
}

export function DarkButton({ theme, setTheme }: DarkButtonProps) {
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      className={`flex flex-row justify-center items-center ${
        theme ? "darkButton-color" : "bg-[#FF9001]"
      } rounded-[29px] w-[67px] h-[32px] gap-2`}
    >
      <div
        className={`flex rounded-[45px] w-[26px] h-[26px] items-center cursor-pointer justify-center ${
          theme === false ? "bg-[#000]" : "bg-[#FF9001]"
        }`}
        onClick={toggleTheme}
      >
        <MoonIcon />
      </div>
      <div
        className={`flex rounded-[45px] w-[26px] h-[26px] items-center cursor-pointer justify-center ${
          theme === false ? "bg-[#FF9001]" : "bg-[#000]"
        }`}
        onClick={toggleTheme}
      >
        <SunIcon />
      </div>
    </div>
  );
}
