export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { getProducts } from "@/data/products";
import { v4 as uuidv4 } from "uuid"
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

    // crear identificador único por transacción
    const uniqueId = uuidv4()

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
        success: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/success?slug=${slug}`, // webhook

        external_reference: uniqueId
      
      },
    });

    // Retornar los datos al frontend
    return NextResponse.json({
      preferenceId: response.id,
      initPoint: response.init_point, //lo que debe usar el botón
      external_reference: uniqueId
    });

  } catch (error) {
    console.error("Error en create-preference:", error);
    return NextResponse.json(
      { error: "Error al crear la preferencia" },
      { status: 500 }
    );
  }
}
