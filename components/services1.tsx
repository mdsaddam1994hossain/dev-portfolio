import type { NextPage } from "next";

const Services1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[150px] px-40 items-center justify-start gap-[111px] bg-[url(/services@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-45xl text-white font-poppins lg:pl-[100px] lg:pr-[100px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <h4 className="m-0 self-stretch relative text-[inherit] leading-[100px] font-semibold font-inherit sm:text-37xl">
          <span>Services</span>
          <span className="text-gray-100">.</span>
        </h4>
        <p className="m-0 self-stretch relative text-5xl text-gray-500 sm:text-xl">
          I create custom, responsive websites that meet the unique needs of
          businesses and individuals, leveraging my expertise in front-end and
          back-end technologies.
        </p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-11xl text-gray-200 md:flex-col sm:flex-col">
        <div className="self-stretch flex-1 rounded-8xs bg-white flex flex-col py-[52px] px-5 items-center justify-start gap-[37px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img className="relative w-[100px] h-20" alt="" src="/vector11.svg" />
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[40px] font-semibold">
              <p className="m-0">Front and Back</p>
              <p className="m-0">end Development</p>
            </div>
            <div className="self-stretch relative text-3xl leading-[163%] text-dimgray">
              Front-end development emphasizes the visual and interactive
              elements of a website, while back-end development handles the
              site's structure, system, data, and logic.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-8xs bg-white shadow-[0px_337px_94px_rgba(0,_0,_0,_0),_0px_216px_86px_rgba(0,_0,_0,_0.01),_0px_121px_73px_rgba(0,_0,_0,_0.02),_0px_54px_54px_rgba(0,_0,_0,_0.03),_0px_13px_30px_rgba(0,_0,_0,_0.04),_0px_0px_0px_rgba(0,_0,_0,_0.05)] flex flex-col py-14 px-5 items-center justify-start gap-[37px] text-darkslategray-200 md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
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
        <div className="self-stretch flex-1 rounded-8xs bg-white flex flex-col py-[55px] px-5 items-center justify-start gap-[37px] text-darkslategray-100 md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img className="relative w-24 h-20" alt="" src="/vector31.svg" />
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[40px] font-semibold">
              <p className="m-0">Web</p>
              <p className="m-0">Development</p>
            </div>
            <div className="self-stretch relative text-3xl leading-[163%] text-dimgray">
              I’m offering web development services, building user-friendly
              websites and web applications with responsive designs and
              integrated backend systems.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
