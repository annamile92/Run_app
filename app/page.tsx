// src/app/page.js
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // Tracks estáticos (para que build no falle)
  const tracks = [
    { title: "Runner Camila 152bpm", src: "/radio-tracks/runner_camila_152bpm.wav" },
    { title: "Julián 144bpm", src: "/radio-tracks/julian_144bpm.wav" },
    { title: "Cool Down 120bpm", src: "/radio-tracks/relax_120bpm.wav" },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Play / Pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  // Siguiente track
  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setTimeout(() => audioRef.current?.play(), 100);
    setIsPlaying(true);
  };

  // Track anterior
  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(false);
    setTimeout(() => audioRef.current?.play(), 100);
    setIsPlaying(true);
  };

  // Extraer BPM del nombre del track
  const bpm = tracks[currentTrack]?.title.match(/(\d+)bpm/i)?.[1] || 0;

  return (
    <main className="min-h-screen text-white font-sans bg-black">

      {/* Navbar */}
      <nav className="flex justify-center gap-8 py-6 text-lg font-semibold bg-black/70 fixed top-0 w-full z-50 backdrop-blur-sm">
        <Link href="/evento" className="hover:text-blue-400 transition">Evento</Link>
        <Link href="/proyecto" className="hover:text-blue-400 transition">Proyecto</Link>
        <Link href="/radio" className="hover:text-blue-400 transition">Radio</Link>
        <Link href="/tienda" className="hover:text-blue-400 transition">Tienda</Link>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen mt-24 overflow-hidden">
        <img
          src="/banner-run.gif"
          alt="Corredores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold mb-4">RunForFun</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </div>
      </section>

      {/* Radio Live */}
      <section className="py-16 px-6 flex flex-col items-center bg-black/80">
        <h2 className="text-3xl font-bold mb-6">🎧 Radio Live</h2>
        {tracks.length === 0 ? (
          <p>Cargando audios…</p>
        ) : (
          <div className="flex flex-col items-center bg-black/40 p-6 rounded-xl shadow-lg max-w-md w-full">
            <p className="text-lg font-semibold mb-2">{tracks[currentTrack]?.title}</p>
            <p className="text-sm opacity-70 mb-4">BPM: {bpm}</p>
            <audio ref={audioRef} src={tracks[currentTrack]?.src} onEnded={nextTrack} />
            <div className="flex gap-4 mt-4">
              <button onClick={prevTrack} className="px-4 py-2 bg-gray-700 rounded text-white">⏮️</button>
              <button onClick={togglePlay} className="px-6 py-2 bg-green-500 rounded font-bold text-black">
                {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
              </button>
              <button onClick={nextTrack} className="px-4 py-2 bg-gray-700 rounded text-white">⏭️</button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black/90 mt-12">
        <p>© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
