import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const initialPlaylist = [
    { id: 1, url: "/radio-tracks/runner_camila_152bpm.wav", title: "Runner - Camila (152 bpm)", bpm: 152, cadence: 152 },
    { id: 2, url: "/radio-tracks/julian_144bpm.wav", title: "Runner - Julián (144 bpm)", bpm: 144, cadence: 152 },
    { id: 3, url: "/radio-tracks/relax_120bpm.wav", title: "Runner - Maria (120 bpm)", bpm: 120, cadence: 152 },
    { id: 4, url: "/radio-tracks/coldplay_style_pad.wav", title: "Runner - Jose (120 bpm)", bpm: 120, cadence: 152 },
    { id: 5, url: "/radio-tracks/chaotic_sprint_172.wav", title: "Runner - Andrea (172 bpm)", bpm: 172, cadence: 152 },
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
   <nav className="fixed top-0 w-full flex justify-between items-center p-4 
bg-gradient-to-r from-gray-800/80 to-gray-500/60 backdrop-blur-lg z-50">
  <div className="flex items-center gap-6">
    <Image src="/logo.png" alt="Logo" width={60} height={60} />
  </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#evento" className="hover:text-yellow-400 transition">Intro</Link>
          <Link href="#app" className="hover:text-yellow-400 transition">App</Link>
