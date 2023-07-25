import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row py-[150px] px-[142px] items-center justify-center gap-[38px] bg-[url(/hero@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-400 font-poppins lg:pl-[135px] lg:pr-[135px] lg:box-border md:flex-col md:gap-[100px] md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[41px] md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-col py-[9px] pr-[58px] pl-0 items-start justify-start gap-[9px] text-13xl">
          <div className="self-stretch relative tracking-[-0.5px] leading-[73px]">
            Hey, I’m Rakin Afser
          </div>
          <div className="self-stretch relative text-91xl tracking-[-0.5px] leading-[110px] font-semibold text-white sm:text-95xl">
            <p className="m-0">{`Full Stack `}</p>
            <p className="m-0">Developer</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start text-gray-600">
          <div className="flex-1 relative leading-[36px]">
            JavaScript Full Stack Developer: React, React Native, Node.js,
            Next.js, GraphQL
          </div>
        </div>
        <div className="rounded-8xs bg-white flex flex-row py-3 px-5 items-center justify-center gap-[12px] text-darkslategray-100 font-manrope">
          <img
            className="relative w-[24.29px] h-[18.89px] overflow-hidden shrink-0"
            alt=""
            src="/icon1.svg"
          />
          <a
            className="relative font-semibold text-[inherit] [text-decoration:none]"
            href="mailto:r.afser01@gmail.com"
            target="_blank"
          >
            r.afser01@gmail.com
          </a>
        </div>
      </div>
      <img
        className="relative w-[493px] h-auto object-cover lg:max-w-[50%]"
        alt=""
        src="/frame-1942-11@2x.png"
      />
    </div>
  );
};

export default Hero;
