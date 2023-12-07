import PlayerControls from "@/common/PlayerControls";
import { data } from "@/data/data";
import React, { useEffect, useState } from "react";

const Description = ({ scrollTo }) => {
  const secondaryDescriptionClasses =
    "max-w-[30rem] border border-[#D22B2B] rounded-sm p-2 text-sm lg:text-lg";

  const [audioFile, setAudioFile] = useState("");
  const [audioStatus, setAudioStatus] = useState(false);
  const [tip, setTip] = useState(false);

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

  const changeSong = () => {
    let max = data?.songs?.length;
    let id = audioFile?.id + 1;
    if (id >= max) {
      setAudioFile(data?.songs[0]);
      localStorage.setItem("songId", id);
    } else {
      setAudioFile(data?.songs[id]);
      localStorage.setItem("songId", id);
    }
  };

  // useEffect(() => {
  //   let audio = document.getElementById("player");
  //   if (audioFile) {
  //     audio.play();
  //     setAudioStatus(true);
  //   }
  // }, [audioFile]);

  useEffect(() => {
    localStorage.getItem("songId") &&
    localStorage.getItem("songId") < data?.songs?.length
      ? setAudioFile(data?.songs[localStorage.getItem("songId")])
      : setAudioFile(data?.songs[0]);
  }, [data]);

  return (
    <div className="py-5 flex w-full">
      <div className="w-full lg:w-[70%]">
        <p className="text-md lg:text-lg">Hi, my name is</p>
        {/* <div className="relative"> */}
        <div className="cursor-none py-1 !mb-2 animate-text bg-gradient-to-r from-black via-[#D22B2B] to-black bg-clip-text text-transparent text-2xl lg:text-5xl font-black">
          {data?.name}.
        </div>
        <div className="my-2">
          <span className="mt-2 bg-[#D22B2B] p-1 text-white text-sm lg:text-lg">
            {data?.subTitle}
          </span>
        </div>
        <div className=" mt-[3rem] lg:mt-[5rem] relative cursor-pointer">
          <div
            className={`${secondaryDescriptionClasses} bg-[#D22B2B] text-[#D22B2B]`}
          >
            {data?.shortAbout}
          </div>
          <div
            className={`${secondaryDescriptionClasses}  absolute top-0 bg-white -translate-y-2 translate-x-2 lg:-translate-y-3 lg:translate-x-3 left-0`}
          >
            {data?.shortAbout}
          </div>
        </div>
        {/* </div> */}
      </div>

      <div
        className="w-[40%] border border-[#D22B2B] rounded-md shadow-lg max-w-[333px] items-center justify-center hidden lg:flex relative"
        // onMouseEnter={() => setTip(true)}
        // onMouseLeave={() => setTip(false)}
      >
        <audio
          id="player"
          src={audioFile?.audio}
          autoPlay
          loop
          playing={audioStatus}
        />
        {tip && (
          <div className="absolute top-8 left-5 border border-[#D22B2B] p-1 rounded-md">
            {/* <div className="text-xs">Play</div> */}
            <div className="text-xs text-[#D22B2B]">
              {`Click the Disk to ${audioStatus ? "Pause" : "Play"}`}
            </div>
          </div>
        )}
        <div
          className="shadow-sm bg-white absolute left-5 h-[10rem] w-[10rem]"
          style={{
            backgroundImage: `url(${audioFile?.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            // filter: "blur(3px)",
          }}
          //   onClick={() => toggleAudio()}
        ></div>
        <div
          class={`${
            audioStatus ? "music-disk" : ""
          } cursor-pointer font-bold ml-8 text-gray-700 rounded-full bg-[rgb(21,21,21)] flex items-center justify-center font-mono`}
          style={{ height: "9rem", width: "9rem" }}
          onClick={() => toggleAudio()}
        >
          <div
            class="font-bold text-gray-700 bg-[#D22B2B] rounded-full flex items-center justify-center font-mono"
            style={{
              height: "5rem",
              width: "5rem",
              backgroundImage: `url(${audioFile?.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              class="font-bold text-gray-700 bg-white rounded-full flex items-center justify-center font-mono"
              style={{
                height: "1rem",
                width: "1rem",
              }}
            ></div>
          </div>
        </div>

        <div className="absolute top-15 right-0">
          <PlayerControls
            audioStatus={audioStatus}
            setAudioStatus={setAudioStatus}
            changeSong={changeSong}
          />
        </div>

        <div className="absolute cursor-default -bottom-2 bg-white left-5 border border-[#D22B2B] p-1 px-2 rounded-md">
          <div className="flex items-center space-x-4">
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
            <div>
              <div className="font-bold text-[#D22B2B]">{audioFile?.name}</div>
              <div className="text-sm">{audioFile?.artists}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
