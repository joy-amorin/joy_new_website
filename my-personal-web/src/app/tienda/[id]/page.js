"use client";

import React, { useState, useEffect } from "react";
import { products } from "@/data/products";
import Navbar from "@/app/components/Navbar";
import CheckoutButton from "@/app/components/CheckoutButton";

export default function ProductPage({ params }) {
    const  resolvedParams = React.use(params)
    const { id } = resolvedParams; // id pasado en la URL
    const product = products.find((p) => p.id === id);

    const [preferenceId, setPreferenceId] = useState(null);

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
          Producto no encontrado
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
          <h1 className="text-4xl md:text-5xl font-body text-foreground mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-foreground/80 italic mb-6">
            {product.description}
          </p>
        </div>

        {/* Imagen y detalles */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-xs w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>

          <div className="font-body text-foreground">
            <p className="mb-4 text-2xl font-semibold">${product.price}</p>

            {/* Botón de compra */}
            {preferenceId ? (
              <CheckoutButton preferenceId = {preferenceId} />
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
