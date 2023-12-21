import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row py-[100px] px-[142px] items-center justify-center gap-[38px] bg-[url(/hero@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-400 font-poppins lg:pl-[135px] lg:pr-[135px] lg:box-border md:flex-col md:gap-[100px] md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="flex-1 flex flex-col items-start justify-start gap-[41px] md:flex-[unset] md:self-stretch"
      >
        <div className="self-stretch flex flex-col py-[9px] pr-[58px] pl-0 items-start justify-start gap-[9px] text-13xl">
          <p className="m-0 self-stretch relative tracking-[-0.5px] leading-[73px] sm:text-5xl">
            Hey, I’m Saddam Hossain
          </p>
          <h4 className="m-0 sm:text-[64px] self-stretch relative text-91xl tracking-[-0.5px] leading-[110px] font-semibold font-inherit text-white sm:text-51xl sm:leading-[80px]">
            FullStack <br /> Developer
          </h4>
        </div>
        {/* <div className="self-stretch flex flex-row items-center justify-start text-gray-600"> */}
        <p className="m-0 flex-1 relative leading-[36px] sm:text-xl">
          Full Stack Developer: React, React Native, Node.js, Next.js, GraphQL
          developer
        </p>
        {/* </div> */}
        <div className="rounded-8xs bg-white flex flex-row py-3 px-5 items-center justify-center gap-[12px] text-darkslategray-100 font-manrope">
          <img
            className="relative w-[24.29px] h-[18.89px] overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
          <a
            className="relative font-semibold text-[16px] [text-decoration:none]"
            href="mailto:saddam30061994@gmail.com"
          >
           saddam30061994@gmail.com
          </a>
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="relative w-[493px] sm:w-full h-auto object-cover rounded-full"
        alt=""
        src="/saddam.jpg"
      />
    </div>
  );
};

export default Hero;
