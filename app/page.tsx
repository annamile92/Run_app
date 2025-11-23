// src/app/page.js
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans text-white bg-black">

      {/* ---------------- HEADER ---------------- */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80">
        <a href="/">
          <img src="/logo.png" alt="RunForFun Logo" className="h-12" />
        </a>

        {/* Menú principal */}
        <nav className="flex gap-6 font-bold uppercase">
          {[
            { label: "Evento", anchor: "#evento" },
            { label: "Radio", anchor: "#radio" },
            { label: "App", anchor: "#app" },
            { label: "Documentos", anchor: "#documentos" },
            { label: "Tienda", anchor: "/tienda" },
          ].map((item) =>
            item.anchor.startsWith("#") ? (
              <a
                key={item.label}
                href={item.anchor}
                className="text-white no-underline hover:text-yellow-400 transition"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.anchor}
                className="text-white no-underline hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </header>

      {/* ---------------- HERO / BANNER ---------------- */}
      <section
        id="hero"
        className="relative flex justify-center items-center text-center h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/banner.jpg")' }}
      >
        {/* Capa oscura */}
        <div className="bg-black/40 p-5 rounded-lg max-w-xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl">
            RunForFun
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white drop-shadow-md">
            Corre, conecta tu música con tu ritmo y vive la experiencia
          </p>
        </div>

        {/* ⚡ ANIMACIÓN BIOMÉTRICA */}
        <div className="absolute bottom-20 left-0 w-full flex justify-center">
          <div className="biometric-wave h-6 w-3/4"></div>
        </div>

        <img
          src="/logo.png"
          alt="Logo secundario"
          className="absolute top-5 right-5 h-10"
        />
      </section>

      {/* ---------------- SECCIÓN EVENTO ---------------- */}
      <section id="evento" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Evento</h2>
        <p className="text-lg opacity-80">
          Información del evento RunForFun...
        </p>
      </section>

      {/* ---------------- SECCIÓN RADIO ---------------- */}
      <section id="radio" className="py-32 px-6 text-center bg-black/90">
        <h2 className="text-4xl font-bold mb-6">Radio</h2>
        <p className="text-lg opacity-80">
          Sintoniza la radio oficial para correr con ritmo.
        </p>
      </section>

      {/* ---------------- SECCIÓN APP ---------------- */}
      <section id="app" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">App</h2>
        <p className="text-lg opacity-80">
          Descubre la app que sincroniza tu música con tu ritmo cardíaco.
        </p>
      </section>

      {/* ---------------- SECCIÓN DOCUMENTOS ---------------- */}
      <section id="documentos" className="py-32 px-6 text-center bg-black/90">
        <h2 className="text-4xl font-bold mb-6">Documentos</h2>
        <p className="text-lg opacity-80">
          Consulta reglamentos, datos y documentación oficial.
        </p>
      </section>

      {/* ---------------- FOOTER CORREGIDO ---------------- */}
      <footer className="py-16 px-5 text-center bg-black">
        <img src="/logo.png" alt="RunForFun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">
          © 2025 RunForFun. Todos los derechos reservados.
        </p>
      </footer>

      {/* ---------------- CSS DE LA ANIMACIÓN ---------------- */}
      <style jsx global>{`
        @keyframes biometricMove {
          0% {
            transform: scaleY(0.4);
          }
          25% {
            transform: scaleY(1.6);
          }
          50% {
            transform: scaleY(0.8);
          }
          75% {
            transform: scaleY(1.3);
          }
          100% {
            transform: scaleY(0.4);
          }
        }

        .biometric-wave {
          background: repeating-linear-gradient(
            90deg,
            #00eaff 0px,
            #00eaff 3px,
            transparent 3px,
            transparent 8px
          );
          animation: biometricMove 1.2s infinite ease-in-out;
          transform-origin: center;
          opacity: 0.8;
        }
      `}</style>
    </main>
  );
}
