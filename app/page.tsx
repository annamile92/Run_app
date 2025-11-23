// src/app/page.js
"use client"; // Necesario para usar useRouter en App Router
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="font-sans text-white bg-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80">
        <a href="/">
          <img src="/logo.png" alt="Run4Fun Logo" className="h-15" />
        </a>
        <nav className="flex gap-5 font-bold uppercase">
          {["Evento", "Radio", "App", "Documentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white no-underline hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Banner */}
      <section
        id="hero"
        className="relative flex justify-center items-center text-center h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/banner.jpg")' }}
      >
        <div className="bg-black/40 p-5 rounded-lg max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl">
            Run4Fun
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white drop-shadow-md">
            Corre, conecta tu música con tu ritmo y vive la experiencia Run4Fun
          </p>

          {/* Botón hacia la tienda */}
          <button
            onClick={() => router.push('/tienda')}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          >
            Ir a la tienda
          </button>
        </div>
        <img
          src="/logo.png"
          alt="Logo secundario"
          className="absolute top-5 right-5 h-10"
        />
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 text-center bg-black">
        <img src="/logo.png" alt="Run4Fun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">© 2025 Run4Fun. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
