"use client";
import { useEffect, useRef, useState } from "react";

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

export default function RadioPage() {
  const audioRef = useRef(null);
  const [playlist, setPlaylist] = useState(initialPlaylist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simula llegada de nuevas pistas cada 25s (para demo)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = playlist.length + 1;
      const fake = {
        id: nextId,
        url: playlist[Math.floor(Math.random() * playlist.length)].url, // reuse sample
        title: `Nuevo runner #${nextId}`,
        bpm: 140 + Math.floor(Math.random() * 30),
        cadence: 140 + Math.floor(Math.random() * 30),
      };
      setPlaylist((p) => [...p, fake]);
    }, 25000);
    return () => clearInterval(interval);
  }, [playlist.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => {
      const next = (currentIndex + 1) % playlist.length;
      setCurrentIndex(next);
      if (isPlaying) {
        // small delay to ensure src update
        setTimeout(() => audio.play(), 200);
      }
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [currentIndex, isPlaying, playlist.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = playlist[currentIndex]?.url || "";
    if (isPlaying) {
      audio.play().catch((e) => {
        console.log("Autoplay blocked or error:", e);
        setIsPlaying(false);
      });
    }
  }, [currentIndex, playlist, isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const skipNext = () => {
    setCurrentIndex((i) => (i + 1) % playlist.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-900 text-white">
      <div className="max-w-2xl w-full bg-black/60 p-6 rounded-lg backdrop-blur">
        <h2 className="text-2xl font-bold mb-2">RunForFun Radio <span className="text-red-400">● LIVE</span></h2>
        <div className="mb-4">
          <div className="text-lg font-semibold">{playlist[currentIndex]?.title}</div>
          <div className="text-sm text-gray-300">
            BPM: {playlist[currentIndex]?.bpm} • Cadence: {playlist[currentIndex]?.cadence}
          </div>
        </div>

        <audio ref={audioRef} />

        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="px-4 py-2 bg-white text-black rounded-md font-semibold"
          >
            {isPlaying ? "Pausar" : "Reproducir"}
          </button>

          <button
            onClick={skipNext}
            className="px-4 py-2 bg-gray-700 rounded-md text-white"
          >
            Siguiente
          </button>

          <div className="ml-auto text-sm text-gray-400">
            Cola: {playlist.length - currentIndex - 1}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Próximas pistas</h3>
          <ol className="list-decimal list-inside text-sm text-gray-300">
            {playlist.slice(currentIndex + 1, currentIndex + 6).map((p) => (
              <li key={p.id}>{p.title} — {p.bpm} bpm</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
