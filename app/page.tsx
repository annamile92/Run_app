"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const playlist = [
    { id: 1, url: "/radio-tracks/runner_camila_152bpm.wav", title: "Runner - Camila", bpm: 152, cadence: 164 },
    { id: 2, url: "/radio-tracks/relax_120bpm.wav", title: "Runner - Camila", bpm: 160, cadence: 170 },
    { id: 3, url: "/radio-tracks/runner_camila_170bpm.wav", title: "Runner - Camila", bpm: 170, cadence: 180 },
  ];

  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) audio.pause();
    else audio.play();

    setIsPlaying(!isPlaying);
  };

  const changeTrack = (track: any) => {
    setCurrentTrack(track);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.load();
  }, [currentTrack]);


  return (
    <main className="relative w-full min-h-screen">

      {/* SECCIÓN 1 */}
      <section className="w-full min-h-screen bg-[#E0E0E0] flex items-center justify-center p-10">
        <Image
          src="/banner.jpg"
          alt="Banner"
          width={600}
          height={600}
          className="rounded-xl shadow-lg w-full max-w-[600px]"
        />
      </section>

      {/* SECCIÓN 2 */}
      <section className="w-full min-h-screen bg-[#C8C8C8] flex flex-col items-center justify-center p-12">
        <h2 className="text-4xl font-bold mb-6">Run4Fun</h2>
        <p className="max-w-2xl text-center text-lg">
          Música sincronizada con tu cadencia real para mejorar tu ritmo y mantener la motivación.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className="w-full min-h-screen bg-[#B0B0B0] flex flex-col items-center justify-center p-12">
        <h2 className="text-3xl font-bold mb-6">Tracks Disponibles</h2>

        <div className="space-y-4 w-full max-w-xl">
          {playlist.map((track) => (
            <div
              key={track.id}
              onClick={() => changeTrack(track)}
              className={`cursor-pointer p-4 rounded-xl border transition ${
                currentTrack.id === track.id
                  ? "bg-white/40 backdrop-blur-xl border-white shadow-xl"
                  : "bg-white/10 backdrop-blur-sm border-white/20"
              }`}
            >
              <p className="font-semibold">{track.title}</p>
              <p className="text-sm opacity-70">BPM: {track.bpm} | Cadencia: {track.cadence}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REPRODUCTOR FLOTANTE DERECHA */}
      <div className="
        fixed top-1/2 right-6 -translate-y-1/2
        backdrop-blur-xl bg-white/20
        shadow-xl rounded-2xl border border-white/30
        p-4 w-64 space-y-3
      ">
        <h3 className="font-bold text-lg">{currentTrack.title}</h3>
        <p className="text-sm opacity-70">
          BPM: {currentTrack.bpm} · Cadencia: {currentTrack.cadence}
        </p>

        <div className="flex justify-center space-x-4 mt-3">
          <button
            onClick={togglePlay}
            className="px-4 py-2 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-md"
          >
            {isPlaying ? "Pausa" : "Play"}
          </button>
        </div>

        <audio ref={audioRef}>
          <source src={currentTrack.url} type="audio/wav" />
        </audio>
      </div>

    </main>
  );
}
