"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const tracks = [
    "runner_camila_152bpm.wav",
    "julian_144bpm.wav",
    "relax_120bpm.wav",
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(0);

  const audioRef = useRef(null);

  // Calcular BPM del nombre del archivo
  useEffect(() => {
    const fileName = tracks[currentTrackIndex];
    const match = fileName.match(/(\d+)bpm/i);
    setBpm(match ? parseInt(match[1]) : 0);
  }, [currentTrackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {}); // evitar error autoplay
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current?.play().catch(() => {});
      setIsPlaying(true);
    }, 200);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current?.play().catch(() => {});
      setIsPlaying(true);
    }, 200);
  };

  return (
    <main className="main">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">RUNFORFUN</h1>
        <div className="menuLinks">
          <Link href="/evento">Evento</Link>
          <Link href="/proyecto">Proyecto</Link>
          <Link href="/radio">Radio</Link>
          <Link href="/tienda">Tienda</Link>
        </div>
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
        <div className="radioCard">
          <p className="trackName">{tracks[currentTrackIndex].replace(".wav", "")}</p>
          <p className="trackBpm">Cadencia: {bpm} BPM</p>
          <audio ref={audioRef} src={`/radio-tracks/${tracks[currentTrackIndex]}`} onEnded={nextTrack} />
          <div className="controls">
            <button onClick={prevTrack} className="controlBtn">⏮️</button>
            <button onClick={togglePlay} className="playBtn">{isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}</button>
            <button onClick={nextTrack} className="controlBtn">⏭️</button>
          </div>
        </div>
      </section>

      {/* SOBRE RUNFORFUN */}
      <section className="section">
        <h3 className="sectionTitle">Sobre RunForFun</h3>
        <p className="paragraph">
          RunForFun es la app que combina música y running, ayudándote a encontrar tu ritmo ideal,
          mejorar tu cadencia y conectarte con otros corredores.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        .main { font-family: sans-serif; background-color: #000; color: #fff; min-height: 100vh; }
        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background-color: rgba(0,0,0,0.6); position: fixed; top:0; width:100%; z-index:20; }
        .logo { font-size: 1.25rem; font-weight: bold; }
        .menuLinks a { margin-left: 1rem; color: #fff; text-decoration: none; font-weight: 500; }
        .menuLinks a:hover { color: #22c55e; }
        .hero { position: relative; height: 60vh; margin-top: 4rem; overflow: hidden; }
        .heroImg { width: 100%; height: 100%; object-fit: cover; }
        .heroOverlay { position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(to top, black, transparent, black); }
        .heroText { position: absolute; bottom: 1.5rem; left: 1.5rem; }
        .heroTitle { font-size: 2rem; font-weight: 600; }
        .heroSubtitle { opacity: 0.7; }
        .section { padding: 2rem 1.5rem; max-width: 800px; margin: 0 auto; text-align: center; }
        .sectionTitle { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
        .paragraph { opacity: 0.8; line-height: 1.6rem; }
        .radioCard { border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1rem; background-color: rgba(255,255,255,0.05); margin: auto; max-width: 400px; }
        .trackName { font-size: 1.125rem; font-weight: 600; }
        .trackBpm { font-size: 0.875rem; opacity: 0.6; }
        .controls { display: flex; gap: 1rem; margin-top: 1rem; justify-content: center; flex-wrap: wrap; }
        .controlBtn { padding: 0.5rem 1rem; border-radius: 0.5rem; background-color: rgba(255,255,255,0.2); border: none; color: #fff; cursor: pointer; }
        .playBtn { padding: 0.5rem 1.5rem; border-radius: 0.5rem; background-color: #22c55e; border: none; color: #000; font-weight: bold; cursor: pointer; }
        .footer { padding: 1.5rem; background-color: rgba(0,0,0,0.8); text-align: center; margin-top: 2rem; }
      `}</style>
    </main>
  );
}
