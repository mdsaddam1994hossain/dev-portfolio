import React from "react";
import { workData } from "../utils/data";

const FeaturedWork = () => {
  return (
    <div
      id="our_work"
      className="self-stretch bg-darkslategray-100 flex flex-col py-[100px] px-[163px] items-start justify-start gap-[100px] font-inter lg:pl-[140px] lg:pr-[140px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <h4 className="m-0 self-stretch relative text-[56px] font-poppins leading-[70px] font-semibold font-inherit sm:text-[48px] sm:leading-[60px]">
        Featured Work
      </h4>
      <div className=" -mt-12 self-stretch grid grid-cols-6 gap-10">
        {workData?.map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-2 sm:col-span-6 md:col-span-3 transition duration-500 ease-in-out transform hover:-translate-y-5 "
            >
              <a href={item?.url} target="_blank" className="relative">
                <img
                  className="relative w-full h-full  "
                  alt=""
                  src={item.img}
                />
                <img
                  className="bottom-8 right-4 w-[45px] h-[45px] absolute "
                  alt=""
                  src="vector11.svg"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedWork;
