// src/app/page.js

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Calendar, Layers, ShoppingBag } from "lucide-react";

export default function Home() {
  const tracks = [
    { title: "Biometric Track 01", src: "/radio/track1.wav" },
    { title: "Biometric Track 02", src: "/radio/track2.wav" },
    { title: "Biometric Track 03", src: "/radio/track3.wav" },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);

    setTimeout(() => {
      audioRef.current.play();
    }, 200);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/60 min-h-screen w-full backdrop-blur-sm">

        {/* NAVBAR */}
        <nav className="w-full flex justify-center gap-10 py-6 text-lg font-semibold">
          <Link href="/evento" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Calendar size={20} /> Evento
          </Link>

          <Link href="/proyecto" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Layers size={20} /> Proyecto
          </Link>

          <Link href="/radio" className="flex items-center gap-2 hover:text-blue-400 transition">
            🎧 Radio
          </Link>

          <Link href="/tienda" className="flex items-center gap-2 hover:text-blue-400 transition">
            <ShoppingBag size={20} /> Tienda
          </Link>
        </nav>

        {/* HERO */}
        <div className="flex flex-col items-center justify-center text-center px-6 mt-24">
          <h1 className="text-5xl font-extrabold mb-6">RunForFun</h1>

          <p className="text-xl max-w-2xl leading-relaxed mb-10">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>

          {/* RADIO EN VIVO */}
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-black/40 backdrop-blur-md p-6 border border-white/10">

            <h2 className="text-2xl font-bold mb-4">Radio en Vivo</h2>
            <p className="text-sm mb-4 opacity-70">
              Reproduciendo sonidos generados a partir de datos biométricos reales.
            </p>

            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold mb-4">
                {tracks[currentTrack].title}
              </p>

              {/* BOTÓN PLAY / PAUSE */}
              <button
                onClick={togglePlay}
                className="px-6 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-gray-200 transition"
              >
                {isPlaying ? "Pausa" : "Play"}
              </button>

              {/* AUDIO */}
              <audio
                ref={audioRef}
                src={tracks[currentTrack].src}
                onEnded={handleEnded}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
