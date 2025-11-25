import React from "react";
import Link from "next/link";

// Lista de productos
const productos = [
  {
    id: 1,
    nombre: "Camiseta Run4Fun",
    precio: 45000,
    imagen: "/productos/camiseta.jpg",
  },
  {
    id: 2,
    nombre: "Gorra RunF4Fun",
    precio: 35000,
    imagen: "/productos/gorra.jpg",
  },
  {
    id: 3,
    nombre: "Botella de agua Run4Fun",
    precio: 15000,
    imagen: "/productos/botella.jpg",
  },
];

export default function TiendaPage() {
  return (
    <div className="tienda-container p-6">
      {/* Botón para volver al home */}
      <Link href="/">
        <button
          style={{
            padding: "10px 16px",
            marginBottom: "20px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          ⬅ Volver
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      {/* Banner */}
      <div className="banner mb-8">
        <img
          src="/banner-tienda.jpg"
          alt="Banner de la tienda"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
            <p className="text-gray-700 mb-4">${producto.precio}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Lo quiero
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
