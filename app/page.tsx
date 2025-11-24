"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // RADIO HARD-CODED
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

  const [playlist, setPlaylist] = useState(initialPlaylist);
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

  const skipPrev = () => {
    setCurrentIndex((i) => (i === 0 ? playlist.length - 1 : i - 1));
    setTimeout(() => audioRef.current?.play(), 200);
    setIsPlaying(true);
  };

  return (
    <main className="font-sans text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-black/70 backdrop-blur z-50">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <Link href="/#evento" className="hover:text-yellow-400 transition">Evento</Link>
          <Link href="/#app" className="hover:text-yellow-400 transition">App</Link>
          <Link href="/#documentos" className="hover:text-yellow-400 transition">Documentos</Link>
          <Link href="/tienda" className="hover:text-yellow-400 transition">Tienda</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex justify-center items-center text-center h-screen mt-20 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
        <img src="/banner-run.gif" alt="Corredores" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold mb-4">RunForFun</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </div>
      </section>

      {/* RADIO */}
      <section id="radio" className="py-16 px-6 flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h2 className="text-3xl font-bold mb-6">🎧 Radio Live</h2>
        <div className="reproductor-con-blur flex flex-col items-center bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg max-w-md w-full">
          <p className="text-lg font-semibold mb-2">{playlist[currentIndex]?.title}</p>
          <p className="text-sm opacity-70 mb-4">
            BPM: {playlist[currentIndex]?.bpm} • Cadence: {playlist[currentIndex]?.cadence}
          </p>
          <audio ref={audioRef} src={playlist[currentIndex]?.url} onEnded={skipNext} />

          <div className="flex gap-4 mt-4">
            <button onClick={skipPrev} className="p-2 bg-transparent">
              <Image src="/siguiente.png" alt="Anterior" width={40} height={40} className="rotate-180" />
            </button>
            <button onClick={togglePlay} className="p-2 bg-transparent">
              <Image src="/play-pausa.png" alt="Play/Pause" width={50} height={50} />
            </button>
            <button onClick={skipNext} className="p-2 bg-transparent">
              <Image src="/siguiente.png" alt="Siguiente" width={40} height={40} />
            </button>
          </div>

          <div className="mt-6 w-full">
            <h3 className="font-semibold mb-2">Próximas pistas</h3>
            <ol className="list-decimal list-inside text-sm text-gray-300">
              {playlist.slice(currentIndex + 1, currentIndex + 6).map((p) => (
                <li key={p.id}>{p.title} — {p.bpm} bpm</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTEXTO */}
      <section id="evento" className="py-16 px-6 flex flex-col md:flex-row items-center bg-gradient-to-b from-gray-800 to-gray-900 gap-6">
        <div className="md:w-1/2">
          <img src="/evento.jpg" alt="Evento" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">Contexto</h2>
          <p className="opacity-80 leading-relaxed">
            En Medellín, el running ha crecido notablemente en los últimos años, pasando de ser una práctica individual de salud a convertirse en un fenómeno social. Cada vez más personas participan en grupos de corredores, carreras locales y entrenamientos colectivos. Más allá de los beneficios físicos, los corredores buscan compartir experiencias, motivarse mutuamente y generar vínculos sociales. El running ofrece una forma de encuentro natural, distinta a las dinámicas directas de las apps de citas o redes sociales, donde el ejercicio se convierte en un puente hacia la amistad y la comunidad.
          </p>
        </div>
      </section>

      {/* SECCIÓN APP */}
      <section id="app" className="py-16 px-6 flex flex-col md:flex-row items-center bg-gradient-to-b from-gray-800 to-gray-900 gap-6">
        <div className="md:w-1/2">
          <img src="/1.png" alt="App" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">App</h2>
          <p className="opacity-80 leading-relaxed">
            Explora la experiencia RunForFun App. Descarga y conecta tu música y datos biométricos.
          </p>
          <a href="https://runforfun.app/download" className="mt-4 inline-block text-green-400 font-semibold underline">
            Descargar App
          </a>
        </div>
      </section>

      {/* SECCIÓN DOCUMENTOS */}
      <section id="documentos" className="py-16 px-6 flex flex-col md:flex-row items-center bg-gradient-to-b from-gray-800 to-gray-900 gap-6">
        <div className="md:w-1/2">
          <img src="/documentos.png" alt="Documentos" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">Documentos</h2>
          <p className="opacity-80 leading-relaxed">Documentos oficiales del proyecto RunForFun.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-5 text-center bg-gradient-to-r from-purple-600 to-blue-500">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="mx-auto mb-3" />
        <p className="text-white font-bold">© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

      {/* ESTILO REPRODUCTOR */}
      <style jsx>{`
        .reproductor-con-blur {
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

    </main>
  );
}
