// src/app/page.js

import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa oscura encima del GIF */}
      <div className="min-h-screen w-full bg-black/70">

        {/* 🔥 MENÚ SUPERIOR */}
        <header className="w-full flex justify-center gap-10 py-6 text-lg font-semibold">
          <Link href="/evento" className="hover:text-yellow-300 transition">
            📅 Evento
          </Link>

          <Link href="/proyecto" className="hover:text-yellow-300 transition">
            📐 Proyecto
          </Link>

          <Link href="/radio" className="hover:text-yellow-300 transition">
            📻 Radio
          </Link>

          <Link href="/tienda" className="hover:text-yellow-300 transition">
            🛍️ Tienda
          </Link>
        </header>

        {/* 🔥 HERO PRINCIPAL */}
        <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl">
            RunForFun
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed drop-shadow-xl">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-gray-300 mt-20">
          © 2025 <strong>RunForFun</strong>. Todos los derechos reservados.
        </footer>
      </div>
    </main>
  );
}
