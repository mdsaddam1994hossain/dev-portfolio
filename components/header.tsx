import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DrawerMenu2 from "./drawer-menu2";
import PortalDrawer from "./portal-drawer";

const Header: NextPage = () => {
  const [isDrawerMenu2Open, setDrawerMenu2Open] = useState(false);

  const openDrawerMenu2 = useCallback(() => {
    setDrawerMenu2Open(true);
  }, []);

  const closeDrawerMenu2 = useCallback(() => {
    setDrawerMenu2Open(false);
  }, []);

  return (
    <>
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

export default Header;
