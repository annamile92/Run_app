<section
  id="app"
  className="py-32 px-6 grid grid-cols-1 md:grid-cols-2 items-center bg-[url('/fondo.png')] bg-cover bg-center gap-8"
>
  {/* Columna izquierda: imagen */}
  <div className="flex justify-center md:justify-start">
    <img
      src="/1.png"
      alt="App RunForFun"
      className="w-full max-w-sm rounded-lg shadow-lg"
    />
  </div>

  {/* Columna derecha: texto */}
  <div className="text-center md:text-left text-white">
    <h2 className="text-4xl font-bold mb-4">RunForFun App</h2>
    <p className="opacity-80 mb-6 leading-relaxed">
      Explora la experiencia RunForFun: corre, conecta tu música con tu ritmo y vive la experiencia completa. 
    </p>
    <div className="flex flex-col items-center md:items-start gap-4">
      {/* QR y link de descarga */}
      <img src="/qr-code.png" alt="QR App" className="w-48 h-48" />
      <a
        href="https://runforfun.app/download"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 font-semibold underline"
      >
        Descargar App
      </a>
    </div>
  </div>
</section>
