"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(0);

  const audioRef = useRef(null);

  // Cargar tracks desde la API
  useEffect(() => {
    async function loadTracks() {
      try {
        const response = await fetch("/api/get-radio-tracks");
        const data = await response.json();
        setTracks(data.files);
      } catch (err) {
        console.error("Error loading tracks:", err);
      }
    }
    loadTracks();
  }, []);

  // Actualizar BPM cuando cambie el track
  useEffect(() => {
    if (tracks.length > 0) {
      const fileName = tracks[currentTrackIndex];
      if (typeof fileName === "string") {
        const match = fileName.match(/(\d+)bpm/i);
        setBpm(match ? parseInt(match[1]) : 0);
      }
    }
  }, [currentTrackIndex, tracks]);

  // Auto play al cambiar track si isPlaying=true
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex, isPlaying]);

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
  };

  return (
    <main className="main">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">RUNFORFUN</h1>
        <button className="menuBtn">Menu</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src="/banner-run.gif" alt="Corredores" className="heroImg" />
        <div className="heroOverlay"></div>
        <div className="heroText">
          <h2 className="heroTitle">Run together</h2>
          <p className="heroSubtitle">Encuentra tu ritmo — Encuentra tu tribu</p>
        </div>
      </section>

      {/* RADIO LIVE */}
      <section className="section">
        <h3 className="sectionTitle">🎧 Radio Live</h3>
        {tracks.length === 0 ? (
          <p className="loading">Cargando audios…</p>
        ) : (
          <div className="radioCard">
            <p className="trackName">{tracks[currentTrackIndex].replace(".wav", "")}</p>
            <p className="trackBpm">Cadencia: {bpm} BPM</p>

            <audio
              ref={audioRef}
              src={`/radio-tracks/${tracks[currentTrackIndex]}`}
              onEnded={nextTrack}
            />

            <div className="controls">
              <button onClick={prevTrack} className="controlBtn" aria-label="Anterior">⏮️</button>
              <button onClick={playPause} className="playBtn" aria-label={isPlaying ? "Pausar" : "Reproducir"}>
                {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
              </button>
              <button onClick={nextTrack} className="controlBtn" aria-label="Siguiente">⏭️</button>
            </div>
          </div>
        )}
      </section>

      {/* Descripción */}
      <section className="section">
        <h3 className="sectionTitle">Sobre RunForFun</
