"use client"

import { useEffect, useState } from 'react';
import { getProducts } from '@/data/products';
import Navbar from '../components/layout/Navbar';
import Link from 'next/link';
import ContactForm from '../components/contact/ContactForm';

export default function TiendaPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-white mt-20 text-lg">Cargando productos...</p>;
  }

  return (
    <>
      <main className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6 md:px-12">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Section Title */}
          <div className="mb-12 text-center">
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400">Tienda</span>
              <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mt-14">
              Explora la <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">tienda</span>
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-[12rem] h-auto object-contain mb-4 rounded"
                />
                <h2 className="text-xl font-body mb-2 line-clamp-1">{product.title}</h2>
                <p className="text-gray-400 font-body mb-4">{product.description || ''}</p>
                <span className="text-lg font-body text-white mb-4">{product.price} USD</span>

                <Link href={`/tienda/producto/${product.slug}`}>
                  <button className="bg-primary text-foreground px-4 py-2 rounded hover:bg-opacity-90 transition">
                    Ver producto
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <section className="mt-20">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400">Contacto</span>
              <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <ContactForm />
          </section>

        </div>
      </main>
      <Navbar />
    </>
  );
}