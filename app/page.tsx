export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: 'white', backgroundColor: 'black' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '20px', display: 'flex', justifyContent: 'space-between', zIndex: 50 }}>
        <a href="/">
          <img src="/logo.png" alt="Run4Fun Logo" style={{ height: '60px' }} />
        </a>
        <nav style={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
          <a href="#evento">Evento</a>
          <a href="#tienda">Tienda</a>
          <a href="#radio">Radio</a>
          <a href="#app">App</a>
          <a href="#documentos">Documentos</a>
        </nav>
      </header>

      <section id="hero" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px black' }}>Run4Fun</h1>
          <p style={{ fontSize: '1.5rem', textShadow: '1px 1px 2px black' }}>Corre, conecta tu música con tu ritmo y vive la experiencia transmedia Run4Fun</p>
        </div>
      </section>
    </main>
  );
}
