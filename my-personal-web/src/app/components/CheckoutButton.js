"use client";

import { useState } from "react";
import Script from "next/script";

export default function BuyButton({ preferenceId }) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    if (!preferenceId) {
      alert("No se pudo generar la preferencia");
      return;
    }

    try {
      setLoading(true);

      // Inicializar Mercado Pago con la public key
      const mp = new window.MercadoPago(
        process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
        { locale: "es-AR" }
      );

       // Redirigir al checkout
      mp.checkout({
        preference: { id: preferenceId },
        autoOpen: true,
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
        disabled={loading || !preferenceId}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </>
  );
}
