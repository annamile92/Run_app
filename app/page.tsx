"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [tracks, setTracks] = useState(["track1.wav","track2.wav","track3.wav"]); // default
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(0);

  const audioRef = useRef(null);

  // calcular BPM
  useEffect(() => {
    if (tracks.length > 0) {
      const fileName = tracks[currentTrackIndex];
      if (typeof fileName === "string") {
        const match = fileName.match(/(\d+)bpm/i);
        setBpm(match ? parseInt(match[1]) : 0);
      }
    }
  }, [currentTrackIndex, tracks]);

  const playPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  return (
    <main className="main">
      <nav className="navbar">
        <h1 className="logo">RUNFORFUN</h1>
      </nav>

      <section className="hero">
        <img src="/banner-run.gif" alt="Corredores" className="heroImg" />
      </section>

      <section className="section">
        <h3 className="sectionTitle">🎧 Radio Live</h3>
        <div className="radioCard">
          <p className="trackName">{tracks[currentTrackIndex].replace(".wav","")}</p>
          <p className="trackBpm">Cadencia: {bpm} BPM</p>
          <audio ref={audioRef} src={`/radio-tracks/${tracks[currentTrackIndex]}`} onEnded={nextTrack}/>
          <div className="controls">
            <button onClick={prevTrack}>⏮️</button>
            <button onClick={playPause}>{isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}</button>
            <button onClick={nextTrack}>⏭️</button>
          </div>
        </div>
      </section>
    </main>
  );
}
