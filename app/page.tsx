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

  // Calcular BPM solo si fileName es string
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
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setTimeout(() => audioRef.current?.play(), 200);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(false);
    setTimeout(() => audioRef.current?.play(), 200);
    setIsPlaying(true);
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
              <button onClick={prevTrack} className="controlBtn">⏮️</button>
              <button onClick={playPause} className="playBtn">{isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}</button>
              <button onClick={nextTrack} className="controlBtn">⏭️</button>
            </div>
          </div>
        )}
      </section>

      {/* DESCRIPCIÓN */}
      <section className="section">
        <h3 className="sectionTitle">Sobre RunForFun</h3>
        <p className="paragraph">
          RunForFun es la app que combina música y running, ayudándote a encontrar tu ritmo ideal,
          mejorar tu cadencia y conectarte con otros corredores. Corre, escucha tu música favorita
          y vive la experiencia completa de RunForFun.
        </p>
      </section>

      {/* DESCARGA DE APP */}
      <section className="downloadSection">
        <div className="downloadContainer">
          <img src="/qr-code.png" alt="QR App" className="qr" />
          <div className="downloadText">
            <h3 className="sectionTitle">Descarga la App</h3>
            <p className="paragraph">Escanea el QR o haz clic en el link si el QR no funciona.</p>
            <a href="https://runforfun.app/download" target="_blank" rel="noopener noreferrer" className="downloadLink">
              Descargar App
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO TUTORIAL */}
      <section className="section">
        <h3 className="sectionTitle">Aprende a usar la App</h3>
        <video controls src="/tutorial.mp4" className="video">Tu navegador no soporta video.</video>
      </section>

      {/* CONCLUSIONES */}
      <section className="section">
        <h3 className="sectionTitle">Conclusiones</h3>
        <p className="paragraph">
          Gracias por explorar RunForFun. Descubre tu ritmo, corre con tu música favorita y únete
          a nuestra comunidad de corredores apasionados. ¡Tu próxima carrera está a un clic de distancia!
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

      {/* ESTILOS RESPONSIVE */}
      <style jsx>{`
        .main { font-family: sans-serif; background-color: #000; color: #fff; min-height: 100vh; }
        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background-color: rgba(0,0,0,0.6); position: fixed; top:0; width:100%; z-index:20; }
        .logo { font-size: 1.25rem; font-weight: bold; }
        .menuBtn { font-size: 0.875rem; border: 1px solid #fff; border-radius: 9999px; padding: 0.25rem 0.75rem; background: transparent; color: #fff; cursor: pointer; }
        .hero { position: relative; height: 60vh; margin-top: 4rem; overflow: hidden; }
        .heroImg { width: 100%; height: 100%; object-fit: cover; }
        .heroOverlay { position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(to top, black, transparent, black); }
        .heroText { position: absolute; bottom: 1.5rem; left: 1.5rem; }
        .heroTitle { font-size: 2rem; font-weight: 600; }
        .heroSubtitle { opacity: 0.7; }
        .section { padding: 2rem 1.5rem; max-width: 800px; margin: 0 auto; text-align: center; }
        .sectionTitle { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
        .paragraph { opacity: 0.8; line-height: 1.6rem; }
        .loading { opacity: 0.6; }
        .radioCard { border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1rem; background-color: rgba(255,255,255,0.05); }
        .trackName { font-size: 1.125rem; font-weight: 600; }
        .trackBpm { font-size: 0.875rem; opacity: 0.6; }
        .controls { display: flex; gap: 1rem; margin-top: 1rem; justify-content: center; flex-wrap: wrap; }
        .controlBtn { padding: 0.5rem 1rem; border-radius: 0.5rem; background-color: rgba(255,255,255,0.2); border: none; color: #fff; cursor: pointer; }
        .playBtn { padding: 0.5rem 1.5rem; border-radius: 0.5rem; background-color: #22c55e; border: none; color: #000; font-weight: bold; cursor: pointer; }
        .downloadSection { padding: 2rem 1.5rem; max-width: 800px; margin: 0 auto; }
        .downloadContainer { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
        .downloadText { text-align: center; }
        .qr { width: 12rem; height: 12rem; }
        .downloadLink { color: #22c55e; text-decoration: underline; font-weight: 600; cursor: pointer; }
        .video { width: 100%; border-radius: 0.5rem; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
        .footer { padding: 1.5rem; background-color: rgba(0,0,0,0.8); text-align: center; }

        @media (min-width: 768px) {
          .downloadContainer { flex-direction: row; align-items: flex-start; gap: 2rem; }
          .downloadText { text-align: left; }
        }
      `}</style>

    </main>
  );
}
