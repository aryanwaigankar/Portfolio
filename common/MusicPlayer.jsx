import React, { useState } from "react";

const MusicPlayer = () => {
  const [audioStatus, setAudioStatus] = useState(false);

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
    <div className="">
      <div className="flex w-full">
        <div className="flex items-center justify-center relative">
          <audio
            id="player"
            src={"Memory Reboot.mp33"}
            autoPlay
            loop
            playing={false}
          />
          <div
            className="shadow-sm bg-white w-[10rem] h-[10rem] "
            style={{
              backgroundImage: "url(memoryReboot.jpg)",
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
            } cursor-pointer font-bold text-gray-700 rounded-full bg-[rgb(21,21,21)] flex items-center justify-center font-mono`}
            style={{
              height: "9rem",
              width: "9rem",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onClick={() => toggleAudio()}
          >
            <div
              class="font-bold text-gray-700 bg-[#D22B2B] rounded-full flex items-center justify-center font-mono"
              style={{
                height: "5rem",
                width: "5rem",
                backgroundImage: "url(memoryReboot.jpg)",
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
        </div>
        <div>controls</div>
      </div>
      <div className="relative">
        <div className="cursor-pointer border border-[#D22B2B] p-1 px-2 rounded-md ease-out hover:-translate-y-1 hover:translate-x-1 transition-all">
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
              <div className="font-bold text-[#D22B2B]">Memory Reboot</div>
              <div className="text-sm">Narvent and VØJ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
