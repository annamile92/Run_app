// src/app/tienda/page.js

import React from 'react';

// Lista de productos de ejemplo
const productos = [
  {
    id: 1,
    nombre: 'Camiseta RunForFun',
    precio: 25,
    imagen: '/productos/camiseta.jpg', // coloca la imagen en public/productos
  },
  {
    id: 2,
    nombre: 'Gorra RunForFun',
    precio: 15,
    imagen: '/productos/gorra.jpg',
  },
  {
    id: 3,
    nombre: 'Botella de agua',
    precio: 10,
    imagen: '/productos/botella.jpg',
  },
];

export default function TiendaPage() {
  return (
    <div className="tienda-container p-6">
      <h1 className="text-3xl font-bold mb-6">Tienda RunForFun</h1>

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
            className="producto border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
            <p className="text-gray-700 mb-4">${producto.precio}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
