"use client"

import { useEffect, useState } from 'react';
import { getProducts } from '@/data/products';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';


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
    return <p className="text-center mt-20 text-lg">Cargando productos...</p>;
  }

  return (
    <>
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl text-center text-foreground font-body mb-10 mt-14">
          Explora la tienda
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[12rem] h-auto object-contain mb-4 rounded"
              />
              <h2 className="text-xl text-foreground font-body mb-2 line-clamp-1">{product.title}</h2>
              <p className="text-foreground font-body mb-4">{product.description || ''}</p>
              <span className="text-lg font-body text-foreground mb-4">{product.price} USD</span>

              <Link href={`/tienda/producto/${product.slug}`}>
                <button className="bg-primary text-foreground px-4 py-2 rounded hover:bg-opacity-90 transition">
                  Comprar
                </button>
              </Link>
            </div>
          ))}
        </div>
        <section>
          <ContactForm/>
        </section>
       
      </main>
      <Navbar />
    </>
  );
}
