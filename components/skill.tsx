import type { NextPage } from "next";

const Skill: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-300 flex flex-col py-[150px] px-[227px] items-start justify-start gap-[109px] text-center text-45xl text-white font-poppins lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:items-center sm:justify-center sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <h1 className="m-0 self-stretch relative text-[inherit] leading-[100px] font-semibold font-inherit sm:text-45xl sm:text-center sm:flex sm:max-w-0">
          Skills and Abilities
        </h1>
        <div className="self-stretch relative text-5xl text-gray-500">
          I have extensive JavaScript skills, including expertise in React,
          React Native, Node.js, Next.js, and GraphQL.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[46px]">
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

export default Skill;
