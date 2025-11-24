"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans text-white bg-black">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-black/80 backdrop-blur">
        <a href="/">
          <img src="/logo.png" alt="RunForFun Logo" className="h-12" />
        </a>

        <nav className="flex gap-6 font-bold uppercase text-sm">
          {["Evento", "Radio", "App", "Documentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}

          {/* BOTÓN TIENDA */}
          <Link href="/tienda">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">
              Tienda
            </span>
          </Link>
        </nav>
      </header>

      {/* HERO PRINCIPAL CON FONDO ANIMADO */}
      <section
        id="hero"
        className="relative f
