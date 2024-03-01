import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./Audio.module.css";
import AudioControls from "./AudioControls";
import AudioDisplay from "./AudioDisplay";
import AudioProgress from "./AudioProgress";

const Audio = (props) => {
  const audioRef = useRef(null);
  const progressbarRef = useRef(null);
  const playAnimationRef = useRef();
  const muteInputRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressTime, setProgressTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [muteVolume, setMuteVolume] = useState(false);

  const repeat = useCallback(() => {
    if (!audioRef.current) {
      return;
    }
    const currentTime = audioRef.current.currentTime;
    setProgressTime(currentTime);
    progressbarRef.current.value = currentTime;
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  });

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [audioRef, volume, muteVolume]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  const onLoadedMetaDate = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressbarRef.current.max = seconds;
  };

  return (
    <>
      <div className={classes.audio}>
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetaDate}
        ></audio>
        <AudioDisplay
          details={props.songs[props.currentSongIndex]}
          isPlaying={isPlaying}
        />
        <AudioProgress
          progressbarRef={progressbarRef}
          audioRef={audioRef}
          progressTime={progressTime}
          duration={duration}
        />
        <AudioControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
          volume={volume}
          setVolume={setVolume}
          muteVolume={muteVolume}
          setMuteVolume={setMuteVolume}
          muteInputRef={muteInputRef}
        />
        <p className={classes.next}>
          Next: {props.songs[props.nextSongIndex].name} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </p>
      </div>
    </>
  );
};

export default Audio;
