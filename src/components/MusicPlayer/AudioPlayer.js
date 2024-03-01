import Audio from "./Audio";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import styles from "./AudioPlayer.module.css";
import Container from "../UI/Container";
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
    <Container className={styles.container}>
      <Audio
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      />
      <ul className={styles.list}>
        {songs.map((song, index) => (
          <li
            key={song.id}
            className={`${styles["list-item"]} ${
              index === currentSongIndex && styles.active
            }`}
            onClick={() => setCurrentSongIndex(index)}
          >
            <img
              src={song.cover}
              alt={song.name}
              className={styles["list-img"]}
            />
            <div className={styles["list-details"]}>
              <p>{song.name}</p>
              <p>{song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AudioPlayer;
