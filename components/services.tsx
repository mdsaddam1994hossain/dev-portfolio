import type { NextPage } from "next";
import Service from "./service";

const Services: NextPage = () => {
  return (
    <div
      id="service"
      className="self-stretch flex flex-col py-[150px] px-40 items-center justify-start gap-[111px] bg-[url(/services@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-45xl text-white font-poppins lg:pl-[100px] lg:pr-[100px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <h4 className="m-0 self-stretch relative text-[inherit] leading-[100px] font-semibold font-inherit sm:text-37xl">
          <span>Services</span>
          <span className="text-gray-100">.</span>
        </h4>
        <p className="m-0 self-stretch relative text-5xl text-gray-500 sm:text-xl">
          I create custom, responsive websites that meet the unique needs of
          businesses and individuals, leveraging my expertise in front-end and
          back-end technologies.
        </p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-11xl text-gray-200 md:flex-col sm:flex-col">
        <Service
          title="Frontend & Backend Development"
          icon="/vector11.svg"
          description="Front-end development emphasizes the visual and interactive
          elements of a website, while back-end development handles the
          site's structure, system, data, and logic."
        />
        <Service
          title=" Mobile App Development"
          icon="/vector21.svg"
          description="I specialize in mobile app development for iOS and Android platforms. I create native or hybrid apps with a focus on performance, user experience &compatibility across devices."
        />
        <Service
          title="Web Development"
          icon="/vector31.svg"
          description="I’m offering web development services, building user-friendly
            websites and web applications with responsive designs and
            integrated backend systems."
        />
      </div>
    </div>
  );
};

export default Services;
