import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <main className="font-sans text-white bg-black">

      {/* Header fijo con logo y menú */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 bg-transparent">
        <Link href="/">
          <Image src={logo} alt="Run4Fun Logo" width={60} height={60} />
        </Link>
        <nav className="space-x-8 font-bold text-lg uppercase tracking-wide">
          <Link href="#evento">Evento</Link>
          <Link href="#tienda">Tienda</Link>
          <Link href="#radio">Radio</Link>
          <Link href="#app">App</Link>
          <Link href="#documentos">Documentos</Link>
        </nav>
      </header>

      {/* Hero Banner – video + branding doble */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center relative"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover -z-10"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg mb-4">
            Run4Fun
          </h1>
          <p className="text-2xl md:text-3xl drop-shadow-md">
            Corre, conecta tu música con tu ritmo y vive la experiencia transmedia Run4Fun
          </p>
        </div>
        {/* Branding doble en la esquina */}
        <div className="absolute top-6 right-6">
          <Image src={logo} alt="Logo secundario" width={40} height={40} />
        </div>
      </section>

      {/* Justificación del proyecto */}
      <section id="proyecto" className="py-24 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Por qué Run4Fun?</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Run4Fun es un ecosistema transmedia que une investigación social, antropología y diseño de experiencias. 
          Conecta tu cuerpo, tu entorno y tus relaciones mientras corres, con música sincronizada a tu ritmo cardíaco.
        </p>
      </section>

      {/* Tienda */}
      <section id="tienda" className="py-24 px-6 text-center bg-purple-800">
        <h2 className="text-4xl font-bold mb-4">Tienda</h2>
        <p className="text-lg">Productos y accesorios oficiales para que formes parte de la experiencia Run4Fun.</p>
      </section>

      {/* Radio */}
      <section id="radio" className="py-24 px-6 text-center bg-pink-700">
        <h2 className="text-4xl font-bold mb-4">Radio Run4Fun</h2>
        <p className="text-lg">Escucha playlists sincronizadas con tus latidos y sumérgete en el ecosistema del evento.</p>
      </section>

      {/* Video explicativo de la App */}
      <section id="app" className="py-24 px-6 text-center bg-yellow-600 text-black">
        <h2 className="text-4xl font-bold mb-6">App Run4Fun</h2>
        <video controls className="mx-auto max-w-lg rounded-lg shadow-2xl">
          <source src="/app-demo.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </section>

      {/* QR + Descarga */}
      <section id="descarga" className="py-24 px-6 text-center bg-green-700">
        <h2 className="text-4xl font-bold mb-4">Descarga la App</h2>
        <Image src="/qr-code.png" alt="QR Run4Fun" width={200} height={200} className="mx-auto mb-4" />
        <p className="text-lg">Escanea el QR y únete al ecosistema Run4Fun desde tu móvil.</p>
      </section>

      {/* Documentación */}
      <section id="documentos" className="py-24 px-6 text-center bg-blue-800">
        <h2 className="text-4xl font-b
