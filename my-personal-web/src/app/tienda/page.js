"use client"

import { products } from '@/data/products';

export default function TiendaPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tienda</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl shadow p-4 flex flex-col items-center text-center">
            <img src={product.image} alt={product.title} className="w-full h-auto max-h-64 object-contain mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <span className="text-lg font-bold mb-4">${product.price}</span>
            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
              onClick={() => alert('Funcionalidad de compra próximamente')}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
