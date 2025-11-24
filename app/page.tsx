// src/app/page.js

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Calendar, Layers, ShoppingBag } from "lucide-react";

export default function Home() {
  const tracks = [
    { title: "Biometric Track 01", src: "/radio-tracks/track1.wav" },
    { title: "Biometric Track 02", src: "/radio-tracks/track2.wav" },
    { title: "Biometric Track 03", src: "/radio-tracks/track3.wav" },
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

  // Cambia al siguiente track cuando termina
  const handleEnded = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
  };

  // Cada vez que currentTrack cambie, recarga y reproduce
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();
    audioRef.current.currentTime = 0;

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

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

            
