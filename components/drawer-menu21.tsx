import type { NextPage } from "next";
import { useEffect } from "react";

type DrawerMenu21Type = {
  onClose?: () => void;
};

const DrawerMenu21: NextPage<DrawerMenu21Type> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white flex flex-col p-[50px] box-border items-start justify-start gap-[44px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] h-full max-w-[90%] overflow-auto text-left text-3xl text-gray-300 font-poppins"
      data-animate-on-scroll
    >
      <img
        className="relative w-[21.62px] h-[21.62px] overflow-hidden shrink-0"
        alt=""
        src="/close.svg"
      />
      <div className="relative leading-[20px]">Home</div>
      <div className="relative leading-[20px]">Contributors</div>
      <div className="relative leading-[20px]">Services</div>
      <div className="relative leading-[20px]">About me</div>
      <div className="relative leading-[20px]">Portfolio</div>
      <div className="relative leading-[20px]">Contact</div>
    </div>
  );
};

export default DrawerMenu21;
