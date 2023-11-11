import React from "react";
import classes from "./AudioDisplay.module.css";
const AudioDisplay = (props) => {
  return (
    <div
      className={`${classes.display} ${
        props.isPlaying ? classes["display-play"] : ""
      }`}
    >
      <img src={props.details.cover} alt="Song's Cover" />
      <div className={classes.text}>
        <h5>{props.details.artist}</h5>
        <h2>{props.details.name}</h2>
      </div>
    </div>
  );
};

export default AudioDisplay;
