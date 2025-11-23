// src/app/page.js
export default function Home() {
  return (
    <main className="font-sans text-white bg-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80">
        <a href="/">
          <img src="/logo.png" alt="Run4Fun Logo" className="h-15" />
        </a>
        <nav className="flex gap-5 font-bold uppercase">
          {[
            { label: "Evento", href: "#evento" },
            { label: "Tienda", href: "/tienda" }, // enlace a página externa
            { label: "Radio", href: "#radio" },
            { label: "App", href: "#app" },
            { label: "Documentos", href: "#documentos" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white no-underline hover:text-yellow-400 transition"
            >
              {item.label}
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
