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
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      className="self-stretch flex-1 hover:top-4  rounded-8xs bg-white flex flex-col py-[55px] px-5 items-center justify-start gap-[37px] text-darkslategray-100 md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
    >
      <img className="relative w-24 h-20" alt="" src={icon} />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <div className="self-stretch relative leading-[40px] font-semibold">
          <p className="m-0 text-[34px] sm:text-[28px]">{title}</p>
        </div>
        <div className="self-stretch relative text-[20px] leading-[140%] sm:text-[16px] text-dimgray">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Service;
