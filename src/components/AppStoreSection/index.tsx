import {
  AppleIcon,
  PlayStoreIcon,
  SixSquare,
  TwoFourTriangle,
} from "../../utils/icon";

export function AppStoreSection() {
  return (
    <div className="px-4 md:px-10 py-6 relative rounded-[15px]">
      <div
        className="relative rounded-[15px] p-6"
        style={{
          backgroundImage: 'url("/images/download.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-[15px]" />
        <div className="relative flex justify-between z-100">
          <SixSquare />
          <TwoFourTriangle />
        </div>
        <div className="flex flex-col md:flex-row p-6 items-center justify-between relative z-100 mt-8">
          <div className="text-left flex flex-col">
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] font-medium text-[#FFFFFF]">
              Available for
            </h2>
            <h1 className="text-[#FF9001] text-[40px] md:text-[54px] font-extrabold leading-[54px] md:leading-[74px]">
              DOWNLOAD!
            </h1>
            <div className="flex flex-col md:flex-row mt-6 justify-between">
              <div className="flex flex-row py-[7px] px-[7px] rounded-[7px] bg-[#FFFFFF] justify-center items-center mb-2 md:mb-0">
                <AppleIcon />
                <div className="flex flex-col ml-2">
                  <p className="text-[12px] font-normal text-[#020202]">
                    Available on
                  </p>
                  <p className="text-[20px] font-bold text-[#020202]">
                    App Store
                  </p>
                </div>
              </div>
              <div className="flex flex-row py-[7px] px-[7px] rounded-[7px] bg-[#FF4200] justify-center items-center">
                <PlayStoreIcon />
                <div className="flex flex-col ml-2">
                  <p className="text-[12px] font-normal text-[#FFFFFF]">
                    Available on
                  </p>
                  <p className="text-[20px] font-bold text-[#FFFFFF]">
                    Play Store
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden md:max-w-[400px] xl:max-w-[400px] flex-col items-end">
            <div
              className="rounded-[7px] mb-4"
              style={{
                backgroundImage: 'url("/images/qrCode.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100px",
                height: "100px",
              }}
            />
            <p className="text-[14px] md:text-[16px] text-[#FFFFFF] leading-[24px] font-normal text-right flex">
              Download the app now and dive into a world where your assets are
              protected, and your transactions are seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
