import React from "react";

const FeaturedWork = () => {
  return (
    <div
      id="portfolio"
      className="self-stretch bg-darkslategray-100 flex flex-col py-[100px] px-[163px] items-start justify-start gap-[100px] font-inter lg:pl-[140px] lg:pr-[140px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <h4 className="m-0 self-stretch relative text-[56px] font-poppins leading-[70px] font-semibold font-inherit sm:text-[48px] sm:leading-[60px]">
        Featured Work
      </h4>
      <div className=" -mt-12 self-stretch grid grid-cols-6 gap-10">
        <div className="col-span-2 sm:col-span-6 md:col-span-3 ">
          <span className="relative">
            <img className="relative w-full h-full  " alt="" src="/1@3x.png" />
            <img
              className="bottom-8 right-4 w-[45px] h-[45px] absolute "
              alt=""
              src="vector11.svg"
            />
          </span>
        </div>
        <div className="col-span-2 sm:col-span-6 md:col-span-3">
          <span className="relative">
            <img className="relative w-full h-full  " alt="" src="/7@3x.png" />
            <img
              className="bottom-8 right-4 w-[45px] h-[45px] absolute "
              alt=""
              src="vector11.svg"
            />
          </span>
        </div>
        <div className="col-span-2 sm:col-span-6 md:col-span-3">
          <span className="relative">
            <img className="relative w-full h-full  " alt="" src="/8@3x.png" />
            <img
              className="bottom-8 right-4 w-[45px] h-[45px] absolute "
              alt=""
              src="vector11.svg"
            />
          </span>
        </div>
        <div className="col-span-2 sm:col-span-6 md:col-span-3">
          <span className="relative">
            <img className="relative w-full h-full  " alt="" src="/9@3x.png" />
            <img
              className="bottom-8 right-4 w-[45px] h-[45px] absolute "
              alt=""
              src="vector11.svg"
            />
          </span>
        </div>
        <div className="col-span-2 sm:col-span-6 md:col-span-3">
          <span className="relative">
            <img className="relative w-full h-full  " alt="" src="/10@3x.png" />
            <img
              className="bottom-8 right-4 w-[45px] h-[45px] absolute "
              alt=""
              src="vector11.svg"
            />
          </span>
        </div>
        <div className="col-span-2 sm:col-span-6 md:col-span-3">
          <span className="relative">
            <img className="relative w-full h-full  " alt="" src="/11@3x.png" />
            <img
              className="bottom-8 right-4 w-[45px] h-[45px] absolute "
              alt=""
              src="vector11.svg"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
