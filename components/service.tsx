import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ServiceType = {
  icon?: string;
  title?: string;
  development?: string;
  description?: string;

  /** Style props */
  vectorIconWidth?: Property.Width;
  webDevelopmentColor?: Property.Color;
};

const Service: NextPage<ServiceType> = ({
  icon,
  title,
  development,
  description,
  vectorIconWidth,
  webDevelopmentColor,
}) => {
  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: vectorIconWidth,
    };
  }, [vectorIconWidth]);

  const webDevelopmentStyle: CSS.Properties = useMemo(() => {
    return {
      color: webDevelopmentColor,
    };
  }, [webDevelopmentColor]);

  return (
    <div className="self-stretch flex-1 rounded-8xs bg-white flex flex-col py-[55px] px-5 items-center justify-start gap-[37px] text-center text-11xl text-darkslategray-100 font-poppins md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
      <img
        className="relative w-24 h-20"
        alt=""
        src={icon}
        style={vectorIconStyle}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <div
          className="self-stretch relative leading-[40px] font-semibold"
          style={webDevelopmentStyle}
        >
          <p className="m-0">{title}</p>
          <p className="m-0">{development}</p>
        </div>
        <div className="self-stretch relative text-3xl leading-[163%] text-dimgray">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Service;
