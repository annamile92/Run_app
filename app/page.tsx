"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  // RADIO HARD-CODED
  const initialPlaylist = [
    { id: 1, url: "/radio-tracks/runner_camila_152bpm.wav", title: "Runner - Camila (152 bpm)", bpm: 152, cadence: 164 },
    { id: 2, url: "/radio-tracks/julian_144bpm.wav", title: "Runner - Julián (144 bpm)", bpm: 144, cadence: 158 },
    { id: 3, url: "/radio-tracks/relax_120bpm.wav", title: "Cool Down (120 bpm)", bpm: 120, cadence: 120 },
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
    <main className="min-h-screen font-sans text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex items-center justify-between py-4 px-6 bg-black/70 backdrop-blur-md z-50">
        <div className="flex gap-6 font-bold text-sm">
          <Link href="/#evento" className="hover:text-blue-400 transition">Evento</Link>
          <Link href="/#app" className="hover:text-blue-400 transition">App</Link>
        </div>

        {/* LOGO CENTRADO */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logo.png" alt="RunForFun Logo" className="h-20 md:h-24" />
        </div>

        <div className="flex gap-6 font-bold text-sm">
          <Link href="/#documentos" className="hover:text-blue-400 transition">Documentos</Link>
          <Link href="/tienda" className="hover:text-blue-400 transition">Tienda</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex justify-center items-center text-center h-screen mt-16 overflow-hidden">
        <img src="/banner-run.gif" alt="Corredores" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">RunForFun</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </div>
      </section>

      {/* RADIO */}
      <section id="radio" className="py-16 px-6 flex flex-col items-center bg-[url('/fondo.png')] bg-cover bg-center">
        <h2 className="text-3xl font-bold mb-6">🎧 Radio Live</h2>
        <div className="flex flex-col items-center bg-black/40 p-6 rounded-xl shadow-lg max-w-md w-full backdrop-blur-md reproductor-con-blur">
          <p className="text-lg font-semibold mb-2">{playlist[currentIndex]?.title}</p>
          <p className="text-sm opacity-70 mb-4">
            BPM: {playlist[currentIndex]?.bpm} • Cadence: {playlist[currentIndex]?.cadence}
          </p>

          <audio ref={audioRef} src={playlist[currentIndex]?.url} onEnded={skipNext} />

          <div className="flex gap-4 mt-4">
            <button onClick={skipPrev}>
              <img src="/siguiente.png" alt="Prev" className="w-8 h-8" />
            </button>
            <button onClick={togglePlay}>
              <img src="/play-pausa.png" alt="Play/Pause" className="w-12 h-12" />
            </button>
            <button onClick={skipNext}>
              <img src="/siguiente.png" alt="Next" className="w-8 h-8 rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN EVENTO */}
      <section id="evento" className="py-32 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[url('/fondo.png')] bg-cover bg-center items-center">
        <img src="/evento.jpg" alt="Evento" className="w-full max-w-md rounded-lg shadow-lg" />
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">Contexto</h2>
          <p className="opacity-80 leading-relaxed">
            En Medellín, el running ha crecido notablemente en los últimos años, pasando de ser una práctica individual de salud a convertirse en un fenómeno social. Cada vez más personas participan en grupos de corredores, carreras locales y entrenamientos colectivos. Más allá de los beneficios físicos, los corredores buscan compartir experiencias, motivarse mutuamente y generar vínculos sociales. El running ofrece una forma de encuentro natural, distinta a las dinámicas directas de las apps de citas o redes sociales, donde el ejercicio se convierte en un puente hacia la amistad y la comunidad.
          </p>
        </div>
      </section>

      {/* SECCIÓN APP */}
      <section id="app" className="py-32 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[url('/fondo.png')] bg-cover bg-center items-center">
        <div className="flex justify-center md:justify-start">
          <img src="/1.png" alt="App RunForFun" className="w-full max-w-sm rounded-lg shadow-lg" />
        </div>
        <div className="text-white text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">RunForFun App</h2>
          <p className="opacity-80 mb-6 leading-relaxed">
            Explora la experiencia RunForFun: corre, conecta tu música con tu ritmo y vive la experiencia completa.
          </p>
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/qr-code.png" alt="QR App" className="w-48 h-48" />
            <a href="https://runforfun.app/download" target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold underline">
              Descargar App
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DOCUMENTOS */}
      <section id="documentos" className="py-32 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[url('/fondo.png')] bg-cover bg-center items-center">
        <img src="/documentos.jpg" alt="Documentos" className="w-full max-w-md rounded-lg shadow-lg" />
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">Documentos</h2>
          <p className="opacity-80 leading-relaxed">
            Documentos oficiales del proyecto RunForFun.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-5 text-center bg-gradient-to-r from-purple-600 to-blue-600">
        <img src="/logo.png" alt="RunForFun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

      {/* ESTILOS INLINE */}
      <style jsx>{`
        .reproductor-con-blur {
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 20px;
        }
      `}</style>
    </main>
  );
}
