import type { NextPage } from "next";
import { useState } from "react";
import VideoModal from "./modal/VideoModal";

type CardContainerType = {
  userAvatar?: string;
  userName?: string;
  jobTitle?: string;
  description?: string;
  videoUrl?: string;
};

const CardContainer: NextPage<CardContainerType> = ({
  userAvatar,
  userName,
  jobTitle,
  description,
  videoUrl,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="self-stretch h-[430px] transition duration-500 ease-in-out transform hover:-translate-y-5 flex-1 rounded-3xs flex flex-col py-[49px] px-5 items-center justify-start gap-[40px] bg-[url(/testimonials@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-mini text-gray-300 font-poppins md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid black",
            zIndex: 50,
            borderRadius: "50%",
            padding: "4px",
          }}
        >
          <img
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt=""
            src={userAvatar}
          />
        </div>
        <p className="m-0 self-stretch relative leading-[160.02%] md:text-lg">
          {description}
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
      </div>
      {videoUrl && (
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-8xs cursor-pointer  bg-gray-300 flex flex-row py-[9px] px-[15px] items-center justify-center gap-[6px] text-sm text-white"
        >
          <img
            className="relative w-2.5 h-[12.5px]"
            alt=""
            src="/vector4.svg"
          />
          <span className="relative leading-[155.02%]">Play Video</span>
        </button>
      )}
      <VideoModal
        openModal={openModal}
        videoUrl={videoUrl}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default CardContainer;
