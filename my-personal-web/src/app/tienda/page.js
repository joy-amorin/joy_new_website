"use client"

import { products } from '@/data/products';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function TiendaPage() {
  return (
    <>
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl text-center text-foreground font-body mb-10 mt-14">Explora la tienda</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center text-center">
            <img src={product.image} alt={product.title} className="w-full max-w-[12rem] h-auto object-contain mb-4 rounded" />
            <h2 className="text-xl text-foreground font-body mb-2">{product.title}</h2>
            <p className="text-foreground font-body mb-4">{product.description}</p>
            <span className="text-lg font-body text-foreground mb-4">${product.price}</span>

            <Link href={`/tienda/${product.slug}`}>
              <button
                className="bg-primary text-foreground px-4 py-2 rounded hover:bg-opacity-90 transition"
              >
                Comprar
              </button>
            </Link>
          </div>
        ))}
      </div>
      </main>
    <Navbar />
    </>
  );
}
