"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  // RADIO HARD-CODED
  const initialPlaylist = [
    {
      id: 1,
      url: "/radio-tracks/runner_camila_152bpm.wav",
      title: "Runner - Camila (152 bpm)",
      bpm: 152,
      cadence: 164,
    },
    {
      id: 2,
      url: "/radio-tracks/julian_144bpm.wav",
      title: "Runner - Julián (144 bpm)",
      bpm: 144,
      cadence: 158,
    },
    {
      id: 3,
      url: "/radio-tracks/relax_120bpm.wav",
      title: "Cool Down (120 bpm)",
      bpm: 120,
      cadence: 120,
    },
  ];

  const [playlist, setPlaylist] = useState(initialPlaylist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    setCurrentIndex((i) => (i + 1) % playlist.length);
    setTimeout(() => audioRef.current?.play(), 200);
    setIsPlaying(true);
  };

  const skipPrev = () => {
    setCurrentIndex((i) => (i === 0 ? playlist.length - 1 : i - 1));
    setTimeout(() => audioRef.current?.play(), 200);
    setIsPlaying(true);
  };

  return (
    <main className="min-h-screen font-sans text-white bg-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-center gap-8 py-4 bg-black/70 backdrop-blur-sm z-50">
        <Link href="/#evento" className="hover:text-blue-400 transition">Evento</Link>
        <Link href="/#radio" className="hover:text-blue-400 transition">Radio</Link>
        <Link href="/#app" className="hover:text-blue-400 transition">App</Link>
        <Link href="/#documentos" className="hover:text-blue-400 transition">Documentos</Link>
        <Link href="/tienda" className="hover:text-blue-400 transition">Tienda</Link>
      </nav>

      {/* HERO CON GIF */}
      <section className="relative flex justify-center items-center text-center h-screen mt-16 overflow-hidden">
        <img src="/banner-run.gif" alt="Corredores" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold mb-4">RunForFun</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </div>
      </section>

      {/* RADIO */}
      <section id="radio" className="py-16 px-6 flex flex-col items-center bg-black/80">
        <h2 className="text-3xl font-bold mb-6">🎧 Radio Live</h2>
        <div className="flex flex-col items-center bg-black/40 p-6 rounded-xl shadow-lg max-w-md w-full backdrop-blur-sm">
          <p className="text-lg font-semibold mb-2">{playlist[currentIndex]?.title}</p>
          <p className="text-sm opacity-70 mb-4">
            BPM: {playlist[currentIndex]?.bpm} • Cadence: {playlist[currentIndex]?.cadence}
          </p>
          <audio ref={audioRef} src={playlist[currentIndex]?.url} onEnded={skipNext} className="w-full mb-4 rounded" />

          <div className="flex gap-4 mt-4">
            <button onClick={skipPrev} className="px-4 py-2 bg-gray-700 rounded text-white">⏮️</button>
            <button onClick={togglePlay} className="px-6 py-2 bg-green-500 rounded font-bold text-black">
              {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
            </button>
            <button onClick={skipNext} className="px-4 py-2 bg-gray-700 rounded text-white">⏭️</button>
          </div>

          <div className="mt-6 w-full">
            <h3 className="font-semibold mb-2">Próximas pistas</h3>
            <ol className="list-decimal list-inside text-sm text-gray-300">
              {playlist.slice(currentIndex + 1, currentIndex + 6).map((p) => (
                <li key={p.id}>{p.title} — {p.bpm} bpm</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECCIONES */}
      <section id="evento" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Evento</h2>
        <p className="opacity-80">Detalles del evento próximamente…</p>
      </section>

      <section id="app" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">App</h2>
        <p className="opacity-80">Explora la experiencia RunForFun App.</p>
      </section>

      <section id="documentos" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Documentos</h2>
        <p className="opacity-80">Documentos oficiales del proyecto.</p>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-5 text-center bg-black">
        <p className="text-white font-bold">© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
