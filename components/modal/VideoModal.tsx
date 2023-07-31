import React, { FC, useState } from "react";
import { Modal } from "flowbite-react";

import ReactPlayer from "react-player";

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
        className={`pt-[10%] sm:pt-0`}
      >
        <Modal.Header className="bg-gray-200 h-5 "></Modal.Header>
        <Modal.Body>
          <div className="relative mt-1 h-96 rounded-xl  lg:h-96 xl:h-[450px]">
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
