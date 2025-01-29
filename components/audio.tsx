"use client";

import React, { useRef, useState, useEffect,  } from "react";
import { PlayIcon, Pause, Search, CircleArrowRight, CircleArrowLeft, SkipBack, SkipForward } from "lucide-react";
import { Input } from "./ui/input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import Image from "./ui/image";



const songs = [
  {
    title: "Vos y Yo",
    artist: "Laku",
    src: "/audio/untitled - Vos y Yo.mp3",
    img: "/images/Vos y yo Spotify.png",
    spotify: "https://open.spotify.com/intl-es/track/4smYIeyECsyPA0j8NEo2Vw?si=29515478f08e414e",
    youtube: "https://www.youtube.com/watch?v=wNzcxdWauws",
    date: "23/1/2025",
  },
  {
    title: "Una de Tantas",
    artist: "Laku",
    src: "/audio/untitled - Una de Tantas.mp3",
    img: "/images/Una de tantas spotify.png",
    spotify: "https://open.spotify.com/intl-es/track/42UJwkRXUBYkiwEsQNpb9n?si=59cc9679efbb44a5",
    youtube: "https://www.youtube.com/watch?v=DhdAn8Mm0jA",
    date: "24/5/2024",
  },
  {
    title: "Ambiciones",
    artist: "Laku",
    src: "/audio/untitled - Ambiciones.mp3",
    img: "/images/Ambiciones.png",
    spotify: "https://open.spotify.com/intl-es/track/4bzvYQkZsXXkAvLgHcaZCy?si=fd2f56fe9086492a",
    youtube: "https://www.youtube.com/watch?v=q7mSKWQ49pE",
    date: "29/2/2024",
  },
  {
    title: "La Marea",
    artist: "Laku",
    src: "/audio/untitled - La Marea.mp3",
    img: "/images/spoty la marea.jpg",
    spotify: "https://open.spotify.com/intl-es/track/3xz0IWx3y8z2VaKylWSYZ8?si=6a4604111ba547c0",
    youtube: "https://www.youtube.com/watch?v=k8d44TFWX08",
    date: "1/1/2024",
  },
  {
    title: "Volando",
    artist: "Laku",
    src: "/audio/untitled - Volando.mp3",
    img: "/images/Volando Spoty.png",
    spotify: "https://open.spotify.com/intl-es/track/3vpaLXdEu7oac7yzkhmL5x?si=dd1ce90421ea4590",
    youtube: "https://www.youtube.com/watch?v=YShkUscmPRo",
    date: "7/10/2023",
  },
  {
    title: "Venenosa",
    artist: "Laku",
    src: "/audio/untitled - Venenosa.mp3",
    img: "/images/Venenosa spotify.png",
    spotify: "https://open.spotify.com/intl-es/track/13WyPCemaFKk8USJzzl71P?si=54d14de92aa14ba3",
    youtube: "https://www.youtube.com/watch?v=G5zAL4krph0",
    date: "25/8/2023",
  },
  {
    title: "Constelaciones",
    artist: "Laku x Juani",
    src: "/audio/untitled - Constelaciones.mp3",
    img: "/images/constelaciones.png",
    spotify: "https://open.spotify.com/intl-es/track/1pkYEQe3ICtNVfb55M8vuu?si=2a4bcda2054e40bc",
    youtube: "https://www.youtube.com/watch?v=qnbOmX5dJ3c",
    date: "15/6/2023",
  },
  {
    title: "Magnetica",
    artist: "Laku",
    src: "/audio/untitled - magnética.mp3",
    img: "/images/Cover Magnetica 4.0.png",
    spotify: "https://open.spotify.com/intl-es/track/3KVOuDD0UDcaHk1z3u4GoZ?si=ea8dc3b7b3914823",
    youtube: "https://www.youtube.com/watch?v=BWyar04AytA",
    date: "17/12/2022",
  },
  {
    title: "Lo Que Quieras",
    artist: "Laku",
    src: "/audio/untitled - Lo que quieras.mp3",
    img: "/images/lo que quieras spotify.png",
    spotify: "https://open.spotify.com/intl-es/track/4LGgkCQ8qteYjKRANenH5o?si=a1de34df06864012",
    youtube: "https://www.youtube.com/watch?v=Y0joRVPP_7Q",
    date: "17/9/2022"
  },
];



