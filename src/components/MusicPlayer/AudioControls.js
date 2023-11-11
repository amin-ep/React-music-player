import React from "react";
import classes from "./AudioControls.module.css";
import { HiPlay, HiPause } from "react-icons/hi2";
import { BsFillSkipStartFill, BsSkipEndFill } from 'react-icons/bs'
import { TbVolume, TbVolumeOff } from "react-icons/tb";
const AudioControls = (props) => {
  const muteHandler = () => {
    props.setMuteVolume((prev) => !prev);
  };
  return (
    <div className={classes.controls}>
      <div className={classes["control-btn"]}>
        <button onClick={() => props.SkipSong(false)}>
          <svg>
            <BsFillSkipStartFill />
          </svg>
        </button>
        <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
          <svg>{!props.isPlaying ? <HiPlay /> : <HiPause />}</svg>
        </button>
        <button onClick={() => props.SkipSong()}>
          <svg>
            <BsSkipEndFill />
          </svg>
        </button>
        <button onClick={muteHandler}>
          <svg>
            {props.muteVolume || props.volume === 0 ? (
              <TbVolumeOff />
            ) : (
              <TbVolume />
            )}
          </svg>
        </button>
      </div>
      {/* <div className={classes.volume}>
        <input
          type="range"
          value={`${props.volume}`}
          onChange={(event) => props.setVolume(event.target.value)}
          min={0}
          max={100}
          ref={props.muteInputRef}
        />
      
      </div> */}
    </div>
  );
};

export default AudioControls;
