// src/app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fondo negro transparente para que el texto se lea mejor */}
      <div className="bg-black/60 p-10 rounded-2xl max-w-2xl text-center backdrop-blur-sm">

        <h1 className="text-5xl font-extrabold mb-6">
          RunForFun
        </h1>

        <p className="text-xl mb-8 leading-relaxed">
          Corre, conecta tu música con tu ritmo y vive la experiencia RunForFun.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <Link href="/tienda">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition">
              Ir a la Tienda
            </button>
          </Link>

          <Link href="/rutas">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition">
              Explorar Rutas
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
