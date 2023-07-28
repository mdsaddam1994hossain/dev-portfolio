import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerType = {
  vector?: string;
  frontAndBack?: string;
  endDevelopment?: string;
  frontEndDevelopmentEmphas?: string;

  /** Style props */
  propWidth?: Property.Width;
  propColor?: Property.Color;
};

const Container: NextPage<ContainerType> = ({
  vector,
  frontAndBack,
  endDevelopment,
  frontEndDevelopmentEmphas,
  propWidth,
  propColor,
}) => {
  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frontAndBackContainerStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex-1 rounded-8xs bg-white flex flex-col py-[52px] px-5 items-center justify-start gap-[37px] text-center text-11xl text-gray-200 font-poppins md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
      <img
        className="relative w-[100px] h-20"
        alt=""
        src={vector}
        style={vectorIconStyle}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <div
          className="self-stretch relative leading-[40px] font-semibold"
          style={frontAndBackContainerStyle}
        >
          <p className="m-0">{frontAndBack}</p>
          <p className="m-0">{endDevelopment}</p>
        </div>
        <div className="self-stretch relative text-3xl leading-[163%] text-dimgray">
          {frontEndDevelopmentEmphas}
        </div>
      </div>
    </div>
  );
};

export default Container;
