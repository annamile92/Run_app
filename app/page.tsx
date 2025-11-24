"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(0);

  const audioRef = useRef(null);

  // Load audio files from public/radio-tracks
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

  // Calculate BPM based on filename
  useEffect(() => {
    if (tracks.length > 0) {
      const fileName = tracks[currentTrackIndex];
      const match = fileName.match(/(\d+)bpm/i);
      setBpm(match ? parseInt(match[1]) : 0);
    }
  }, [currentTrackIndex, tracks]);

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setTimeout(() => audioRef.current.play(), 200);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(false);
    setTimeout(() => audioRef.current.play(), 200);
    setIsPlaying(true);
  };

  return (
    <main className="w-full min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md fixed top-0 left-0 w-full z-20">
        <h1 className="text-xl font-bold tracking-wide">RUNFORFUN</h1>
        <button className="text-sm border px-3 py-1 rounded-full">Menu</button>
      </nav>

      {/* HERO / BANNER */}
      <section className="w-full h-[60vh] relative mt-16">
        <img
          src="/banner-run.gif"
          alt="Corredores"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl font-semibold">Run together</h2>
          <p className="opacity-70">Encuentra tu ritmo — Encuentra tu tribu</p>
        </div>
      </section>

      {/* RADIO LIVE */}
      <section className="px-6 mt-10">
        <h3 className="text-2xl font-bold mb-3">🎧 Radio Live</h3>

        {tracks.length === 0 ? (
          <p className="opacity-60">Cargando audios…</p>
        ) : (
          <div className="border rounded-xl p-4 bg-white/10 backdrop-blur-sm">
            <p className="text-lg font-semibold">
              {tracks[currentTrackIndex].replace(".wav", "")}
            </p>
            <p className="text-sm opacity-60">Cadencia: {bpm} BPM</p>

            <audio
              ref={audioRef}
              src={`/radio-tracks/${tracks[currentTrackIndex]}`}
              onEnded={nextTrack}
            ></audio>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={prevTrack}
                className="px-4 py-2 rounded-lg bg-white/20"
              >
                ⏮️
              </button>

              <button
                onClick={playPause}
                className="px-6 py-2 rounded-lg bg-green-500 text-black font-bold"
              >
                {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
              </button>

              <button
                onClick={nextTrack}
                className="px-4 py-2 rounded-lg bg-white/20"
              >
                ⏭️
              </button>
            </div>
          </div>
        )}
      </section>

      {/* DESCRIPCIÓN DEL PROYECTO */}
      <section className="px-6 mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Sobre RunForFun</h3>
        <p className="opacity-80">
          RunForFun es la app que combina música y running, ayudándote a encontrar tu ritmo ideal, mejorar tu cadencia y conectarte con otros corredores de tu comunidad. Corre, escucha tu música favorita y vive la experiencia completa de RunForFun.
        </p>
      </section>

      {/* DESCARGA DE APP */}
      <section className="px-6 mt-16 flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        <div className="flex-shrink-0">
          <img src="/qr-code.png" alt="QR App" className="w-48 h-48" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Descarga la App</h3>
          <p className="opacity-80 mb-2">
            Escanea el QR para descargar la app o haz clic en el link si el QR no funciona.
          </p>
          <a
            href="https://runforfun.app/download"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline font-semibold"
          >
            Descargar App
          </a>
        </div>
      </section>

      {/* VIDEO EXPLICATIVO */}
      <section className="px-6 mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Aprende a usar la App</h3>
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          src="/tutorial.mp4"
        >
          Tu navegador no soporta video.
        </video>
      </section>

      {/* CONCLUSIONES */}
      <section className="px-6 mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Conclusiones</h3>
        <p className="opacity-80 mb-4">
          Gracias por explorar RunForFun. Descubre tu ritmo, corre con tu música favorita y únete a nuestra comunidad de corredores apasionados. ¡Tu próxima carrera está a un clic de distancia!
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 mt-16 bg-black/80 text-white text-center">
        <p>© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

      <div className="h-10"></div>
    </main>
  );
}

