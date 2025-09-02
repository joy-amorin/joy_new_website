import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { products } from "@/data/products";

// Inicializar cliente
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(request) {
  try {

    const body = await request.json();

    const { slug } = body;

    // Buscar el producto según el slug
    const product = products.find((p) => p.slug === slug);

    if (!product) {
      console.warn("Producto no encontrado para slug:", slug);
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Crear la preferencia
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
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/failure`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/pending`,
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({ preferenceId: response.id });
  } catch (error) {
    console.error("Error en create-preference:", error);
    return NextResponse.json(
      { error: "Error al crear la preferencia" },
      { status: 500 }
    );
  }
}
