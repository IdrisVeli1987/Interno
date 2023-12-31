import React from "react";
import styles from "./style.module.css";
import video from "./aa.mp4";
import ReactPlayer from "react-player";
import { useState } from "react";
import classNames from "classnames";

const DesignVideo = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const [isPause, setIsPause] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.videoBox}`}>
          <div className={`${styles.video}`}>
            <ReactPlayer
              onPause={() => setIsplaying(!isPlaying)}
              url={video}
              onClick={(e) => console.log(e)}
              controls={true}
              playing={isPlaying}
              width={"100%"}
              style={{
                width: "100% !important",
                maxWidth: "1200px",
                height: "375px",
                borderRadius: "570px",
              }}
            />
            <div
              className={classNames({
                [styles.playButton]: true,
                "d-none": isPlaying,
              })}
              onClick={() => setIsplaying(!isPlaying)}
            >
              <div
                className={classNames({
                  [styles.pauseBtn]: true,
                  "d-none": isPause,
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 172 172"
                  fill="none"
                >
                  <g filter="url(#filter0_d_1_2163)">
                    <circle cx="86" cy="76" r="66" fill="white" />
                    <path
                      d="M82.941 91.4289L99.1666 77.7781C99.428 77.558 99.6378 77.2851 99.7817 76.9779C99.9255 76.6708 100 76.3368 100 75.9987C100 75.6607 99.9255 75.3266 99.7817 75.0195C99.6378 74.7123 99.428 74.4394 99.1666 74.2194L82.941 60.5686C81.3923 59.2658 79 60.3459 79 62.3479V89.6534C79 91.6554 81.3923 92.7355 82.941 91.4289Z"
                      fill="#CDA274"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_2163"
                      x="0"
                      y="0"
                      width="172"
                      height="172"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2163"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_2163"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignVideo;
