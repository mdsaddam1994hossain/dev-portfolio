import type { NextPage } from "next";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import ContactModal from "./modal/ContactModal";

const Contact: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      id="contact"
      className="self-stretch bg-gray-300 flex flex-col pt-[80px] px-52 pb-[100px] items-center justify-center gap-[92px] text-center text-45xl text-white font-poppins lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <ToastContainer className={"text-lg "} />
      <div className="self-stretch -mt-[84px] flex flex-col items-center justify-start gap-[12px]">
        <div className="self-stretch text-[56px] relative tracking-[-0.5px] font-semibold sm:text-[48px]">
          <img src="/MessageIcon2.svg" className="w-24 h-24 sm:w-16 sm:h-16" />
          <h4 className="m-0 self-stretch relative text-[inherit] tracking-[-0.5px] font-semibold font-inherit sm:text-29xl">
            {" "}
            Contact Me
          </h4>
        </div>
        <div className="self-stretch relative text-9xl leading-[40px] text-gray-600 sm:text-xl">
          <p className="m-0">{`If you are looking to hire a developer, `}</p>
          <p className="m-0">I’m currently available for freelance work</p>
        </div>
      </div>

      <div className="self-stretch -mt-8 rounded-3xs bg-gray-900 flex flex-col p-[94px]  items-start justify-start gap-[49px] text-left text-xl font-inter   lg:box-border md:p-[50px]  md:box-border sm:p-6  sm:box-border">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-tomato-100 cursor-pointer font-medium font-poppins  bg-white w-full text-[32px] sm:text-[20px] text-gray-200  h-20 sm:h-12 rounded-[5px]"
        >
          Give Us Your Information
        </button>
      </div>

      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Contact;
