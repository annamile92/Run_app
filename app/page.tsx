<section id="radio" className="py-16 px-6 flex flex-col items-center bg-black/80">
  <h2 className="text-3xl font-bold mb-6">🎧 Radio Live</h2>

  {/* Contenedor con blur */}
  <div className="reproductor-con-blur w-full max-w-md flex flex-col items-center rounded-xl shadow-lg p-6">
    
    {/* Título y BPM */}
    <p className="text-lg font-semibold mb-2">{playlist[currentIndex]?.title}</p>
    <p className="text-sm opacity-70 mb-4">
      BPM: {playlist[currentIndex]?.bpm} • Cadence: {playlist[currentIndex]?.cadence}
    </p>

    {/* Audio */}
    <audio
      ref={audioRef}
      src={playlist[currentIndex]?.url}
      onEnded={skipNext}
      className="w-full mb-4 rounded"
    />

    {/* Botones de control */}
    <div className="flex gap-4 mt-4">
      <button onClick={skipPrev} className="px-4 py-2 bg-gray-700 rounded text-white">⏮️</button>
      <button onClick={togglePlay} className="px-6 py-2 bg-green-500 rounded font-bold text-black">
        {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
      </button>
      <button onClick={skipNext} className="px-4 py-2 bg-gray-700 rounded text-white">⏭️</button>
    </div>

    {/* Próximas pistas */}
    <div className="mt-6 w-full">
      <h3 className="font-semibold mb-2">Próximas pistas</h3>
      <ol className="list-decimal list-inside text-sm text-gray-300">
        {playlist.slice(currentIndex + 1, currentIndex + 6).map((p) => (
          <li key={p.id}>{p.title} — {p.bpm} bpm</li>
        ))}
      </ol>
    </div>
  </div>

  {/* Estilos inline con JSX */}
  <style jsx>{`
    .reproductor-con-blur {
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 10px;
      padding: 20px;
    }
  `}</style>
</section>
