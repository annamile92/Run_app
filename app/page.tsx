"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans text-white bg-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80">
        <a href="/">
          <img src="/logo.png" alt="RunForFun Logo" className="h-12" />
        </a>
        <nav className="flex gap-5 font-bold uppercase">
          {/* Botones del menú */}
          {["Evento", "Radio", "App", "Documentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white no-underline hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}

          {/* Enlace a tienda */}
          <Link href="/tienda">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">
              Tienda
            </span>
          </Link>
        </nav>
      </header>

      {/* Hero Banner con GIF */}
      <section
        id="hero"
        className="relative flex justify-center items-center text-center h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/banner.gif")' }}
      >
        <div className="bg-black/40 p-5 rounded-lg max-w-xl backdrop-blur-sm">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl">
            RunForFun
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white drop-shadow-md">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun
          </p>

          {/* Botón hacia la tienda */}
          <Link href="/tienda">
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
              Ir a la tienda
            </button>
          </Link>
        </div>
        <img
          src="/logo.png"
          alt="Logo secundario"
          className="absolute top-5 right-5 h-10"
        />
      </section>

      {/* Secciones */}
      <section id="evento" className="py-24 px-5 text-center bg-gray-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Evento</h2>
        <p className="text-lg md:text-xl">Próximamente más información…</p>
      </section>

      <section id="radio" className="py-24 px-5 text-center bg-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Radio RunForFun</h2>
        <p className="text-lg md:text-xl">Playlists y ritmos para correr.</p>
      </section>

      <section id="app" className="py-24 px-5 text-center bg-gray-700">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">App RunForFun</h2>
        <video
          controls
          className="max-w-xl w-full rounded-lg shadow-lg"
        >
          <source src="/app-demo.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </section>

      <section id="documentos" className="py-24 px-5 text-center bg-gray-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Documentación</h2>
        <p className="text-lg md:text-xl">Recursos y guías del proyecto.</p>
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 text-center bg-black">
        <img src="/logo.png" alt="RunForFun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">
          © 2025 RunForFun. Todos los derechos reservados.
        </p>
      </footer>

    </main>
  );
}
