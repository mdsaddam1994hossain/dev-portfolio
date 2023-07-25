import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FrameComponentType = {
  fullName?: string;
  enterYourFullName?: string;

  /** Style props */
  propPadding?: Property.Padding;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  fullName,
  enterYourFullName,
  propPadding,
}) => {
  const frameInputStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-left text-xl text-white font-inter">
      <div className="self-stretch relative leading-[180.02%] font-medium">
        {fullName}
      </div>
      <input
        className="font-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border-[2px] border-solid border-gray-800"
        type="text"
        placeholder="Enter your full name"
        style={frameInputStyle}
      />
    </div>
  );
};

export default FrameComponent;
