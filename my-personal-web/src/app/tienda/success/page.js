"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/data/products";
import Navbar from "@/app/components/Navbar";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const paymentStatus = searchParams.get("status"); // viene de Mercado Pago
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    const fetchProductAndToken = async () => {
      try {
        if (!slug) return;

        // Obtener producto
        const products = await getProducts();
        const found = products.find((p) => p.slug === slug);
        setProduct(found);

        if (paymentStatus === "approved" && found) {
          // Pedir token temporal para descarga segura
          const res = await fetch(`/api/generate-download-token?slug=${slug}`);
          const data = await res.json();
          if (data.token) {
            setDownloadUrl(`/api/download?slug=${slug}&token=${data.token}`);
          }
        }
      } catch (error) {
        console.error("Error al cargar el producto o generar token:", error);
      }
    };

    fetchProductAndToken();

    // Establecer status
    if (paymentStatus === "approved") setStatus("approved");
    else if (paymentStatus === "pending") setStatus("pending");
    else setStatus("error");
  }, [slug, paymentStatus]);

  if (!product) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-3xl font-body mb-4">Procesando compra...</h1>
        <p>Estamos verificando tu producto. Actualiza la página en unos segundos.</p>
        <Navbar />
      </main>
    );
  }

  return (
    <>
      <main className="p-8 max-w-2xl mx-auto text-center mt-20">
        {status === "approved" ? (
          <>
            <h1 className="text-3xl font-body text-foreground mb-6">
              🎉 ¡Compra exitosa!
            </h1>
            <p className="mb-4 text-lg text-foreground">
              Gracias por tu compra de <strong>{product.title}</strong>.
            </p>

            <p className="mb-4 text-lg text-foreground">
              📥 Asegúrate de realizar la descarga antes de salir de la página.
            </p>

            {downloadUrl ? (
              <a
                href={downloadUrl}
                className="bg-primary text-foreground px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
              >
                Descargar producto
              </a>
            ) : (
              <p>Preparando enlace de descarga...</p>
            )}
          </>
        ) : status === "pending" ? (
          <p>Tu pago aún no ha sido aprobado. Intenta nuevamente en unos segundos.</p>
        ) : (
          <p>Ocurrió un error al verificar tu pago. Por favor, intenta de nuevo.</p>
        )}

        <div className="mt-6">
          <a href="/tienda" className="text-primary hover:underline">
            ← Volver a la tienda
          </a>
        </div>
      </main>
      <Navbar />
    </>
  );
}
