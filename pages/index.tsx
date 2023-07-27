import type { NextPage } from "next";
import Header from "../components/header";
import ContainerHero from "../components/container-hero";
import SkillContainer from "../components/skill-container";
import ServiceCardForm from "../components/service-card-form";
import FeaturedWorkContainer from "../components/featured-work-container";
import ContactFormContainer from "../components/contact-form-container";

const DevelopmentPortfolioRakin: NextPage = () => {
  return (
    <div className="relative w-full h-[6379px] flex flex-col items-start justify-start text-left text-45xl text-white font-poppins">
      <Header />
      <ContainerHero />
      <SkillContainer />
      <ServiceCardForm />
      <div className="self-stretch bg-gray-300 flex flex-col py-[100px] px-[94px] items-start justify-start gap-[27px] sm:gap-[10px] sm:pl-4 sm:pr-4 sm:box-border">
        <h4 className="m-0 self-stretch relative text-[inherit] tracking-[-0.5px] leading-[110px] font-semibold font-inherit sm:text-29xl sm:leading-[64px]">
          About me
        </h4>
        <p className="m-0 self-stretch relative text-[36px] tracking-[1px] leading-[56.5px] text-gray-600 sm:text-5xl sm:leading-[40px]">
          Boasting an extensive career spanning over 8 years, I have amassed
          invaluable experience in the field of web development. My skill set
          encompasses a comprehensive understanding of both front-end and
          back-end technologies, making me well-equipped to tackle any project
          with proficiency and finesse.
        </p>
      </div>
      <FeaturedWorkContainer />
      <ContactFormContainer />
      <div className="self-stretch bg-darkslategray-100 flex flex-row py-12 px-[159px] items-center justify-between text-xl lg:pl-40 lg:pr-40 lg:box-border md:flex-col md:gap-[48px] md:pl-9 md:pr-9 md:box-border sm:gap-[24px] sm:items-start sm:justify-end">
        <div className="relative tracking-[-0.5px] leading-[36px] sm:text-[18px]">
          Develop by Rakin Afser — Copyright 2023
        </div>
        <div className="flex flex-row items-center justify-start gap-[40px] md:gap-[32px]">
          <img
            className="relative w-[29.47px] h-[29.61px]"
            alt=""
            src="/group.svg"
          />
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="relative w-[36.42px] h-[29.61px]"
            alt=""
            src="/group1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPortfolioRakin;
