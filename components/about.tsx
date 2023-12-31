import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div
      id="about"
      className="self-stretch bg-gray-300 flex flex-col py-[100px] px-40 items-start justify-start gap-[27px] text-left text-45xl text-white font-poppins sm:gap-[10px] md:pl-9 md:pr-9 sm:pl-4 sm:pr-4 sm:box-border"
    >
      <h4
        data-aos="flip-up"
        data-aos-duration="500"
        className="m-0 self-stretch relative text-[40px] text-[inherit] tracking-[-0.5px] leading-[80px] font-semibold font-inherit sm:text-[48px] sm:leading-[64px]"
      >
        About me
      </h4>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
        className="m-0 self-stretch relative text-[24px] tracking-[1px] leading-[40px] text-gray-600 sm:text-[18px] sm:leading-[30px]"
      >
        Boasting an extensive career spanning over 2.5 years, I have amassed
        invaluable experience in the field of web development. My skill set
        encompasses a comprehensive understanding of both front-end and back-end
        technologies, making me well-equipped to tackle any project with
        proficiency and finesse.
      </p>
    </div>
  );
};

export default About;
