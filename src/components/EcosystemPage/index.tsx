import { CheckIcon, LargeDownloadIcon, TradeIcon } from "../../utils/icon";
import { useTheme } from "../../utils/ThemeContext";

export function EcosystemPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`px-4 md:px-10 py-12 items-center flex flex-col w-full ${
        theme ? "text-[#000000]" : "text-[#FFFFFF]"
      }`}
    >
      <h1 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[43.65px] font-bold text-center">
      Our Tokenization Solutions
      </h1>
      <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] font-normal mt-2 text-center w-[60%]">
      At Block Surety, we understand that each company is unique. Our tokenization solutions are tailored to meet your specific needs, whether you are in real estate, entertainment, sports or any other industry. Our cutting-edge technology empowers businesses to
      </p>
      <div
        className={`mt-14 relative bg-cover bg-center h-[300px] w-full md:w-[300px]`}
        style={{
          backgroundImage: `${
            theme
              ? 'url("/images/dark-ecobanner.png")'
              : 'url("/images/ecobanner.png")'
          }`,
        }}
      >
        <div className="flex w-full h-full justify-center items-center rounded-[10px]">
          <div className="flex rounded-[10px] bg-[#D91A21] p-[14px] justify-center items-center gap-2">
            <TradeIcon/>
            <p className="text-[14px] leading-[21px] text-[#FFFFFF]">Join Us</p>
          </div>
        </div>
        <div className="absolute top-8 hidden md:flex left-4 md:left-[-300px] items-center gap-2 md:gap-4">
          <p className="text-[14px] md:text-[18px] leading-[21px] md:leading-[27px] font-normal">
          tokenize assets
          </p>
          <CheckIcon />
        </div>
        <div className="absolute top-8 hidden md:flex right-4 md:right-[-350px] items-center gap-2 md:gap-4">
          <CheckIcon />
          <p className="text-[14px] md:text-[18px] leading-[21px] md:leading-[27px] font-normal">
          fostering transparency
          </p>
        </div>
        <div className="absolute bottom-16 hidden md:flex left-4 md:left-[-330px] items-center gap-2 md:gap-4">
          <p className="text-[14px] md:text-[18px] leading-[21px] md:leading-[27px] font-normal">
          unlocking liquidity
          </p>
          <CheckIcon />
        </div>
        <div className="absolute bottom-16 hidden md:flex right-4 md:right-[-330px] items-center gap-2 md:gap-4">
          <CheckIcon />
          <p className="text-[14px] md:text-[18px] leading-[21px] md:leading-[27px] font-normal">
           opening new avenues for<br/> investment and marketing
          </p>
        </div>
        
      </div>
      <p className="mt-10 text-[#D91A21] text-[14px] md:text-[18px]"> Join us in reshaping the future of scaling assets, events and brands through the power of blockchain, utility tokens and NFTs.</p>
    </div>
  );
}
