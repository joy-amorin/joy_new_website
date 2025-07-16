"use client"

import { products } from '@/data/products';
import Navbar from '../components/Navbar';

export default function TiendaPage() {
  return (
    <>
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl text-foreground font-body mb-8">Tienda</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center text-center">
            <img src={product.image} alt={product.title} className="w-full max-w-[12rem] h-auto object-contain mb-4 rounded" />
            <h2 className="text-xl text-foreground font-body mb-2">{product.title}</h2>
            <p className="text-foreground font-body mb-4">{product.description}</p>
            <span className="text-lg font-body text-foreground mb-4">${product.price}</span>
            <button
              className="bg-primary text-foreground px-4 py-2 rounded hover:bg-opacity-90 transition"
              onClick={() => alert('Funcionalidad de compra próximamente')}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
      </main>
    <Navbar />
    </>
  );
}
