import React from "react";
import classes from "./AudioProgress.module.css";

const AudioProgress = (props) => {
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };
  const progressChangeHandler = () => {
    props.audioRef.current.currentTime = props.progressbarRef.current.value;
  };
  return (
    <div className={classes.progress}>
      <div className={classes.time}>
        <span className={classes.time}>{formatTime(props.progressTime)}</span>
        <span className={classes.time}>{formatTime(props.duration)}</span>
      </div>
      <input
        type="range"
        defaultValue="0"
        ref={props.progressbarRef}
        onChange={progressChangeHandler}
      />
    </div>
  );
};

export default AudioProgress;
