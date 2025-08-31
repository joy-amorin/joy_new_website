"use client";

import { useState } from "react";
import Script from "next/script";

export default function BuyButton({ slug }) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    try {
      setLoading(true);

      // Llamar API de Next.js
      const res = await fetch("/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      const data = await res.json();
      if (!data.preferenceId) {
        alert("Error al generar la preferencia");
        return;
      }

      // Inicializar Mercado Pago (con public key)
      const mp = new window.MercadoPago(
        process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
        { locale: "es-AR" }
      );

      // Redirigir al checkout
      mp.checkout({
        preference: { id: data.preferenceId },
        autoOpen: true, // abre directamente
      });
    } catch (err) {
      console.error("Error en compra:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Cargar el script oficial de Mercado Pago */}
      <Script src="https://sdk.mercadopago.com/js/v2" strategy="afterInteractive" />

      <button
        onClick={handleBuy}
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </>
  );
}
