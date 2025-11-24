// src/app/page.js
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const tracks = [
    { title: "Runner Camila 152bpm", src: "/radio-tracks/runner_camila_152bpm.wav" },
    { title: "Julián 144bpm", src: "/radio-tracks/julian_144bpm.wav" },
    { title: "Cool Down 120bpm", src: "/radio-tracks/relax_120bpm.wav" },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setTimeout(() => audioRef.current?.play(), 100);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setTimeout(() => audioRef.current?.play(), 100);
    setIsPlaying(true);
  };

  const bpm = tracks[currentTrack]?.title.match(/(\d+)bpm/i)?.[1] || 0;

  return (
    <main className="min-h-screen font-sans text-white bg-black">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm flex justify-center gap-8 py-4 z-50">
        <Link href="/evento" className="hover:text-blue-400 transition">Evento</Link>
        <Link href="/proyecto" className="hover:text-blue-400 transition">Proyecto</Link>
        <Link href="/radio" className="hover:text-blue-400 transition">Radio</Link>
        <Link href="/tienda" className="hover:text-blue-400 transition">Tienda</Link>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen mt-16 overflow-hidden">
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
      </section>

      {/* Sobre la App */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre RunForFun</h2>
        <p className="opacity-80 leading-relaxed">
          RunForFun combina música y running para ayudarte a encontrar tu ritmo ideal,
          mejorar tu cadencia y conectarte con otros corredores. Corre, escucha tu música
          favorita y vive la experiencia completa.
        </p>
      </section>

      {/* Descarga App */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <img src="/qr-code.png" alt="QR App" className="w-48 h-48" />
        <h2 className="text-3xl font-bold">Descarga la App</h2>
        <p className="opacity-80">Escanea el QR o haz clic en el enlace si el QR no funciona.</p>
        <a href="https://runforfun.app/download" target="_blank" rel="noopener noreferrer"
           className="text-green-500 font-semibold underline">
          Descargar App
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black/90">
        <p>© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}
