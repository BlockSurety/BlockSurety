import {
  FacebookIcon,
  InstagramIcon,
  NotificationIcon,
  YoutubeIcon,
} from "../../utils/icon";
import { useTheme } from "../../utils/ThemeContext";

export function Footer() {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme ? "bg-[#F0F0F0] text-[#000000]" : "bg-[#2D2D2D] text-[#FFFFFF]"
      } flex flex-col items-center justify-center py-14 px-4 md:px-10 rounded-[15px]`}
    >
      <img src="./images/footer.png" className="w-[250px] h-[50px]"/>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 mt-6 text-center md:text-left">
        <p className="text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] font-normal cursor-pointer">
          Privacy Policy
        </p>
        <p className="text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] font-normal cursor-pointer">
          Terms & Conditions
        </p>
        <p className="text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] font-normal cursor-pointer">
          Disclaimer
        </p>
        <p className="text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] font-normal cursor-pointer">
          Contact
        </p>
      </div>
      <div className="flex gap-6 md:gap-10 mt-6">
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
        <NotificationIcon />
      </div>
      <div className="mt-6 text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[21px] text-center">
        © 2024 Atomic Swap. All rights reserved.
        <br />
        Empowering secure trading in the Cryptoverse.
      </div>
    </div>
  );
}
