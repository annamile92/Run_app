"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const playlist = [
    { id: 1, url: "/radio-tracks/runner_camila_152bpm.wav", title: "Runner - Camila (152 bpm)", bpm: 152, cadence: 152 },
    { id: 2, url: "/radio-tracks/julian_144bpm.wav", title: "Runner - Julián (144 bpm)", bpm: 144, cadence: 152 },
    { id: 3, url: "/radio-tracks/relax_120bpm.wav", title: "Runner - Maria (120 bpm)", bpm: 120, cadence: 152 },
    { id: 4, url: "/radio-tracks/coldplay_style_pad.wav", title: "Runner - Jose (120 bpm)", bpm: 120, cadence: 152 },
    { id: 5, url: "/radio-tracks/chaotic_sprint_172.wav", title: "Runner - Andrea (172 bpm)", bpm: 172, cadence: 152 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }

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
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-gradient-to-r from-gray-800/80 to-gray-500/60 backdrop-blur-lg z-50">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />

        <div className="hidden md:flex items-center gap-6">
          <Link href="#evento">Intro</Link>
          <Link href="#app">App</Link>
          <Link href="/tienda">Shop</Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-20 left-4 bg-black p-4 rounded-xl md:hidden">
          <Link href="#evento" onClick={() => setMenuOpen(false)}>Intro</Link>
          <Link href="#app" onClick={() => setMenuOpen(false)}>App</Link>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[80vh] mt-20">
        <Image src="/banner-run.gif" alt="Hero" fill className="object-cover" />
      </section>

      {/* EVENTO */}
      <section id="evento" className="py-16 px-6 bg-[#2e2e2ecc]">
        <h2 className="text-3xl font-bold">Corre, vibra y conecta</h2>
      </section>

      {/* APP */}
      <section id="app" className="py-16 px-6 bg-[#3a3a3acc]">
        <h2 className="text-3xl font-bold mb-4">App</h2>
        <Image src="/qr-code.png" alt="QR" width={180} height={180} />
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center bg-[#3a3a3acc]">
        <p>© 2025 Run4Fun</p>
      </footer>

      {/* MINI PLAYER */}
      <div className="fixed top-[95px] right-6 w-72 p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
        <p className="font-semibold">{playlist[currentIndex].title}</p>
        <p className="text-sm opacity-70">
          {playlist[currentIndex].bpm} BPM · {playlist[currentIndex].cadence} Cad
        </p>

        <div className="flex gap-4 mt-2">
          <button onClick={togglePlay}>▶︎ / ❚❚</button>
          <button onClick={skipNext}>⏭</button>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={playlist[currentIndex].url}
        onEnded={skipNext}
      />
    </main>
  );
}
