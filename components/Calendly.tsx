import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="self-stretch flex px-[100px] mb-20 gap-[120px] sm:gap-16 sm:px-[20px]  flex-row sm:flex-col  lg:mb-0 items-center justify-center mt-24  mx-4 sm:mx-4 ">
      <div className="p-7 sm:p-3 bg-white  rounded-lg w-full md:w-3/7 ">
        <div className="flex justify-center">
          {" "}
          <img src={"/job_9.webp"} alt="Google Meet" width={350} height={350} />
        </div>
        <h1
          className="text-lg font-semibold text-center text-gray-200 mb-4  font-sans "
          style={{ fontFamily: "Inter" }}
        >
          Schedule Your Free Consultation - A Personalized Path to Success
        </h1>

        <p
          className="text-lg text-justify text-gray-200 font-sans font-medium"
          style={{ fontFamily: "Inter" }}
        >
          Welcome to our exclusive free consultation service! We believe that
          every business is unique, and our mission is to help you thrive in
          today's competitive landscape. By scheduling a consultation with us,
          you gain access to our top-notch experts who will provide personalized
          insights and tailor-made solutions for your business challenges.
        </p>
      </div>
      <div className="shadow-sm bg-white  rounded-lg w-full md:w-4/7   ">
        <InlineWidget url="https://calendly.com/schedule-a-free-consultations" />
      </div>
    </div>
  );
};

export default Calendly;
