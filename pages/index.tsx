import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DrawerMenu2 from "../components/drawer-menu2";
import PortalDrawer from "../components/portal-drawer";
import Hero1 from "../components/hero1";
import Services1 from "../components/services1";
import About from "../components/about";
import Contact1 from "../components/contact1";
import SocialLinks from "../components/social-links";

const DevelopmentPortfolioRakin: NextPage = () => {
  const [isDrawerMenu2Open, setDrawerMenu2Open] = useState(false);

  const openDrawerMenu2 = useCallback(() => {
    setDrawerMenu2Open(true);
  }, []);

  const closeDrawerMenu2 = useCallback(() => {
    setDrawerMenu2Open(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-[7041px] flex flex-col items-start justify-start text-left text-45xl text-white font-poppins">
        <div className="self-stretch bg-gray-300 flex flex-row py-9 px-[165px] items-center justify-between text-3xl text-snow-200 lg:pl-40 lg:pr-40 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
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
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-[18px] overflow-hidden shrink-0 hidden md:flex"
              onClick={openDrawerMenu2}
            >
              <img
                className="absolute top-[0px] left-[0px] w-6 h-[18px]"
                alt=""
                src="/vector.svg"
              />
            </button>
          </div>
        </div>
        <Hero1 />
        <div className="self-stretch bg-gray-300 flex flex-col py-[140px] px-[70px] items-center justify-center gap-[109px] text-center lg:pl-10 lg:pr-10 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <div className="self-stretch flex flex-col py-0 px-2.5 items-center justify-start gap-[10px]">
            <h4 className="m-0 self-stretch relative text-[inherit] leading-[100px] font-semibold font-inherit sm:text-37xl sm:leading-[64px] sm:text-center sm:flex sm:max-w-0">
              Skills and Abilities
            </h4>
            <p className="m-0 self-stretch relative text-5xl text-gray-500 sm:text-xl">
              <span className="block">{`I have extensive JavaScript skills, including expertise in React, `}</span>
              <span className="block">
                React Native, Node.js, Next.js, and GraphQL.
              </span>
            </p>
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
        <Services1 />
        <About />
        <div className="self-stretch bg-darkslategray-100 flex flex-col py-[149px] px-[163px] items-start justify-start gap-[100px] font-inter lg:pl-[140px] lg:pr-[140px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
          <h4 className="m-0 self-stretch relative text-[inherit] leading-[110px] font-semibold font-inherit sm:text-37xl sm:leading-[60px]">
            Featured Work
          </h4>
          <div className="self-stretch grid flex-col items-start justify-start gap-[20px] grid-cols-[repeat(3_1fr)]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/1@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[45px] h-[45px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/7@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[45px] h-[45px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/8@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[45px] h-[45px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/9@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[45px] h-[45px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/10@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[45px] h-[45px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row pt-[355px] pb-5 pr-5 pl-[293px] items-start justify-start bg-[url(/11@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[45px] h-[45px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Contact1 />
        <SocialLinks />
      </div>
      {isDrawerMenu2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerMenu2}
        >
          <DrawerMenu2 onClose={closeDrawerMenu2} />
        </PortalDrawer>
      )}
    </>
  );
};

export default DevelopmentPortfolioRakin;
