"use client";
import Link from "next/link";

export default function Home() {
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

          {/* BOTÓN TIENDA */}
          <Link href="/tienda">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">
              Tienda
            </span>
          </Link>
        </nav>
      </header>

      {/* HERO PRINCIPAL CON GIF */}
      <section
        id="hero"
        className="relative flex justify-center items-center text-center h-screen overflow-hidden"
      >
        {/* GIF de fondo */}
        <img
          src="/banner-run.gif"
          alt="Corredores"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative z-10 p-6 rounded-xl bg-black/40 backdrop-blur-md shadow-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold">RunForFun</h1>
          <p className="mt-4 text-xl opacity-90">
            Corre, conecta tu música y vibra con tus datos biométricos.
          </p>

          {/* Botón Tienda dentro del hero */}
          <Link href="/tienda">
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Ir a la tienda 🛒
            </button>
          </Link>
        </div>
      </section>

      {/* SECCIONES SIMPLIFICADAS */}
      <section id="evento" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Evento</h2>
        <p className="opacity-80">Detalles del evento próximamente…</p>
      </section>

      <section id="radio" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Radio</h2>
        <p className="opacity-80">Tu música para correr pronto estará aquí…</p>
      </section>

      <section id="app" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">App</h2>
        <p className="opacity-80">Explora la experiencia RunForFun App.</p>
      </section>

      <section id="documentos" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Documentos</h2>
        <p className="opacity-80">Documentos oficiales del proyecto.</p>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-5 text-center bg-black">
        <img src="/logo.png" alt="RunForFun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">
          © 2025 RunForFun. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
