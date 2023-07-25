import type { NextPage } from "next";
import { useState, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import DrawerMenu2 from "./drawer-menu21";
import PortalDrawer from "./portal-drawer";

type HeaderType = {
  skills?: string;
  menu?: boolean;

  /** Style props */
  navigationBackgroundColor?: Property.BackgroundColor;
};

const Header: NextPage<HeaderType> = ({
  skills,
  menu,
  navigationBackgroundColor,
}) => {
  const navigationStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: navigationBackgroundColor,
    };
  }, [navigationBackgroundColor]);

  const [isDrawerMenu2Open, setDrawerMenu2Open] = useState(false);

  const openDrawerMenu2 = useCallback(() => {
    setDrawerMenu2Open(true);
  }, []);

  const closeDrawerMenu2 = useCallback(() => {
    setDrawerMenu2Open(false);
  }, []);

  return (
    <>
      <div
        className="self-stretch bg-gray-300 flex flex-row py-9 px-[165px] items-center justify-between text-left text-3xl text-snow-200 font-poppins lg:pl-40 lg:pr-40 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
        style={navigationStyle}
      >
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
            <div className="relative leading-[20px]">{skills}</div>
            <div className="relative leading-[20px]">Services</div>
            <div className="relative leading-[20px]">About me</div>
            <div className="relative leading-[20px]">Portfolio</div>
            <div className="relative leading-[20px]">Contact</div>
          </div>
          {!menu && (
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
          )}
        </div>
      </div>
      {isDrawerMenu2Open && (
        <PortalDrawer
          overlayColor="rgba(21, 20, 20, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerMenu2}
        >
          <DrawerMenu2 onClose={closeDrawerMenu2} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
