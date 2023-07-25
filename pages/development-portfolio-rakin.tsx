import type { NextPage } from "next";
import Header from "../components/header";
import Hero from "../components/hero";
import Skill from "../components/skill";
import Services from "../components/services";
import Work from "../components/work";
import Contact from "../components/contact";

const DevelopmentPortfolioRakin1: NextPage = () => {
  return (
    <div className="relative w-full h-[8420.9px] flex flex-col items-start justify-start text-left text-45xl text-white font-poppins">
      <Header skills="Skills" menu={false} />
      <Hero />
      <Skill />
      <Services />
      <div className="self-stretch bg-gray-300 flex flex-col py-[140px] px-[94px] items-start justify-start gap-[27px]">
        <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.5px] leading-[110px] font-semibold font-inherit">
          About me
        </h1>
        <p className="m-0 self-stretch relative text-17xl tracking-[1px] leading-[56.5px] text-gray-600">
          Boasting an extensive career spanning over 8 years, I have amassed
          invaluable experience in the field of web development. My skill set
          encompasses a comprehensive understanding of both front-end and
          back-end technologies, making me well-equipped to tackle any project
          with proficiency and finesse.
        </p>
      </div>
      <Work
        vector="/vector41.svg"
        vector1="/vector41.svg"
        vector2="/vector41.svg"
        vector3="/vector41.svg"
        vector4="/vector51.svg"
        vector5="/vector41.svg"
      />
      <Contact />
      <div className="self-stretch bg-darkslategray-100 flex flex-row py-[75px] px-[159px] items-center justify-between text-xl lg:pl-40 lg:pr-40 lg:box-border md:flex-col md:gap-[48px] md:pl-9 md:pr-9 md:box-border sm:gap-[24px] sm:items-start sm:justify-end">
        <div className="relative tracking-[-0.5px] leading-[36px] sm:text-lg">
          Develop by Rakin Afser — Copyright 2023
        </div>
        <div className="flex flex-row items-center justify-start gap-[40px] md:gap-[32px]">
          <img
            className="relative w-[29.47px] h-[29.61px]"
            alt=""
            src="/group3.svg"
          />
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/vector61.svg"
          />
          <img
            className="relative w-[36.42px] h-[29.61px]"
            alt=""
            src="/group11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPortfolioRakin1;
