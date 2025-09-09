"use client";

import { useState } from "react";
import Script from "next/script";

export default function CheckoutButton({ preferenceId }) {
  const [loading, setLoading] = useState(false);

  const handleBuy = () => {
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

      // Abrir checkout en la misma pestaña para que auto_return funcione
      mp.checkout({
        preference: { id: preferenceId },
        render: {
          container: null, // null para abrir en nueva ventana/pestaña
          label: "Pagar",
        },
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
        className={`
          bg-primary text-foreground px-6 py-2 rounded font-body w-full md:w-auto
          ${loading ? "opacity-60 cursor-not-allowed" : "transition hover:bg-primary-dark"}
        `}
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </>
  );
}
