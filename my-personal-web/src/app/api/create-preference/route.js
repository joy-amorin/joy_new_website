export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { getProducts } from "@/data/products";

// Inicializar cliente Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { slug } = body;

    // Obtener productos dinámicamente
    const products = await getProducts();
    const product = products.find((p) => p.slug === slug);

    if (!product) {
      console.warn("Producto no encontrado para slug:", slug);
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Crear la preferencia de pago
    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            title: product.title,
            quantity: 1,
            unit_price: product.price,
            currency_id: "USD",
          },
        ],
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/success?slug=${slug}`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/`,
        },
        auto_return: "approved",
        notification_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/notifications`, // webhook
      },
    });

    // Logs para debug
    console.log("===== Mercado Pago Preference =====");
    console.log("Preference ID:", response.id);
    console.log("Init point (producción):", response.init_point);
    console.log("Sandbox init point:", response.sandbox_init_point);
    console.log("Back URLs:", response.back_urls);
    console.log("Items:", response.items);
    console.log("Currency:", response.items.map(i => i.currency_id).join(", "));
    console.log("===================================");

// Retornar solo lo que el frontend necesita
return NextResponse.json({
  preferenceId: response.id,
  initPoint: response.init_point, // esto es lo que debe usar el botón
});

    // Retornar IDs y link de sandbox al frontend
    return NextResponse.json({
      preferenceId: response.id,
      initPoint: response.init_point,
    });
  } catch (error) {
    console.error("Error en create-preference:", error);
    return NextResponse.json(
      { error: "Error al crear la preferencia" },
      { status: 500 }
    );
  }
}