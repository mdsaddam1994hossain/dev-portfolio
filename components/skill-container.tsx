import type { NextPage } from "next";

const SkillContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-300 flex flex-col py-[100px] px-[70px] items-center justify-center gap-[109px] text-center text-45xl text-white font-poppins lg:pl-10 lg:pr-10 lg:box-border md:pl-9 md:pr-9 md:box-border sm:gap-[70px] sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-col py-0 px-2.5 items-center justify-start gap-[10px]">
        <h4 className="m-0 self-stretch relative text-[inherit] leading-[100px] font-semibold font-inherit sm:text-29xl sm:leading-[64px] sm:text-center sm:flex sm:max-w-0">
          Skills and Abilities
        </h4>
        <p className="m-0 self-stretch relative text-5xl text-gray-500 sm:text-xl">
          <span className="block">{`I have extensive JavaScript skills, including expertise in React, `}</span>
          <span className="block">
            React Native, Node.js, Next.js, and GraphQL.
          </span>
        </p>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[46px] sm:gap-[100px]">
        <div className="self-stretch flex flex-row items-center justify-center gap-[124px] sm:flex-col">
          <img
            className="relative w-[161px] h-[146px] object-cover"
            alt=""
            src="/pngwing@2x.png"
          />
          <img
            className="relative w-[103px] h-[117px] object-cover"
            alt=""
            src="/pngwing1@2x.png"
          />
          <img
            className="relative w-[105px] h-[115px] object-cover"
            alt=""
            src="/pngwing2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[100px] sm:flex-col">
          <img
            className="relative w-[95px] h-[108px] object-cover"
            alt=""
            src="/pngwing3@2x.png"
          />
          <img
            className="relative w-[315px] h-[115px] object-cover"
            alt=""
            src="/pngwing4@2x.png"
          />
          <img
            className="relative w-[91px] h-[89px] object-cover"
            alt=""
            src="/pythonlogonotext-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
