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

      {/* HERO PRINCIPAL CON FONDO ANIMADO */}
      <section
        id="hero"
        className="relative flex justify-center items-center text-center h-screen overflow-hidden"
      >
        {/* Fondo animado tipo GIF */}
        <div className="absolute inset-0 animated-fluid-bg"></div>

        {/* Contenido */}
        <div className="relative z-10 bg-black/40 p-6 rounded-xl backdrop-blur-md shadow-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold">RunForFun</h1>
          <p className="mt-4 text-xl opacity-90">
            Corre, conecta tu música y vibra con tus datos biométricos.
          </p>

          {/* Botón Tienda dentro del hero (opcional) */}
          <Link href="/tienda">
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Ir a la tienda 🛒
            </button>
          </Link>
        </div>
      </section>

      {/* ANIMACIÓN CSS */}
      <style jsx>{`
        .animated-fluid-bg {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 0, 150, 0.7), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(255, 100, 200, 0.6), transparent 65%),
                      radial-gradient(circle at 40% 80%, rgba(255, 0, 255, 0.5), transparent 70%),
                      radial-gradient(circle at 80% 20%, rgba(255, 60, 180, 0.6), transparent 60%);
          animation: fluidMotion 12s ease-in-out infinite alternate;
          filter: blur(90px);
          opacity: 0.85;
        }

        @keyframes fluidMotion {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(80px, -40px) scale(1.2);
          }
          100% {
            transform: translate(-60px, 40px) scale(1.3);
          }
        }
      `}</style>

      {/* SECCIONES (SIMPLIFICADAS, PARA QUE APAREZCAN) */}
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
