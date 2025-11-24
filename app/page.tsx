"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface Track {
  id: number;
  url: string;
  title: string;
}

export default function Home() {
  const initialPlaylist: Track[] = [
    { id: 1, url: "/radio-tracks/runner_camila_152bpm.wav", title: "Runner - Camila (152 bpm)" },
    { id: 2, url: "/radio-tracks/julian_144bpm.wav", title: "Runner - Julián (144 bpm)" },
    { id: 3, url: "/radio-tracks/relax_120bpm.wav", title: "Cool Down (120 bpm)" },
  ];

  const [playlist, setPlaylist] = useState<Track[]>(initialPlaylist);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  const skipNext = () => {
    setCurrentIndex((i) => (i + 1) % playlist.length);
    setTimeout(() => audioRef.current?.play(), 100);
    setIsPlaying(true);
  };

  return (
    <main className="min-h-screen font-sans text-white bg-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center py-4 px-6 bg-black/70 backdrop-blur-sm z-50">
        <div className="flex gap-6 font-bold uppercase text-sm">
          <Link href="/#evento" className="hover:text-blue-400 transition">Evento</Link>
          <Link href="/#app" className="hover:text-blue-400 transition">App</Link>
          <Link href="/#documentos" className="hover:text-blue-400 transition">Documentos</Link>
          <Link href="/tienda" className="hover:text-blue-400 transition">Tienda</Link>
        </div>

        {/* MINI PLAYER RADIO */}
        <div className="flex items-center gap-2 bg-black/40 p-2 rounded backdrop-blur-sm">
          <span className="text-sm max-w-xs truncate">{playlist[currentIndex]?.title}</span>
          <button onClick={togglePlay} className="px-2 py-1 bg-green-500 text-black rounded text-sm">
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button onClick={skipNext} className="px-2 py-1 bg-gray-700 text-white rounded text-sm">⏭️</button>
        </div>
      </nav>

      <audio ref={audioRef} src={playlist[currentIndex]?.url} onEnded={skipNext} />

      {/* HERO */}
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

      <section id="evento" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Evento</h2>
        <p className="opacity-80">Justificacion</p>
      </section>

      <section id="app" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">App</h2>
        <p className="opacity-80">Explora la experiencia RunForFun App.</p>
      </section>

      <section id="documentos" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Documentos</h2>
        <p className="opacity-80">Documentos oficiales del proyecto.</p>
      </section>

      <footer className="py-16 px-5 text-center bg-black">
        <p className="text-white font-bold">© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
