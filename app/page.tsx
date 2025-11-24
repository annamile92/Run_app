// src/app/page.js

import Link from "next/link";
import {
  Calendar,
  Layers,
  Radio,
  ShoppingBag,
} from "lucide-react";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay negro suave */}
      <div className="bg-black/60 min-h-screen w-full backdrop-blur-sm">
        
        {/* 🔥 MENÚ SUPERIOR */}
        <nav className="w-full flex justify-center gap-10 py-6 text-lg font-semibold">
          <Link href="/evento" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Calendar size={20} /> Evento
          </Link>

          <Link href="/proyecto" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Layers size={20} /> Proyecto
          </Link>

          <Link href="/radio" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Radio size={20} /> Radio
          </Link>

          <Link href="/tienda" className="flex items-center gap-2 hover:text-blue-400 transition">
            <ShoppingBag size={20} /> Tienda
          </Link>
        </nav>

        {/* 🔥 SECCIÓN PRINCIPAL */}
        <div className="flex flex-col items-center justify-center text-center px-6 mt-20">
          <h1 className="text-5xl font-extrabold mb-6">
            RunForFun
          </h1>

          <p className="text-xl max-w-2xl leading-relaxed">
            Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
          </p>
        </div>
      </div>
    </div>
  );
}
