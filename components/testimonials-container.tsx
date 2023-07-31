import type { NextPage } from "next";
import { testimonialData } from "../utils/data";
import CardContainer from "./card-container";
import VideoModal from "./modal/VideoModal";

const TestimonialsContainer: NextPage = () => {
  return (
    <div
      id="testimonials"
      className="self-stretch bg-gray-300 flex flex-col py-[100px] px-[134px] items-center justify-start gap-[90px] text-center text-37xl text-white font-poppins lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <h4 className="m-0 self-stretch relative text-[inherit] tracking-[-0.5px] font-semibold font-inherit sm:text-29xl">
          Testimonials
        </h4>
        <p className="m-0 self-stretch relative text-9xl leading-[40px] text-gray-600 sm:text-xl sm:leading-[28px]">
          Customer reviews that build trust for a business
        </p>
      </div>
      <div className="self-stretch grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 text-mini text-gray-300 ">
        {testimonialData?.map((item, index) => {
          return (
            <CardContainer
              userAvatar={item?.clientImage}
              userName={item?.clientName}
              jobTitle={item?.clientdesig}
              description={item?.description}
              videoUrl={item?.videoUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsContainer;
