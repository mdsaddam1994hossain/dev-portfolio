import type { NextPage } from "next";
import Service from "./service";

const Services: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[150px] px-40 items-center justify-start gap-[111px] bg-[url(/services@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-45xl text-white font-poppins lg:pl-[100px] lg:pr-[100px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <div className="self-stretch relative leading-[100px] font-semibold">
          <span>Services</span>
          <span className="text-gray-100">.</span>
        </div>
        <div className="self-stretch relative text-5xl text-gray-500">
          I create custom, responsive websites that meet the unique needs of
          businesses and individuals, leveraging my expertise in front-end and
          back-end technologies.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-11xl text-darkslategray-200 md:flex-col sm:flex-col">
        <Service
          icon="/vector11.svg"
          title="Front and Back"
          development="end Development"
          description="Front-end development emphasizes the visual and interactive elements of a website, while back-end development handles the site's structure, system, data, and logic."
          vectorIconWidth="100px"
          webDevelopmentColor="#292b37"
        />
        <div className="self-stretch flex-1 rounded-8xs bg-white shadow-[0px_337px_94px_rgba(0,_0,_0,_0),_0px_216px_86px_rgba(0,_0,_0,_0.01),_0px_121px_73px_rgba(0,_0,_0,_0.02),_0px_54px_54px_rgba(0,_0,_0,_0.03),_0px_13px_30px_rgba(0,_0,_0,_0.04),_0px_0px_0px_rgba(0,_0,_0,_0.05)] flex flex-col py-14 px-5 items-center justify-start gap-[37px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img
            className="relative w-[60px] h-[92.9px]"
            alt=""
            src="/vector21.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[40px] font-semibold">
              Mobile App Development
            </div>
            <div className="self-stretch relative text-3xl leading-[163%] text-dimgray">{`I specialize in mobile app development for iOS and Android platforms. I create native or hybrid apps with a focus on performance, user experience &compatibility across devices.`}</div>
          </div>
        </div>
        <Service
          icon="/vector31.svg"
          title="Web"
          development="Development"
          description="I’m offering web development services, building user-friendly websites and web applications with responsive designs and integrated backend systems."
        />
      </div>
    </div>
  );
};

export default Services;
