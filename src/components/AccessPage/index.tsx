import {
  AppleIcon,
  PlayStoreIcon,
  SwiperOneIcon,
  SwiperTwoIcon,
} from "../../utils/icon";
import { useTheme } from "../../utils/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export function AccessPage() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${
          theme ? "bg-[#FFFFFF]" : "bg-[#2D2D2D]"
        } mt-10 px-4 md:px-20 py-10 relative rounded-[15px] flex flex-col md:flex-row overflow-hidden`}
      >
        <div className="flex flex-col text-left justify-center mb-6 md:mr-24">
          <h1 className="gradient-text-color text-[48px] md:text-[96px] leading-[60px] md:leading-[130.94px] font-black text-nowrap">
          Contact Us
          </h1>
          <p
            className={`font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] ${
              theme ? "text-[#4B4B4B]" : "text-[#4B4B4B]"
            }`}
          >
            Inquire About Tokenization
          </p>
        </div>
        <div className="flex flex-row w-full">
          <div
            className={`flex flex-col gap-8 slider-shadow ${
              theme
                ? "bg-[#C4C4C440] text-[#000000]"
                : "bg-[#202020] text-[#FFFFFF]"
            } rounded-[15px] w-full xl:w-[500px] p-6 md:p-12`}
          >
            <div className="flex gap-4 justify-beteen">
              <input placeholder="Full Name" className="w-full rounded-[11px] p-4"/>
              <input placeholder="Phone Number" className="w-full rounded-[11px] p-4"/>
            </div>
            <input placeholder="Email Address" className="rounded-[11px] p-4"/>
            <textarea placeholder="Message" className="rounded-[11px] p-4 min-h-[160px] text-start resize-none"/>
            <button className="bg-[#D91A21] rounded-[10px] p-[14px] text-white text-[14px] leading-[21px] cursor-pointer">Submit Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
