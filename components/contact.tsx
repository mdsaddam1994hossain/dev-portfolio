import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import FrameComponent from "./frame-component";

type ContactType = {
  /** Style props */
  contactBackgroundColor?: Property.BackgroundColor;
  contactBackgroundColor1?: Property.BackgroundColor;
  contactMeBoxSizing?: Property.BoxSizing;
  contactMeBoxSizing1?: Property.BoxSizing;
  contactMeBoxSizing2?: Property.BoxSizing;
  submitColor?: Property.Color;
};

const Contact: NextPage<ContactType> = ({
  contactBackgroundColor,
  contactBackgroundColor1,
  contactMeBoxSizing,
  contactMeBoxSizing1,
  contactMeBoxSizing2,
  submitColor,
}) => {
  const contactStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: contactBackgroundColor,
    };
  }, [contactBackgroundColor]);

  const contact1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: contactBackgroundColor1,
    };
  }, [contactBackgroundColor1]);

  const frameInputStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: contactMeBoxSizing,
    };
  }, [contactMeBoxSizing]);

  const frameInputStyle1: CSS.Properties = useMemo(() => {
    return {
      boxSizing: contactMeBoxSizing1,
    };
  }, [contactMeBoxSizing1]);

  const frameInputStyle2: CSS.Properties = useMemo(() => {
    return {
      boxSizing: contactMeBoxSizing2,
    };
  }, [contactMeBoxSizing2]);

  const submitStyle: CSS.Properties = useMemo(() => {
    return {
      color: submitColor,
    };
  }, [submitColor]);

  return (
    <div
      className="self-stretch bg-gray-300 flex flex-col pt-[140px] px-52 pb-[200px] items-center justify-center gap-[92px] text-center text-45xl text-white font-poppins lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
      style={contactStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <div className="self-stretch relative tracking-[-0.5px] font-semibold">
          Contact Me
        </div>
        <div className="self-stretch relative text-9xl leading-[40px] text-gray-600">
          <p className="m-0">{`If you are looking to hire a developer, `}</p>
          <p className="m-0">I’m currently available for freelance work</p>
        </div>
      </div>
      <div
        className="self-stretch rounded-3xs bg-gray-900 flex flex-col py-[100px] px-28 items-start justify-start gap-[49px] text-left text-xl font-inter lg:pl-20 lg:pr-20 lg:box-border md:py-[50px] md:px-9 md:box-border sm:py-6 sm:px-4 sm:box-border"
        style={contact1Style}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
          <FrameComponent fullName="Full Name" />
          <FrameComponent
            fullName="Email Address"
            propPadding="20px 100px 20px 25px"
          />
          <FrameComponent
            fullName="Phone Number"
            propPadding="20px 100px 20px 25px"
          />
          <FrameComponent
            fullName="Message"
            propPadding="14px 100px 250px 26px"
          />
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-[100px] bg-white self-stretch rounded-8xs h-[72px] flex flex-row box-border items-center justify-center">
          <div
            className="flex-1 relative text-13xl leading-[180.02%] font-semibold font-inter text-gray-300 text-center"
            style={submitStyle}
          >
            Submit
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