const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const AudioPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [songState, setSongState] = useState({
    isPlaying: false,
    duration: 0,
    currentTime: 0,
  });

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.addEventListener("timeupdate", updateSongState);
    audio.addEventListener("loadedmetadata", updateSongState);
    return () => {
      audio.removeEventListener("timeupdate", updateSongState);
      audio.removeEventListener("loadedmetadata", updateSongState);
    };
  }, [currentSongIndex, volume]);

  const updateSongState = () => {
    setSongState({
      isPlaying: !audioRef.current.paused,
      duration: audioRef.current.duration,
      currentTime: audioRef.current.currentTime,
    });
  };


  const [audioState, setAudioState] = useState({
    isPlaying: false,
  });

  const audio = () => {
    if (audioState.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setAudioState((prev) => ({ isPlaying: !prev.isPlaying }));
  }

  const prevSong = () => {
    const newIndex = currentSongIndex - 1;
    if (newIndex < 0) {
      setCurrentSongIndex(songs.length - 1);
    } else {
      setCurrentSongIndex(newIndex);
    }
    setAudioState((prev) => ({ isPlaying: true }));
    setTimeout(() => audioRef.current.play(), 1);
  }


  const nextSong = () => {
    const newIndex = currentSongIndex + 1;
    if (newIndex >= songs.length) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(newIndex);
    }
    setAudioState((prev) => ({ isPlaying: true }));
    setTimeout(() => audioRef.current.play(), 0);
  }

  const changeSong = (index) => {
    setCurrentSongIndex(index);
    setAudioState((prev) => ({ isPlaying: true }));
    setTimeout(() => audioRef.current.play(), 100);
  };

  const seekAudio = (event) => {
    const newTime = event.target.value;
    audioRef.current.currentTime = newTime;
    setSongState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  // Paginación
  const [pageState, setPageState] = useState({
    currentPage: 1,
    songsPerPage: 5,
  });
  
  const totalPages = Math.ceil(filteredSongs.length / pageState.songsPerPage);
  
  const startIndex = (pageState.currentPage - 1) * pageState.songsPerPage;
  const endIndex = startIndex + pageState.songsPerPage;
  const currentSongs = filteredSongs.slice(startIndex, endIndex);
  
  const handleNextPage = () => {
    if (pageState.currentPage < totalPages) {
      setPageState((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
    }
  };
  
  const handlePrevPage = () => {
    if (pageState.currentPage > 1) {
      setPageState((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
    }
  };
  




  return (
    <div className="flex gap-8 items-center justify-center min-h-screen bg-gradient-to-t from-gray-800 via-black to-black text-white relative" id="temas">
      <Image src="/images/desenfocado 2.png" alt="Imagen de laku"  className=" absolute top-0 left-0 rotate-180" ></Image>
      <div className="mt-6 w-full max-w-md  rounded-lg p-4  shadow-lg z-20">
        {/* Barra de Búsqueda */}
        <div className="flex items-center gap-2 pb-4">
          <Input
            key="barraBusqueda"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Buscar canción..."
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Lista de Canciones */}
        <ul className="divide-y divide-gray-700  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {currentSongs.length > 0 ? (
            currentSongs.map((song, index) => (
              <li
                key={startIndex + index}
                onClick={() => changeSong(startIndex + index)}
                className={`p-3 cursor-pointer rounded-md transition duration-300 ${
                  startIndex + index === currentSongIndex
                    ? "border border-red-500 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                <span className="block font-semibold">{song.title}</span>
                <span className="text-gray-400 text-sm">{song.artist}</span>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400 py-3">No se encontró ningún tema</p>
          )}
        </ul>

        {/* Paginación */}
        <div className="flex gap-4 justify-center items-center p-4">
          <CircleArrowLeft
            className={`h-10 w-10 cursor-pointer p-2 rounded-full transition duration-300 ${
              pageState.currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700 text-white"
            }`}
            onClick={handlePrevPage}
          />
          <p className="text-gray-300 font-medium">{pageState.currentPage} / {totalPages}</p>
          <CircleArrowRight
            className={`h-10 w-10 cursor-pointer p-2 rounded-full transition duration-300 ${
              pageState.currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700 text-white"
            }`}
            onClick={handleNextPage}
          />
        </div>
      </div>


      <div className="z-20">
        {/* <h2 className="font-bold text-3xl text-center pb-6 text-red-500">LANZAMIENTOS</h2> */}
        <div className="w-full max-w-md p-5 bg-gray-800/30 rounded-xl shadow-lg text-center">
          <img src={songs[currentSongIndex].img} alt="Imagen del tema" className="pb-4 rounded-lg w-80 h-80" />
          <h3 className="text-xl font-bold ">{songs[currentSongIndex].title}</h3>
          <p className="text-sm text-gray-300">{songs[currentSongIndex].artist}</p>
          <p>{songs[currentSongIndex].date}</p>

          <div className="flex justify-center space-x-4 my-4">
            <button onClick={prevSong} className="bg-gray-700 p-3 rounded-full hover:bg-red-500 transition">
              <SkipBack size={32} />
            </button>
            <button onClick={audio} className="bg-gray-700 p-3 rounded-full hover:bg-red-500 transition">
              {songState.isPlaying ? <Pause size={32} /> : <PlayIcon size={32} />}
            </button>
            <button onClick={nextSong} className="bg-gray-700 p-3 rounded-full hover:bg-red-500 transition">
              <SkipForward size={32} />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-400">Tiempo de la canción</label>
            <input
              type="range"
              min="0"
              max={songState.duration || 0}
              value={songState.currentTime}
              onChange={seekAudio}
              className="w-full mt-2"
            />
            <div className="flex justify-between w-full text-sm text-gray-400">
              <span>{formatTime(songState.currentTime)}</span>
              <span>{formatTime(songState.duration)}</span>
            </div>
          </div>

          <div className="flex flex-col items-center mt-4">
            <label className="text-sm text-gray-400">Volumen</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-32 mt-1"
            />
          </div>

          <audio ref={audioRef} src={songs[currentSongIndex].src}></audio>
          
          <div className="icon-links">
          <a
              href={songs[currentSongIndex].spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="icon spotify-icon cursor-pointer "
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
              href={songs[currentSongIndex].youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="icon youtube-icon cursor-pointer"
            >
              <FontAwesomeIcon icon={faYoutube}  />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full max-w-md z-20">
        <h4 className="text-lg font-semibold text-red-500 mb-2">ULTIMOS LANZAMIENTOS</h4>
        <ul className="divide-y divide-gray-700">
        {songs.slice(0, 3).map((song, index) => (
          <li
            key={index} 
            onClick={() => changeSong(index)}
            className={`p-3 cursor-pointer hover:bg-gray-700 transition ${index === currentSongIndex ? "bg-red-500" : ""}`}
          >
            {song.title} - <span className="text-gray-400">{song.artist}</span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default AudioPlayer;
