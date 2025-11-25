"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

  const [playlist] = useState(initialPlaylist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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
    <Link href="#evento" className="hover:text-yellow-400 transition">Intro</Link>
    <Link href="#app" className="hover:text-yellow-400 transition">App</Link>
    <Link href="#documentos" className="hover:text-yellow-400 transition">Documentos</Link>
    <Link href="/tienda" className="hover:text-yellow-400 transition">Shop</Link>
  </div>
</nav>


      {/* HERO */}
      <section className="relative flex justify-center items-center text-center h-[60vh] md:h-[65vh] mt-20 overflow-hidden bg-[#222]">
        <Image
          src="/banner-run.gif"
          alt="Corredores"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Run4Fun</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </div>
      </section>

  {/* EVENTO */}
<section id="evento" className="py-16 px-6 flex flex-col md:flex-row items-center gap-6 bg-[#2e2e2ecc]">
  <div className="md:w-1/2 flex justify-center">
    <Image src="/1.png" alt="Evento" width={280} height={280} className="rounded-lg shadow-md" />
  </div>
  <div className="md:w-1/2 text-white flex flex-col gap-4">
    <h2 className="text-3xl font-bold mb-4">   ¿Estás listo para experimentar cómo se transforma el acto de correr en una experiencia de conexión con otros?</h2>
    <p className="opacity-80 leading-relaxed">
      En Medellín, correr ya no es solo un deporte: es <strong>una experiencia que conecta, motiva y une</strong>. Cada zancada se transforma en un momento único, donde la música y el movimiento crean <strong>una sensación de comunidad y diversión compartida</strong>.
    </p>
    <p className="opacity-80 leading-relaxed">
      Olvida las apps que solo muestran números: aquí lo importante es <strong>vivir el momento, disfrutar la compañía y formar parte de algo especial junto a otros corredores</strong>.
    </p>
    <p className="opacity-80 leading-relaxed">
      Con RunForFun, cada carrera se convierte en <strong>una experiencia viva y colectiva</strong>, donde tus pasos y los de los demás se mezclan en un ritmo que solo se puede sentir, compartir y disfrutar.
    </p>
   
  </div>
</section>

      
     {/* APP */}
<section id="app" className="py-16 px-6 flex flex-col md:flex-row items-center gap-6 bg-[#3a3a3acc]">
  <div className="md:w-1/2 flex justify-center">
    <Image src="/2.png" alt="App" width={280} height={280} className="rounded-lg shadow-md" />
  </div>

  <div className="md:w-1/2 text-white flex flex-col gap-4">
    <h2 className="text-3xl font-bold mb-4">App</h2>
    <p className="opacity-80 leading-relaxed">
      Explora la experiencia RunForFun App. Puedes descargar la app o escanear el QR.
    </p>

    <a
      href="https://object-volt-59393284.figma.site/"
      className="
        mt-6 inline-block
        bg-gradient-to-r from-purple-600 to-blue-500
        text-black font-semibold
        px-4 py-2
        rounded-xl
        shadow-lg
        hover:scale-105 hover:shadow-2xl
        transition-all duration-300
        text-center
      "
    >
      Abrir la App
    </a>
  </div>
</section>

      {/* DOCUMENTOS */}
      <section id="documentos" className="py-16 px-6 flex flex-col md:flex-row items-center gap-6 bg-[#2e2e2ecc]">
        <div className="md:w-1/2 flex justify-center">
          <Image src="/3.png" alt="Documentos" width={280} height={280} className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 text-white flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-4">Documentos</h2>
          <p className="opacity-80">Documentos investigación del proyecto Run4Fun.</p>

          <div className="flex gap-4 mt-4">
            <Link href="/archivo.png" target="_blank">
              <Image src="/archivo.png" alt="Archivo 1" width={60} height={60} />
            </Link>
            <Link href="/archivo.png" target="_blank">
              <Image src="/archivo.png" alt="Archivo 2" width={60} height={60} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-5 text-center bg-gradient-to-r from-purple-600 to-blue-500">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="mx-auto" />
        <p className="text-sm opacity-80 mt-4">
          © 2025 Run4Fun — Todos los derechos reservados.
        </p>
      </footer>

      {/* MINI PLAYER FLOTANTE ARRIBA */}
      <div
        className="
          fixed top-[52px] right-6 z-[9999]
          w-54 px-4 py-2
          rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl
          flex items-center justify-between
        "
      >
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            {playlist[currentIndex].title}
          </span>
          <span className="text-xs text-white/70">
            {playlist[currentIndex].bpm} BPM · {playlist[currentIndex].cadence} Cad
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={togglePlay}>
            <Image src="/icons/play-pausa.png" width={28} height={28} alt="play" />
          </button>
          <button onClick={skipNext}>
            <Image src="/icons/siguiente.png" width={28} height={28} alt="next" />
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={playlist[currentIndex].url} onEnded={skipNext} />
    </main>
  );
}
