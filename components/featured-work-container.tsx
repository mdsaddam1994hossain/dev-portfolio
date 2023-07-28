import type { NextPage } from "next";

const FeaturedWorkContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-100 flex flex-col py-[100px] px-[163px] items-start justify-start gap-[100px] text-left text-45xl text-white font-poppins lg:pl-[140px] lg:pr-[140px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:gap-[48px] sm:pl-4 sm:pr-4 sm:box-border">
      <h4 className="m-0 self-stretch relative text-[inherit] leading-[110px] font-semibold font-inherit sm:text-29xl sm:leading-[60px]">
        Featured Work
      </h4>
      <div className="self-stretch grid flex-col items-start justify-start gap-[20px] grid-cols-[repeat(3_1fr)]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/1@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/vector11.svg"
            />
          </div>
          <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/7@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/vector11.svg"
            />
          </div>
          <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/8@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/vector11.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/9@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/vector11.svg"
            />
          </div>
          <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/10@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/vector11.svg"
            />
          </div>
          <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/11@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/vector11.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkContainer;
