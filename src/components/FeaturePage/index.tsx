import { useTheme } from "../../utils/ThemeContext";
import { useState } from "react";
import { featureData } from "../../MockupData";

export function FeaturePage() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`px-4 md:px-10 py-12 ${
        theme ? "text-[#000000]" : "text-[#FFFFFF]"
      }`}
    >
      <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center gap-6 md:gap-10 w-full md:w-[40%]">
        <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[40px] md:leading-[55px] font-bold text-left">
        Benefits of Tokenizing Your Real World Assets
        </p>
        <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[32px] font-normal text-left">
      Asset tokenization is the process in which a real-world asset, tangible and intangible, is digitized and divided into fractional units, which become digital tokens. The token then becomes the representation of value of the real world asset, in a digitized form. 
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-10 w-full md:w-[60%]">
       <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[32px] font-normal text-left pl-0 md:pl-10">
         This allows you, and or your company, the ability to liquify the real world asset into a much more accessible investment or transfer of value to token holders. The token holds ownership or other value rights to the real world asset deemed by you. 
        </p>
        <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[32px] font-normal text-left pl-0 md:pl-10">
        The possibilities for tokenization are endless, as you can implement asset tokenization tied to your company, real estate holdings, special events, auctions, brands, life insurance, equities, etc…
        </p>
      </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-10 p-4 items-center gap-6 md:gap-20 justify-center">
        {featureData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`relative item-shadow w-full md:w-[160px] h-[125px] rounded-[15px] items-center flex flex-col justify-center p-4 feature-box ${
              activeIndex === index
                ? "bg-[#D91A21] text-[#FFFFFF]"
                : theme
                ? "bg-[#FFFFFF]"
                : "bg-[#2D2D2D]"
            }`}
          >
            <p className="text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[22px] mt-2">
              {item.label}
            </p>
            <div
              className={`w-[80%] ${
                activeIndex === index
                  ? theme
                    ? "bg-[#FF3C43]"
                    : "bg-[#FFFFFF]"
                  : theme
                  ? "bg-[#E8E8E8]"
                  : "bg-[#B3B3B3]"
              } absolute bottom-0 h-[6px] rounded-[5px]`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
