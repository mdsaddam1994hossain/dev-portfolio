import type { NextPage } from "next";

type CardContainerType = {
  userAvatar?: string;
  userName?: string;
  jobTitle?: string;
};

const CardContainer: NextPage<CardContainerType> = ({
  userAvatar,
  userName,
  jobTitle,
}) => {
  return (
    <div className="self-stretch h-[430px] transition duration-500 ease-in-out transform hover:-translate-y-5 flex-1 rounded-3xs flex flex-col py-[49px] px-5 items-center justify-start gap-[40px] bg-[url(/testimonials@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-mini text-gray-300 font-poppins md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative w-[100px] h-[100px] overflow-hidden shrink-0"
          alt=""
          src={userAvatar}
        />
        <p className="m-0 self-stretch relative leading-[160.02%] md:text-lg">
          <span className="block">{`I love Bit Software Solutions! This is an `}</span>
          <span className="block">amazing service and it has saved me and</span>
          <span className="block">
            my small business so much time. I plan to
          </span>
          <span className="block">use it for a long time to come.</span>
        </p>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[30px] text-xl">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative leading-[155.02%] font-semibold">
            {userName}
          </div>
          <div className="self-stretch relative text-sm leading-[155.02%] text-gray-700">
            {jobTitle}
          </div>
        </div>
        {/* <div className="rounded-8xs bg-gray-300 flex flex-row py-[9px] px-[15px] items-center justify-center gap-[6px] text-sm text-white">
          <img
            className="relative w-2.5 h-[12.5px]"
            alt=""
            src="/vector4.svg"
          />
          <div className="relative leading-[155.02%]">Play Video</div>
        </div> */}
      </div>
    </div>
  );
};

export default CardContainer;
