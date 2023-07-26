import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-100 flex flex-row py-[75px] px-[159px] items-center justify-between text-left text-xl text-white font-poppins lg:pl-40 lg:pr-40 lg:box-border md:flex-col md:gap-[48px] md:pl-9 md:pr-9 md:box-border sm:gap-[24px] sm:items-start sm:justify-end">
      <div className="relative w-full tracking-[-0.5px] leading-[36px] sm:text-lg sm:text-center">
        Develop by Rakin Afser — Copyright 2023
      </div>
      <div className="flex flex-row w-full justify-end sm:justify-center gap-[40px] md:gap-[32px]">
        {/* <a
          href="https://www.linkedin.com/in/rakin-afser-1004076b/"
          target={"_blank"}
        >
          <img
            className="relative w-[29.47px] h-[29.61px]"
            alt=""
            src="/group3.svg"
          />
        </a> */}
        <a
          href="https://www.linkedin.com/in/rakin-afser-1004076b/"
          target={"_blank"}
        >
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/vector61.svg"
          />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/rakin-afser-1004076b/"
          target={"_blank"}
        >
          <img
            className="relative w-[36.42px] h-[29.61px]"
            alt=""
            src="/group11.svg"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
