import React from "react";
import classes from "./AudioControls.module.css";
import { RxTrackPrevious, RxPlay, RxPause, RxTrackNext } from "react-icons/rx";
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
            <RxTrackPrevious />
          </svg>
        </button>
        <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
          <svg>{!props.isPlaying ? <RxPlay /> : <RxPause />}</svg>
        </button>
        <button onClick={() => props.SkipSong()}>
          <svg>
            <RxTrackNext />
          </svg>
        </button>
      </div>
      <div className={classes.volume}>
        <input
          type="range"
          value={`${props.volume}`}
          onChange={(event) => props.setVolume(event.target.value)}
          min={0}
          max={100}
          ref={props.muteInputRef}
        />
        <button onClick={muteHandler}>
          <svg>
            {props.muteVolume || props.volume === 0 ? <TbVolumeOff /> : <TbVolume />}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AudioControls;
