import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type WorkType = {
  vector?: string;
  vector1?: string;
  vector2?: string;
  vector3?: string;
  vector4?: string;
  vector5?: string;

  /** Style props */
  workBackgroundColor?: Property.BackgroundColor;
  featuredWorkColor?: Property.Color;
  arrowButtonBackgroundImage?: Property.BackgroundImage;
  arrowButtonBackgroundImage1?: Property.BackgroundImage;
  arrowButtonBackgroundImage2?: Property.BackgroundImage;
  arrowButtonBackgroundImage3?: Property.BackgroundImage;
  arrowButtonBackgroundImage4?: Property.BackgroundImage;
  arrowButtonBackgroundImage5?: Property.BackgroundImage;
};

const Work: NextPage<WorkType> = ({
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  workBackgroundColor,
  featuredWorkColor,
  arrowButtonBackgroundImage,
  arrowButtonBackgroundImage1,
  arrowButtonBackgroundImage2,
  arrowButtonBackgroundImage3,
  arrowButtonBackgroundImage4,
  arrowButtonBackgroundImage5,
}) => {
  const workStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: workBackgroundColor,
    };
  }, [workBackgroundColor]);

  const featuredWorkStyle: CSS.Properties = useMemo(() => {
    return {
      color: featuredWorkColor,
    };
  }, [featuredWorkColor]);

  const arrowButtonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: arrowButtonBackgroundImage,
    };
  }, [arrowButtonBackgroundImage]);

  const arrowButton1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: arrowButtonBackgroundImage1,
    };
  }, [arrowButtonBackgroundImage1]);

  const arrowButton2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: arrowButtonBackgroundImage2,
    };
  }, [arrowButtonBackgroundImage2]);

  const arrowButton3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: arrowButtonBackgroundImage3,
    };
  }, [arrowButtonBackgroundImage3]);

  const arrowButton4Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: arrowButtonBackgroundImage4,
    };
  }, [arrowButtonBackgroundImage4]);

  const arrowButton5Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: arrowButtonBackgroundImage5,
    };
  }, [arrowButtonBackgroundImage5]);

  return (
    <div
      className="self-stretch flex-1 bg-darkslategray-100 flex flex-col pt-[90px] px-40 pb-[150px] items-start justify-start gap-[90px] text-left text-45xl text-white font-inter lg:pl-[34px] lg:pr-[140px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:pb-[150px] sm:box-border"
      style={workStyle}
    >
      <div
        className="self-stretch relative tracking-[-0.5px] leading-[110px] font-semibold"
        style={featuredWorkStyle}
      >
        Featured Work
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[20px] md:flex-col sm:flex-col">
          <div
            className="self-stretch flex-1 rounded-3xs flex flex-row pt-[645px] pb-[50px] pr-[50px] pl-[445px] items-center justify-end bg-[url(/arrow-button6@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            style={arrowButtonStyle}
          >
            <img className="relative w-[55px] h-[55px]" alt="" src={vector} />
          </div>
          <div
            className="self-stretch flex-1 rounded-3xs flex flex-row pt-[645px] pb-[50px] pr-[50px] pl-[445px] items-center justify-end bg-[url(/arrow-button11@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            style={arrowButton1Style}
          >
            <img className="relative w-[55px] h-[55px]" alt="" src={vector1} />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[20px] md:flex-col sm:flex-col">
          <div
            className="self-stretch flex-1 rounded-3xs flex flex-row pt-[645px] pb-[50px] pr-[50px] pl-[445px] items-center justify-end bg-[url(/arrow-button21@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            style={arrowButton2Style}
          >
            <img className="relative w-[55px] h-[55px]" alt="" src={vector2} />
          </div>
          <div
            className="self-stretch flex-1 rounded-3xs flex flex-row pt-[645px] pb-[50px] pr-[50px] pl-[445px] items-center justify-end bg-[url(/arrow-button31@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            style={arrowButton3Style}
          >
            <img className="relative w-[55px] h-[55px]" alt="" src={vector3} />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[20px] md:flex-col sm:flex-col">
          <div
            className="self-stretch flex-1 rounded-3xs flex flex-row pt-[645px] pb-[50px] pr-[50px] pl-[445px] items-center justify-end bg-[url(/arrow-button41@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            style={arrowButton4Style}
          >
            <img className="relative w-[55px] h-[55px]" alt="" src={vector4} />
          </div>
          <div
            className="self-stretch flex-1 rounded-3xs flex flex-row pt-[645px] pb-[50px] pr-[50px] pl-[445px] items-center justify-end bg-[url(/arrow-button51@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
            style={arrowButton5Style}
          >
            <img className="relative w-[55px] h-[55px]" alt="" src={vector5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
