export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { getProducts } from "@/data/products";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TEST_ACCESS_TOKEN,
});

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug"); // recibir slug desde front
    if (!slug) return NextResponse.json({ error: "No slug provided" }, { status: 400 });

    // Buscar el producto
    const products = await getProducts();
    const product = products.find(p => p.slug === slug);
    if (!product) return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });

    // Consultar pagos en Mercado Pago para este producto
    const payment = new Payment(client);
    const result = await payment.search({ qs: { external_reference: slug } });

    // Encontrar el primer pago aprobado
    const approvedPayment = result.results?.find(p => p.status === "approved");

    return NextResponse.json({
      status: approvedPayment ? "approved" : "pending",
      product,
    });
  } catch (error) {
    console.error("Error en payment-status:", error);
    return NextResponse.json({ error: "Error consultando el pago" }, { status: 500 });
  }
}
