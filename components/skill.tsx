import type { NextPage } from "next";

const Skill: NextPage = () => {

  const handleDownload = () => {
    const downloadUrl = '/saddam_resume.pdf'; // Path to your resume file

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute to the download URL
    link.href = downloadUrl;

    // Set the download attribute to specify the file name
    link.download = 'resume.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <div
      id="skill"
      className="self-stretch bg-gray-300 flex flex-col py-[100px] px-[70px] items-center justify-center gap-[109px] text-center lg:pl-10 lg:pr-10 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <div className="self-stretch flex flex-col py-0 px-2.5 items-center justify-start gap-[10px]">
        {/* <h4 className="m-0 self-stretch w-full relative text-[inherit] leading-[100px] font-semibold font-poppins sm:text-[48px] sm:leading-[64px] sm:text-center sm:max-w-0">
          Skills and Abilities
        </h4> */}
        <div data-aos="flip-up" data-aos-duration="500">
          <h4 className="m-0 text-[40px] sm:text-[32px]">
            {" "}
            Skills and Abilities
          </h4>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="m-0 self-stretch relative text-[24px] text-gray-500 sm:text-[18px]"
        >
          <span className="block">{`I have extensive JavaScript skills, including expertise in React, `}</span>
          <span className="block">
            React Native, Node.js and Next.js.
          </span>
        </p>
      </div>
      <div
        data-aos="flip-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="self-stretch flex flex-col items-center justify-center gap-[46px]"
      >
        <div className="self-stretch flex flex-row items-center justify-center gap-[124px] sm:flex-col">
          <img
            className="relative w-[161px] h-[146px] object-cover"
            alt=""
            src="/pngwing@2x.png"
          />
          <img
            className="relative w-[103px] h-[117px] object-cover"
            alt=""
            src="/pngwing1@2x.png"
          />
          <img
            className="relative w-[105px] h-[115px] object-cover"
            alt=""
            src="/pngwing2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[100px] sm:flex-col">
          <img
            className="relative w-[95px] h-[108px] object-cover"
            alt=""
            src="/pngwing3@2x.png"
          />
          <img
            className="relative w-[315px] h-[115px] object-cover"
            alt=""
            src="/pngwing4@2x.png"
          />
          <img
            className="relative w-[91px] h-[89px] object-cover"
            alt=""
            src="/pythonlogonotext-1@2x.png"
          />
        </div>
      </div>
      <div className="-my-12">
        <button onClick={handleDownload}  className="py-2 px-8 font-sans text-lg font-semibold rounded-full">
          Resume Download
        </button>
      </div>
    </div>
  );
};

export default Skill;
