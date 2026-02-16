{/* EVENTO */}
<section
  id="evento"
  className="py-16 px-6 flex flex-col md:flex-row items-center gap-6 bg-[#2e2e2ecc]"
>
  <div className="md:w-1/2 flex justify-center">
    <Image
      src="/1.png"
      alt="Evento"
      width={280}
      height={280}
      className="rounded-lg shadow-md"
    />
  </div>

  <div className="md:w-1/2 text-white flex flex-col gap-4">
    <h2 className="text-3xl font-bold mb-4">
      ¿Estás listo para experimentar una experiencia de conexión con otros?
    </h2>

    <p className="opacity-80 leading-relaxed">
      En Medellín, correr ya no es solo un deporte: es{" "}
      <strong>una experiencia que conecta, motiva y une</strong>.
    </p>

    <p className="opacity-80 leading-relaxed">
      Con Run4Fun, cada carrera se convierte en{" "}
      <strong>una experiencia viva y colectiva</strong>.
    </p>

    <a
      href="https://drive.google.com/file/d/1zuUgkeYhA3zltWYRz0qOq91jwr4s2o6r/view"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-black font-semibold px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-all"
    >
      Ver Evento
    </a>
  </div>
</section>

{/* DOCUMENTOS */}
<section
  id="documentos"
  className="py-16 px-6 flex flex-col md:flex-row items-center gap-6 bg-[#3a3a3acc]"
>
  <div className="md:w-1/2 flex justify-center">
    <Image
      src="/3.png"
      alt="Documentos"
      width={280}
      height={280}
      className="rounded-lg shadow-md"
    />
  </div>

  <div className="md:w-1/2 text-white flex flex-col gap-4">
    <h2 className="text-3xl font-bold mb-4">Documentos</h2>
    <p className="opacity-80">
      Documentos investigación del proyecto Run4Fun.
    </p>

    <div className="flex gap-4 mt-4">
      <a
        href="https://www.figma.com/deck/O6dXDo8EnfQbRB2ELgYmOw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/archivo.png" alt="Figma" width={60} height={60} />
      </a>

      {/* 🚫 Documento eliminado para evitar descargas */}
    </div>
  </div>
</section>
