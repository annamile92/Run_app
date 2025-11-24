// src/app/page.js
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center p-10">
      
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-6">RunForFun</h1>
        <p className="text-xl mb-10 opacity-80">
          Corre, conecta y disfruta la experiencia.
        </p>

        <Link href="/tienda">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
            Ir a la Tienda 🛒
          </button>
        </Link>
      </div>

      {/* Estilos de las ondas */}
      <style jsx>{`
        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, transparent 20%, rgba(255,255,255,0.15) 60%, transparent 80%);
          animation: spin 12s linear infinite;
          opacity: 0.4;
        }

        .wave1 {
          background: radial-gradient(circle, rgba(255,0,128,0.4) 10%, transparent 70%);
          animation-duration: 18s;
          mix-blend-mode: screen;
        }

        .wave2 {
          background: radial-gradient(circle, rgba(0,200,255,0.35) 10%, transparent 70%);
          animation-duration: 25s;
          mix-blend-mode: screen;
        }

        .wave3 {
          background: radial-gradient(circle, rgba(0,255,120,0.35) 10%, transparent 70%);
          animation-duration: 32s;
          mix-blend-mode: screen;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
