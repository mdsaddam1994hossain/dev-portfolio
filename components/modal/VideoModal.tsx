import React, { FC, useState } from "react";
import { CustomFlowbiteTheme, Modal } from "flowbite-react";

import ReactPlayer from "react-player";

const customTheme: CustomFlowbiteTheme["modal"] = {
  header: {
    close: {
      base: "hover:bg-white  text-white",
    },
  },
};

type Props = {
  openModal: boolean;
  videoUrl: string | undefined;
  setOpenModal: (v: boolean) => void;
};

const VideoModal: FC<Props> = ({ openModal, setOpenModal, videoUrl }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="transition ease-in-out delay-100">
      <Modal
        position="center"
        show={openModal === true}
        onClose={() => {
          setOpenModal(false);
        }}
        theme={customTheme}
        className={`pt-[15%] sm:pt-0`}
      >
        <Modal.Body className="!p-2">
          <button
            className="absolute bg-gray-200 hover:bg-black cursor-pointer w-8 h-8 -right-4 -top-4 rounded-full flex justify-center items-center"
            onClick={() => setOpenModal(false)}
          >
            <img src="/close2.svg" className="w-3 h-3" />
          </button>
          <div className="relative  h-96 rounded-xl  lg:h-96 xl:h-[450px]">
            <ReactPlayer
              url={`${videoUrl}`}
              className="react-player-large"
              style={{ borderRadius: "16px" }}
              playIcon={<button onClick={() => setPlaying(true)} />}
              controls={true}
              playsinline
              loop
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
              width="100%"
              height="100%"
              playing={playing}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoModal;
