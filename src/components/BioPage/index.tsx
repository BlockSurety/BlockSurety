import { DownloadIcon, TradeIcon } from "../../utils/icon";

export function BioPage() {
  return (
    <div
      className="relative flex mt-2 rounded-[15px] items-center flex-col h-[90vh] md:h-[70vh] xl:h-[60vh]"
      style={{
        backgroundImage: 'url("/images/banner.png")',
        backgroundSize: "cover",
        backgroundPosition: "50% 80%",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 rounded-[15px]" />
      <div className="z-[100] flex flex-col items-center justify-center h-full gap-4 px-4 md:px-10">
        <h1 className="text-[32px] md:text-[64px] font-extrabold leading-[40px] md:leading-[75px] text-[#FFF] text-center">
        Unlock The Potential of Your Company, Event, Brand and Real World Assets Thru Tokenization.
        </h1>
        <span className="text-[14px] md:text-[18px] leading-[21px] md:leading-[27px] font-normal text-[#FFF] text-center">
        Block Surety is a trailblazer in real-world asset tokenization. Our innovative approach leverages tokenized assets on our proprietary private blockchain offering unparalleled security, efficiency and transparency. Seamlessly bridge the gap between your traditional assets and the digital ecosystem, ranging from real estate portfolios to entertainment events. Our cutting edge tokenization solutions ensure that your business stays ahead in this rapidly growing and evolving landscape.
        </span>
      </div>
    </div>
  );
}
