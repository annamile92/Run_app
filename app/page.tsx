"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  // Tracks hardcodeados
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
    <main className="font-sans text-white bg-black min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md flex justify-between items-center px-6 py-4 z-50">
        <Link href="/">
          <img src="/logo.png" alt="RunForFun Logo" className="h-12 cursor-pointer" />
        </Link>
        <div className="flex gap-6 font-bold uppercase text-sm items-center">
          <a href="#evento" className="hover:text-yellow-400 transition">Evento</a>
          <a href="#radio" className="hover:text-yellow-400 transition">Radio</a>
          <a href="#app" className="hover:text-yellow-400 transition">App</a>
          <a href="#documentos" className="hover:text-yellow-400 transition">Documentos</a>
          <Link href="/tienda" className="hover:text-yellow-400 transition">Tienda</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex justify-center items-center text-center h-screen overflow-hidden mt-16">
        <img src="/banner-run.gif" alt="Corredores" className="absolute inset-0 w-full h-full object-cover" />
        {/* Overlay con blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">RunForFun</h1>
          <p className="mt-4 text-xl opacity-90">Corre, conecta tu música y vibra con tus datos biométricos.</p>
          <Link href="/tienda">
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Ir a la tienda 🛒
            </button>
          </Link>
        </div>
      </section>

      {/* Radio Live */}
      <section id="radio" className="py-16 px-6 flex flex-col items-center bg-black/70 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6">🎧 Radio Live</h2>
        <div className="flex flex-col items-center bg-black/50 p-6 rounded-2xl shadow-xl border border-white/10 max-w-md w-full">
          <p className="text-lg font-semibold mb-2">{tracks[currentTrack]?.title}</p>
          <p className="text-sm opacity-70 mb-4">BPM: {bpm}</p>
          <audio ref={audioRef} src={tracks[currentTrack]?.src} onEnded={nextTrack} />
          <div className="flex gap-4 mt-4">
            <button onClick={prevTrack} className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition">⏮️</button>
            <button onClick={togglePlay} className="px-6 py-2 bg-green-500 rounded font-bold text-black hover:bg-green-400 transition">
              {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
            </button>
            <button onClick={nextTrack} className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition">⏭️</button>
          </div>
        </div>
      </section>

      {/* Evento */}
      <section id="evento" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Evento</h2>
        <p className="opacity-80">Detalles del evento próximamente…</p>
      </section>

      {/* App */}
      <section id="app" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">App</h2>
        <p className="opacity-80">Explora la experiencia RunForFun App.</p>
      </section>

      {/* Documentos */}
      <section id="documentos" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Documentos</h2>
        <p className="opacity-80">Documentos oficiales del proyecto.</p>
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 text-center bg-black/90">
        <img src="/logo.png" alt="RunForFun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
