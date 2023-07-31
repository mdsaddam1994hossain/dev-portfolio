import type { NextPage } from "next";
import { useEffect } from "react";

type DrawerMenu21Type = {
  onClose?: () => void;
  scrollToSection: (value: string) => void;
};

const DrawerMenu21: NextPage<DrawerMenu21Type> = ({
  onClose,
  scrollToSection,
}) => {
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
        onClick={onClose}
        className="relative w-[21.62px] h-[21.62px] overflow-hidden shrink-0"
        alt=""
        src="/close.svg"
      />

      <div
        onClick={() => scrollToSection("home")}
        className="relative leading-[20px] "
      >
        Home
      </div>
      <div
        onClick={() => scrollToSection("skill")}
        className="relative leading-[20px]"
      >
        Skill
      </div>
      <div
        onClick={() => scrollToSection("service")}
        className="relative leading-[20px]"
      >
        Services
      </div>
      <div
        onClick={() => scrollToSection("about")}
        className="relative leading-[20px]"
      >
        About me
      </div>
      <div
        onClick={() => scrollToSection("our_work")}
        className="relative leading-[20px]"
      >
        Our work
      </div>
      <div
        onClick={() => scrollToSection("testimonials")}
        className="relative leading-[20px]"
      >
        Testimonials
      </div>
      <div
        onClick={() => scrollToSection("contact")}
        className="relative leading-[20px] "
      >
        Contact
      </div>
    </div>
  );
};

export default DrawerMenu21;
