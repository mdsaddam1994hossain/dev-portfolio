import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-300 flex flex-col py-[140px] px-[94px] items-start justify-start gap-[27px] text-left text-45xl text-white font-poppins sm:pl-4 sm:pr-4 sm:box-border">
      <h4 className="m-0 self-stretch relative text-[inherit] tracking-[-0.5px] leading-[110px] font-semibold font-inherit sm:text-37xl sm:leading-[64px]">
        About me
      </h4>
      <p className="m-0 self-stretch relative text-17xl tracking-[1px] leading-[56.5px] text-gray-600 sm:text-5xl sm:leading-[40px]">
        Boasting an extensive career spanning over 8 years, I have amassed
        invaluable experience in the field of web development. My skill set
        encompasses a comprehensive understanding of both front-end and back-end
        technologies, making me well-equipped to tackle any project with
        proficiency and finesse.
      </p>
    </div>
  );
};

export default About;
