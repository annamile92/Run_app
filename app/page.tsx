export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: 'white', backgroundColor: 'black', minHeight: '100vh' }}>

      {/* Header fijo con logo y menú */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.3)'
      }}>
        <a href="/">
          <img src="/logo.png" alt="Run4Fun Logo" style={{ height: '60px' }} />
        </a>
        <nav style={{ display: 'flex', gap: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          <a href="#evento" style={{ color: 'white', textDecoration: 'none' }}>Evento</a>
          <a href="#tienda" style={{ color: 'white', textDecoration: 'none' }}>Tienda</a>
          <a href="#radio" style={{ color: 'white', textDecoration: 'none' }}>Radio</a>
          <a href="#app" style={{ color: 'white', textDecoration: 'none' }}>App</a>
          <a href="#documentos" style={{ color: 'white', textDecoration: 'none' }}>Documentos</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section id="hero" style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
          <source src="/hero-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 6px black' }}>Run4Fun</h1>
          <p style={{ fontSize: '1.5rem', textShadow: '1px 1px 3px black' }}>
            Corre, conecta tu música con tu ritmo y vive la experiencia transmedia Run4Fun
          </p>
        </div>
        <img src="/logo.png" alt="Logo secundario" style={{ position: 'absolute', top: '20px', right: '20px', height: '40px' }} />
      </section>

      {/* Justificación del Proyecto */}
      <section id="proyecto" style={{ padding: '120px 20px 80px', textAlign: 'center', backgroundColor: '#111' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>¿Por qué Run4Fun?</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8rem' }}>
