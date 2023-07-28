import type { NextPage } from "next";

const ContactFormContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-100 flex flex-col py-[100px] px-52 items-center justify-center gap-[92px] text-center text-45xl text-white font-poppins lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:gap-[50px] sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <div className="self-stretch relative tracking-[-0.5px] font-semibold sm:text-29xl">
          Contact Me
        </div>
        <div className="self-stretch relative text-5xl leading-[40px] text-gray-600 sm:text-xl sm:leading-[28px]">
          <p className="m-0">{`If you are looking to hire a developer, `}</p>
          <p className="m-0">I’m currently available for freelance work</p>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-gray-900 flex flex-col py-[100px] px-28 items-start justify-start gap-[49px] text-left text-xl font-inter lg:pl-20 lg:pr-20 lg:box-border md:py-[50px] md:px-9 md:box-border sm:py-6 sm:px-4 sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
            <div className="self-stretch relative leading-[180.02%] font-medium">
              Full Name
            </div>
            <input
              className="font-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border-[2px] border-solid border-gray-800"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
            <div className="self-stretch relative leading-[180.02%] font-medium">
              Email Address
            </div>
            <input
              className="font-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border-[2px] border-solid border-gray-800"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
            <div className="self-stretch relative leading-[180.02%] font-medium">
              Phone Number
            </div>
            <input
              className="font-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border-[2px] border-solid border-gray-800"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
            <div className="self-stretch relative leading-[180.02%] font-medium">
              Message
            </div>
            <textarea
              className="bg-[transparent] font-medium font-inter text-xl self-stretch rounded-8xs flex flex-row pt-3.5 pb-[250px] pr-[100px] pl-[26px] items-center justify-center border-[2px] border-solid border-gray-800"
              placeholder="Message"
            />
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-[100px] bg-white self-stretch rounded-8xs h-[72px] flex flex-row box-border items-center justify-center">
          <div className="flex-1 relative text-13xl leading-[180.02%] font-semibold font-inter text-gray-300 text-center">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactFormContainer;
