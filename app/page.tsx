"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    async function loadTracks() {
      try {
        const response = await fetch("/api/get-radio-tracks");
        const data = await response.json();
        setTracks(data.files);
      } catch (err) {
        console.error("Error loading tracks:", err);
      }
    }
    loadTracks();
  }, []);

  useEffect(() => {
    if (tracks.length > 0) {
      const fileName = tracks[currentTrackIndex];
      const match = fileName.match(/(\d+)bpm/i);
      setBpm(match ? parseInt(match[1]) : 0);
    }
  }, [currentTrackIndex, tracks]);

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setTimeout(() => audioRef.current.play(), 200);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(false);
    setTimeout(() => audioRef.current.play(), 200);
    setIsPlaying(true);
  };

  return (
    <main style={styles.main}>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>RUNFORFUN</h1>
        <button style={styles.menuBtn}>Menu</button>
      </nav>

      {/* HERO / BANNER */}
      <section style={styles.hero}>
        <img src="/banner-run.gif" alt="Corredores" style={styles.heroImg} />
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>Run together</h2>
          <p style={styles.heroSubtitle}>Encuentra tu ritmo — Encuentra tu tribu</p>
        </div>
      </section>

      {/* RADIO LIVE */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>🎧 Radio Live</h3>

        {tracks.length === 0 ? (
          <p style={styles.loading}>Cargando audios…</p>
        ) : (
          <div style={styles.radioCard}>
            <p style={styles.trackName}>{tracks[currentTrackIndex].replace(".wav", "")}</p>
            <p style={styles.trackBpm}>Cadencia: {bpm} BPM</p>

            <audio
              ref={audioRef}
              src={`/radio-tracks/${tracks[currentTrackIndex]}`}
              onEnded={nextTrack}
            ></audio>

            <div style={styles.controls}>
              <button onClick={prevTrack} style={styles.controlBtn}>⏮️</button>
              <button onClick={playPause} style={styles.playBtn}>{isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}</button>
              <button onClick={nextTrack} style={styles.controlBtn}>⏭️</button>
            </div>
          </div>
        )}
      </section>

      {/* DESCRIPCIÓN DEL PROYECTO */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Sobre RunForFun</h3>
        <p style={styles.paragraph}>
          RunForFun es la app que combina música y running, ayudándote a encontrar tu ritmo ideal, mejorar tu cadencia y conectarte con otros corredores de tu comunidad. Corre, escucha tu música favorita y vive la experiencia completa de RunForFun.
        </p>
      </section>

      {/* DESCARGA DE APP */}
      <section style={{...styles.section, ...styles.downloadSection}}>
        <img src="/qr-code.png" alt="QR App" style={styles.qr} />
        <div>
          <h3 style={styles.sectionTitle}>Descarga la App</h3>
          <p style={styles.paragraph}>Escanea el QR para descargar la app o haz clic en el link si el QR no funciona.</p>
          <a href="https://runforfun.app/download" target="_blank" rel="noopener noreferrer" style={styles.downloadLink}>Descargar App</a>
        </div>
      </section>

      {/* VIDEO EXPLICATIVO */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Aprende a usar la App</h3>
        <video controls src="/tutorial.mp4" style={styles.video}>Tu navegador no soporta video.</video>
      </section>

      {/* CONCLUSIONES */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Conclusiones</h3>
        <p style={styles.paragraph}>
          Gracias por explorar RunForFun. Descubre tu ritmo, corre con tu música favorita y únete a nuestra comunidad de corredores apasionados. ¡Tu próxima carrera está a un clic de distancia!
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2025 RunForFun. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}

const styles = {
  main: { fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff', minHeight: '100vh' },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', top:0, width:'100%', zIndex:20 },
  logo: { fontSize:'1.25rem', fontWeight:'bold' },
  menuBtn: { fontSize:'0.875rem', border:'1px solid #fff', borderRadius:'9999px', padding:'0.25rem 0.75rem', background:'transparent', color:'#fff' },
  hero: { position:'relative', height:'60vh', marginTop:'4rem', overflow:'hidden' },
  heroImg: { width:'100%', height:'100%', objectFit:'cover' },
  heroOverlay: { position:'absolute', top:0,left:0,right:0,bottom:0,background:'linear-gradient(to top, black, transparent, black)' },
  heroText: { position:'absolute', bottom:'1.5rem', left:'1.5rem' },
  heroTitle: { fontSize:'2rem', fontWeight:'600' },
  heroSubtitle: { opacity:0.7 },
  section: { padding:'2rem 1.5rem', maxWidth:'800px', margin:'0 auto', textAlign:'center' },
  sectionTitle: { fontSize:'1.5rem', fontWeight:'bold', marginBottom:'1rem' },
  paragraph: { opacity:0.8, lineHeight:'1.6rem' },
  loading: { opacity:0.6 },
  radioCard: { border:'1px solid rgba(255,255,255,0.1)', borderRadius:'1rem', padding:'1rem', backgroundColor:'rgba(255,255,255,0.05)' },
  trackName: { fontSize:'1.125rem', fontWeight:'600' },
  trackBpm: { fontSize:'0.875rem', opacity:0.6 },
  controls: { display:'flex', gap:'1rem', marginTop:'1rem', justifyContent:'center' },
  controlBtn: { padding:'0.5rem 1rem', borderRadius:'0.5rem', backgroundColor:'rgba(255,255,255,0.2)', border:'none', color:'#fff', cursor:'pointer' },
  playBtn: { padding:'0.5rem 1.5rem', borderRadius:'0.5rem', backgroundColor:'#22c55e', border:'none', color:'#000', fontWeight:'bold', cursor:'pointer' },
  downloadSection: { display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem' },
  qr: { width:'12rem', height:'12rem' },
  downloadLink: { color:'#22c55e', textDecoration:'underline', fontWeight:'600' },
  video: { width:'100%', borderRadius:'0.5rem', boxShadow:'0 0 10px rgba(0,0,0,0.5)' },
  footer: { padding:'1.5rem', backgroundColor:'rgba(0,0,0,0.8)', textAlign:'center' },
};
