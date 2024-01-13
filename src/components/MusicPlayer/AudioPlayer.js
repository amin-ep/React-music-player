import Audio from "./Audio";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
const AudioPlayer = () => {
  const [songs] = useState(data);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
    console.log({ songs });
  }, [currentSongIndex, songs]);

  return (
    <div>
      <Audio
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
};

export default AudioPlayer;
