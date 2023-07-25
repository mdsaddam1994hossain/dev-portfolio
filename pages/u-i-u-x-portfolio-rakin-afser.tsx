import type { NextPage } from "next";
import Header from "../components/header";
import Work from "../components/work";
import Contact from "../components/contact";

const UIUXPortfolioRakinAfser: NextPage = () => {
  return (
    <div className="relative w-full h-[8113px] flex flex-col items-start justify-start text-left text-45xl text-white font-poppins">
      <Header
        skills="Contributors"
        menu={false}
        navigationBackgroundColor="#fd5956"
      />
      <div className="self-stretch flex flex-row py-[140px] px-[148px] items-center justify-center gap-[68px] bg-[url(/frame-1945@3x.png)] bg-cover bg-no-repeat bg-[top] text-13xl text-tomato-300 lg:pl-[140px] lg:pr-[140px] lg:box-border md:flex-col md:gap-[100px] md:pl-9 md:pr-9 md:box-border sm:flex-col sm:gap-[80px] sm:pl-4 sm:pr-4 sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[38px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
              <div className="self-stretch relative tracking-[-0.5px] leading-[73px]">
                Hey, I’m Rakin Afser
              </div>
              <div className="self-stretch relative text-95xl tracking-[-0.5px] leading-[110px] font-semibold text-gray-1000 sm:text-95xl">
                <p className="m-0">{`UI/UX `}</p>
                <p className="m-0">
                  <span>Designer</span>
                  <span className="text-tomato-200">.</span>
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-5xl text-gray-1400">
              <div className="flex-1 relative leading-[36px]">
                <p className="m-0">{`User-Centric Product Designer: Achieving `}</p>
                <p className="m-0">
                  Business Goals through Interactive Experiences
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-8xs bg-tomato-200 flex flex-row py-3 px-5 items-center justify-center gap-[12px] text-5xl text-snow-100 font-manrope">
            <img
              className="relative w-[24.29px] h-[18.89px] overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
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
          src="/frame-1942-1@2x.png"
        />
      </div>
      <div className="self-stretch bg-tomato-100 flex flex-col py-[140px] px-[227px] items-center justify-start gap-[109px] text-center sm:pl-4 sm:pr-4 sm:box-border">
        <div className="w-[986px] flex flex-col items-center justify-start gap-[10px]">
          <h1 className="m-0 self-stretch relative text-[inherit] leading-[100px] font-semibold font-inherit sm:text-45xl sm:text-center sm:flex sm:max-w-0">
            Contributors
          </h1>
          <div className="self-stretch relative text-5xl text-gray-500">
            <p className="m-0">
              They support products that simplify and automate decent
            </p>
            <p className="m-0">
              mechanic processes saving time for activities.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[67px]">
          <div className="flex flex-row items-center justify-start gap-[106px] md:flex-col">
            <img
              className="relative w-[264px] h-[59px] object-cover"
              alt=""
              src="/behance3logopngtransparent-1@2x.png"
            />
            <img
              className="relative w-[241px] h-[78px] object-cover"
              alt=""
              src="/behance@2x.png"
            />
            <img
              className="relative w-[269px] h-[65px] object-cover"
              alt=""
              src="/behance1@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[84px] md:flex-col">
            <img
              className="relative w-[278px] h-16 object-cover"
              alt=""
              src="/behance2@2x.png"
            />
            <img
              className="relative w-[294px] h-[70px] object-cover"
              alt=""
              src="/behance3@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-[150px] px-40 items-center justify-start gap-[111px] text-center text-black lg:pl-[100px] lg:pr-[100px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
          <div className="self-stretch relative leading-[100px] font-semibold">
            <span>Services</span>
            <span className="text-tomato-100">.</span>
          </div>
          <div className="self-stretch relative text-5xl text-gray-1600">
            <p className="m-0">
              Our team members are experts in all facets of the design
            </p>
            <p className="m-0">
              industry including: print design, illustration, branding, identity
              and more.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-11xl md:flex-col sm:flex-col">
          <div className="self-stretch flex-1 rounded-8xs bg-whitesmoke flex flex-col py-[52px] px-5 items-center justify-start gap-[37px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <img
              className="relative w-[72px] h-[72px]"
              alt=""
              src="/vector12.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch relative leading-[48px] font-semibold">
                UI/UX Design
              </div>
              <div className="self-stretch relative text-3xl text-dimgray">
                <p className="m-0">Designing interfaces that</p>
                <p className="m-0">are intuitive, efficient, and</p>
                <p className="m-0">enjoyable to use.</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-8xs bg-whitesmoke shadow-[0px_337px_94px_rgba(0,_0,_0,_0),_0px_216px_86px_rgba(0,_0,_0,_0.01),_0px_121px_73px_rgba(0,_0,_0,_0.02),_0px_54px_54px_rgba(0,_0,_0,_0.03),_0px_13px_30px_rgba(0,_0,_0,_0.04),_0px_0px_0px_rgba(0,_0,_0,_0.05)] flex flex-col py-14 px-5 items-center justify-start gap-[35px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <img
              className="relative w-[85px] h-[68px]"
              alt=""
              src="/vector22.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch relative leading-[48px] font-semibold">{`Web & Mobile App`}</div>
              <div className="self-stretch relative text-3xl text-dimgray">
                <p className="m-0">Transforming ideas into</p>
                <p className="m-0">{`exceptional web & mobile`}</p>
                <p className="m-0">app experiences.</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-8xs bg-whitesmoke flex flex-col py-[55px] px-5 items-center justify-start gap-[34px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <img
              className="relative w-[84px] h-[70px]"
              alt=""
              src="/vector32.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch relative leading-[48px] font-semibold">{`Design & Creative`}</div>
              <div className="self-stretch relative text-3xl text-dimgray">
                <p className="m-0">Crafting visually stunning</p>
                <p className="m-0">designs that connect with</p>
                <p className="m-0">your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col py-[150px] px-[139px] items-start justify-start gap-[17px] bg-[url(/tittle--description@3x.png)] bg-cover bg-no-repeat bg-[top] lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:items-start sm:justify-start sm:pl-4 sm:pr-4 sm:box-border">
        <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.5px] leading-[110px] font-semibold font-inherit">
          About me
        </h1>
        <div className="self-stretch flex flex-row py-2.5 px-0 items-center justify-center text-17xl text-gray-600">
          <p className="m-0 relative tracking-[1px] leading-[54px]">
            <span className="block">
              Over the past 8 years, I have immersed myself in the world
            </span>
            <span className="block">
              of UI/UX design. Throughout my journey, I have had the
            </span>
            <span className="block">
              opportunity to work remotely for agencies, provide valuable
            </span>
            <span className="block">
              consultations to startups, and collaborate with talented
            </span>
            <span className="block">
              individuals to develop digital products for various business
            </span>
            <span className="block">and consumer needs.</span>
          </p>
        </div>
      </div>
      <Work
        vector="/vector42.svg"
        vector1="/vector42.svg"
        vector2="/vector42.svg"
        vector3="/vector42.svg"
        vector4="/vector5.svg"
        vector5="/vector42.svg"
        workBackgroundColor="#fff"
        featuredWorkColor="#000"
        arrowButtonBackgroundImage={`url("/arrow-button@3x.png")`}
        arrowButtonBackgroundImage1={`url("/arrow-button1@3x.png")`}
        arrowButtonBackgroundImage2={`url("/arrow-button2@3x.png")`}
        arrowButtonBackgroundImage3={`url("/arrow-button3@3x.png")`}
        arrowButtonBackgroundImage4={`url("/arrow-button4@3x.png")`}
        arrowButtonBackgroundImage5={`url("/arrow-button5@3x.png")`}
      />
      <Contact
        contactBackgroundColor="#fd5956"
        contactBackgroundColor1="rgba(255, 255, 255, 0.1)"
        contactMeBoxSizing="border-box"
        contactMeBoxSizing1="border-box"
        contactMeBoxSizing2="border-box"
        submitColor="#fd5956"
      />
      <div className="self-stretch bg-white flex flex-row py-[75px] px-[159px] items-center justify-between text-xl text-gray-1000 lg:pl-40 lg:pr-40 lg:box-border md:flex-col md:gap-[48px] md:pl-9 md:pr-9 md:box-border sm:gap-[24px] sm:items-start sm:justify-end">
        <div className="relative tracking-[-0.5px] leading-[36px] sm:text-lg">
          Design by Rakin Afser — Copyright 2023
        </div>
        <div className="flex flex-row items-center justify-start gap-[59px] md:gap-[32px]">
          <img
            className="relative w-[29.47px] h-[29.61px]"
            alt=""
            src="/group2.svg"
          />
          <img
            className="relative w-[29.61px] h-[29.61px]"
            alt=""
            src="/group12.svg"
          />
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/vector6.svg"
          />
          <img
            className="relative w-[36.42px] h-[29.61px]"
            alt=""
            src="/group21.svg"
          />
          <img className="relative w-10 h-6" alt="" src="/vector7.svg" />
        </div>
      </div>
    </div>
  );
};

export default UIUXPortfolioRakinAfser;
