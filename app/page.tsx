export default function Home() {
  return (
    <main className="font-sans text-white bg-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80">
        <a href="/">
          <img src="/logo.png" alt="Run4Fun Logo" className="h-15" />
        </a>
        <nav className="flex gap-5 font-bold uppercase">
          {["Evento", "Tienda", "Radio", "App", "Documentos"].map((item) => (
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
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a RunForFun</h1>
      <Link href="/tienda">
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
          Ir a la tienda
        </button>
      </Link>
    </div>
  );
}

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

      {/* Justificación del Proyecto */}
      <section
        id="proyecto"
        className="py-32 px-5 text-center bg-gray-900"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Por qué Run4Fun?</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Run4Fun es un ecosistema transmedia que une investigación social, antropología y diseño de experiencias.
          Conecta tu cuerpo, tu entorno y tus relaciones mientras corres, con música sincronizada a tu ritmo cardíaco.
          Todo esto en un entorno tipo festival, lleno de energía, comunidad y creatividad.
        </p>
      </section>

      {/* Tienda */}
      <section
        id="tienda"
        className="py-24 px-5 text-center bg-gray-900"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tienda</h2>
        <p className="text-lg md:text-xl">Productos y accesorios oficiales para vivir Run4Fun al máximo.</p>
      </section>

      {/* Radio */}
      <section
        id="radio"
        className="py-24 px-5 text-center bg-gray-800"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Radio Run4Fun</h2>
        <p className="text-lg md:text-xl">Escucha playlists sincronizadas con tus latidos y sumérgete en el ecosistema del evento.</p>
      </section>

      {/* Video App */}
      <section
        id="app"
        className="py-24 px-5 text-center bg-gray-700"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">App Run4Fun</h2>
        <video
          controls
          className="max-w-xl w-full rounded-lg shadow-lg"
        >
          <source src="/app-demo.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </section>

      {/* QR + Descarga */}
      <section
        id="descarga"
        className="py-24 px-5 text-center bg-gray-900"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Descarga la App</h2>
        <img
          src="/qr-code.png"
          alt="QR Run4Fun"
          className="w-48 h-48 mb-4 mx-auto"
        />
        <p className="text-lg md:text-xl">Escanea el QR y únete al ecosistema Run4Fun desde tu móvil.</p>
      </section>

      {/* Documentación */}
      <section
        id="documentos"
        className="py-24 px-5 text-center bg-gray-900"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Documentación</h2>
        <p className="text-lg md:text-xl">Guías, documentos y recursos de Run4Fun, para desarrolladores y participantes.</p>
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 text-center bg-black">
        <img src="/logo.png" alt="Run4Fun Logo" className="h-12 mb-3 mx-auto" />
        <p className="text-white font-bold">© 2025 Run4Fun. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
