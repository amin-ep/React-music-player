import Audio from "./Audio";
import React, { useEffect, useState } from "react";
import M from "../../music/Anıl Emre Daldal M.mp3";
import M_Cover from "../../assets/AnilEmre.jpg";
import Hotline from "../../music/Billie Eilish - Hotline Bling.mp3";
import Hotline_Cover from "../../assets/Hotline-Bling-Cover.jpg";
import Lovely from "../../music/billie_eilish_khalid_-_lovely.mp3";
import Lovely_Cover from "../../assets/Billie-eilish2.jpg";
import Cantbuymeloving from "../../music/rauf_& faik__это ли счастье 128.mp3";
import Cantbuymeloving_Cover from "../../assets/cant-buyme-loving.webp";
import imstillhere from "../../music/Sia-Im-Still-Here-musicfeed.ir_.mp3";
import imstillhere_cover from "../../assets/im-still-here.jpg";
import caryon from "../../music/xxxtentacion_carry_on.mp3";
import caryon_cover from "../../assets/jocelyn-flores-cover.jpg";
import moonlight from "../../music/xxxtentacion_moonlight.mp3";
import moonlight_cover from "../../assets/xxxtentacion__moonlight.jpg";
import unstopable from '../../music/Sia - Unstoppable [320].mp3';
import unstopable_cover from '../../assets/Sia.jpg';
const AudioPlayer = () => {
  const [songs] = useState([
    {
      id: 'm1',
      src: M,
      cover: M_Cover,
      name: "M",
      artist: "Anil Emre Daldal",
    },
    {
      id: 'm2',
      src: Hotline,
      cover: Hotline_Cover,
      name: "Hotline Bling",
      artist: "Billie Eilish",
    },
    {
      id: 'm3',
      src: Lovely,
      cover: Lovely_Cover,
      name: "Lovely",
      artist: "Billie Eilish",
    },
    {
      id: 'm4',
      src: Cantbuymeloving,
      cover: Cantbuymeloving_Cover,
      name: "Can't Buy Me Loving",
      artist: "Rauf & Faik",
    },
    {
      id: 'm5',
      src: imstillhere,
      cover: imstillhere_cover,
      name: "I'm Still Here",
      artist: "Sia Furler",
    },
    {
      id: 'm6',
      src: caryon,
      cover: caryon_cover,
      name: "Cary On",
      artist: "XXXTentacion",
    },
    {
      id: 'm7',
      src: moonlight,
      cover: moonlight_cover,
      name: "Cary On",
      artist: "XXXTentacion",
    },
    {
      id: 'm8',
      src: unstopable,
      cover: unstopable_cover,
      name: "Unstoppable",
      artist: "Sia Furler",
    },
  ]);

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
