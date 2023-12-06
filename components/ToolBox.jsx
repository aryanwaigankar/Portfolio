import GithubSvg from "@/icons/GithubSvg";
import LinkedInSvg from "@/icons/LinkedInSvg";
import MailSvg from "@/icons/MailSvg";
import MuteSvg from "@/icons/MuteSvg";
import VolumeUpSvg from "@/icons/VolumeUpSvg";
import React from "react";

const ToolBox = ({ audioStatus, setAudioStatus }) => {
  const toggleAudio = () => {
    let audio = document.getElementById("player");
    if (audio.paused) {
      audio.play();
      setAudioStatus(true);
    } else {
      audio.pause();
      setAudioStatus(false);
    }
  };
  return (
    <div className="bg-white transition-all duration-500 shadow-md px-3 py-2 rounded-md">
      {/* <div className={`my-4 cursor-pointer`}>
        <div className={"flex relative justify-between w-[17px] h-[17px]"}>
          <span
            className={`audio-bars ${audioStatus ? "audio-bars-move" : ""}`}
          />
          <span
            className={`audio-bars ${audioStatus ? "audio-bars-move" : ""}`}
          />
          <span
            className={`audio-bars ${audioStatus ? "audio-bars-move" : ""}`}
          />
        </div>
      </div> */}
      {/* {audioStatus ? (
        <div className="my-4 cursor-pointer" onClick={() => toggleAudio()}>
          <MuteSvg size="24" fill="#D22B2B" />
        </div>
      ) : (
        <div className="my-4 cursor-pointer" onClick={() => toggleAudio()}>
          <VolumeUpSvg size="24" fill="#D22B2B" />
        </div>
      )} */}
      <div className="my-5 cursor-pointer">
        <GithubSvg size="24" fill="#D22B2B" />
      </div>
      <div className="my-5 cursor-pointer">
        <LinkedInSvg size="24" fill="#D22B2B" />
      </div>
      <div className="my-5 cursor-pointer">
        <MailSvg size="24" fill="#D22B2B" />
      </div>
    </div>
  );
};

export default ToolBox;
