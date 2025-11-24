"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  // Tracks de ejemplo
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
    <main className="font-sans text-white bg-black">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80 backdrop-blur">
        <a href="/">
          <img src="/logo.png" alt="RunForFun Logo" className="h-12" />
        </a>

        <nav className="flex gap-6 font-bold uppercase text-sm">
          {["Evento", "Radio", "App", "Documentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}

          <Link href
