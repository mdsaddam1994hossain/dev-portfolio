import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-300 flex flex-row py-[30px] px-[165px] items-center justify-between text-left text-3xl text-snow font-poppins lg:pl-40 lg:pr-40 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <img
        className="relative w-[77px] h-8 overflow-hidden shrink-0"
        alt=""
        src="/logo.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[45px]">
        <div className="flex flex-row items-end justify-start gap-[40px] md:hidden">
          <div className="relative [text-decoration:underline] leading-[20px] text-white">
            Home
          </div>
          <div className="relative leading-[20px]">Skills</div>
          <div className="relative leading-[20px]">Services</div>
          <div className="relative leading-[20px]">About me</div>
          <div className="relative leading-[20px]">Portfolio</div>
          <div className="relative leading-[20px]">Contact</div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-[18px] overflow-hidden shrink-0 hidden md:flex">
          <img
            className="absolute top-[0px] left-[0px] w-6 h-[18px]"
            alt=""
            src="/vector.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
