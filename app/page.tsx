"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const initialPlaylist = [
    { id: 1, url: "/radio-tracks/runner_camila_152bpm.wav", title: "Runner - Camila (152 bpm)", bpm: 152, cadence: 164 },
    { id: 2, url: "/radio-tracks/julian_144bpm.wav", title: "Runner - Julián (144 bpm)", bpm: 144, cadence: 158 },
    { id: 3, url: "/radio-tracks/relax_120bpm.wav", title: "Cool Down (120 bpm)", bpm: 120, cadence: 120 },
  ];

  const [playlist] = useState(initialPlaylist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  return (
    <main className="font-sans text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-blue-500/90 backdrop-blur z-50">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#evento" className="hover:text-yellow-400 transition">Intro</Link>
          <Link href="#app" className="hover:text-yellow-400 transition">App</Link>
          <Link href="#documentos" className="hover:text-yellow-400 transition">Documentos</Link>
          <Link href="/tienda" className="hover:text-yellow-400 transition">Shop</Link>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="absolute top-20 right-4 w-48 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl flex flex-col items-start p-4 gap-3 md:hidden z-50">
          <Link href="#evento" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Intro</Link>
          <Link href="#app" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">App</Link>
          <Link href="#documentos" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Documentos</Link>
          <Link href="/tienda" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Shop</Link>
        </div>
      )}

      {/* HERO */}
