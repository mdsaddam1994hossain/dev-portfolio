import type { NextPage } from "next";
import { useState, useMemo, useCallback, useEffect } from "react";
import CSS, { Property } from "csstype";
import DrawerMenu2 from "./drawer-menu21";
import PortalDrawer from "./portal-drawer";
import { useRouter } from "next/router";

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
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
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

  const scrollToSection = (sectionId: string) => {
    setActive(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isDrawerMenu2Open) {
      closeDrawerMenu2();
    }
    if (router.pathname !== "/") {
      router.push("/");
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      scrollToSection(active);
    }
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <div
      className={`top-0 z-50 mt-14 ${
        scrolled
          ? "sticky duration-1000 shadow-lg  ease-in-out transition-all translate-y-0"
          : "-translate-y-14 -mb-14"
      }`}
    >
      <div
        className="self-stretch bg-gray-300 flex flex-row py-[30px] px-[165px] items-center justify-between text-left text-3xl text-snow-200 font-poppins lg:pl-40 lg:pr-40 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
        style={navigationStyle}
      >
        <img
          onClick={() => scrollToSection("home")}
          className="relative w-[77px] h-8 overflow-hidden shrink-0 cursor-pointer"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[45px]">
          <div className="flex flex-row items-end justify-start gap-[40px] md:hidden">
            <div
              onClick={() => scrollToSection("home")}
              className={`relative  leading-[20px] text-white text-white cursor-pointer ${
                active === "home" &&
                "underline underline-offset-8 transition-all ease-in-out duration-500"
              }`}
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection("skill")}
              className={`relative leading-[20px] text-white cursor-pointer ${
                active === "skill" &&
                "underline underline-offset-8 transition-all ease-in-out duration-500"
              }`}
            >
              Skills
            </div>
            <div
              onClick={() => scrollToSection("service")}
              className={`relative leading-[20px] text-white cursor-pointer ${
                active === "service" &&
                "underline underline-offset-8 transition-all ease-in-out duration-500"
              }`}
            >
              Services
            </div>
            <div
              onClick={() => scrollToSection("about")}
              className={`relative leading-[20px] text-white cursor-pointer ${
                active === "about" &&
                "underline underline-offset-8 transition-all ease-in-out duration-500"
              }`}
            >
              About me
            </div>
            <div
              onClick={() => scrollToSection("portfolio")}
              className={`relative leading-[20px] text-white cursor-pointer ${
                active === "portfolio" &&
                "underline underline-offset-8 transition-all ease-in-out duration-500"
              }`}
            >
              Portfolio
            </div>
            <div
              onClick={() => scrollToSection("contact")}
              className={`relative leading-[20px] text-white cursor-pointer ${
                active === "contact" &&
                "underline underline-offset-8 transition-all ease-in-out duration-500"
              }`}
            >
              Contact
            </div>
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
          <DrawerMenu2
            scrollToSection={scrollToSection}
            onClose={closeDrawerMenu2}
          />
        </PortalDrawer>
      )}
    </div>
  );
};

export default Header;
