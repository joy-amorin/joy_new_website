"use client";

import React, { useState, useEffect } from "react";
import { getProducts } from "@/data/products";
import Navbar from "@/app/components/layout/Navbar";
import CheckoutButton from "@/app/components/tienda/CheckoutButton";

export default function ProductPage(props) {
  const { id } = props.params;

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);

  // Fetch de productos dinámico
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Busca el producto según el id del URL
  useEffect(() => {
    if (products.length === 0) return;
    const found = products.find((p) => p.id === id);
    setProduct(found);
  }, [products, id]);

  // Crea la preferencia de Mercado Pago
  useEffect(() => {
    if (!product) return;

    const createPreference = async () => {
      try {
        const baseUrl = window.location.hostname.includes("localhost")
          ? "http://localhost:3000"
          : window.location.origin;

        const res = await fetch(`${baseUrl}/api/create-preference`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: product.slug }),
        });

        const data = await res.json();
        if (data.preferenceId) setPreferenceId(data.preferenceId);
      } catch (error) {
        console.error("Error al generar la preferencia:", error);
      }
    };

    createPreference();
  }, [product]);

  if (!product) {
    return (
      <main className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl text-foreground font-body mb-4">
          Buscando producto
        </h1>
        <p>El producto que estás buscando no existe.</p>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32 mt-10">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-center text-foreground font-body mb-10 mt-14">
            {product.title}
          </h1>
          <p className="text-lg text-foreground/80 italic mb-6">
            {product.description}
          </p>
        </div>

        {/* Imagen a la izquierda y características + botón a la derecha */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
          {/* Imagen */}
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-xs w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Características y botón */}
          <div className="flex flex-col flex-1">
            {/* Características */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-body mb-4">Lo que encontrarás dentro:</h2>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-green-600 font-body text-xl">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Precio */}
            <p className="mb-4 text-2xl font-foreground">{product.price} USD</p>

            {/* Botón de compra */}
            {preferenceId ? (
              <CheckoutButton preferenceId={preferenceId} />
            ) : (
              <button
                className="bg-primary text-foreground px-6 py-2 rounded hover:bg-primary-dark transition text-lg font-body w-full md:w-auto"
                disabled
              >
                Procesando...
              </button>
            )}

            {/* Enlace para volver a la tienda */}
            <div className="mt-6">
              <a
                href="/tienda"
                className="text-primary hover:underline font-body"
              >
                ← Volver a la tienda
              </a>
            </div>
          </div>
        </div>
      </main>
      <Navbar />
    </>
  );
}
