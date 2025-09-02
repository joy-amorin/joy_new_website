import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { products } from "@/data/products";

// Inicializar cliente
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(request) {
  try {
    console.log("POST /api/create-preference recibido");

    const body = await request.json();

    console.log("Todos los slugs disponibles:", products.map(p => p.slug));
    console.log("Cuerpo de la request:", body);

    const { slug } = body;
    console.log("NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL);


    // Buscar el producto según el slug
    const product = products.find((p) => p.slug === slug);
    console.log("Producto encontrado:", product);

    if (!product) {
      console.warn("Producto no encontrado para slug:", slug);
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }
    console.log("NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL);
    console.log("back_urls a enviar:", {
    success: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/success?slug=${slug}`,
    failure: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/failure`,
    pending: `${process.env.NEXT_PUBLIC_SITE_URL}/tienda/pending`,
    });


    // Crear la preferencia
    const preference = new Preference(client);
    console.log("Objeto Preference creado");

    const response = await preference.create({
      body: {
        items: [
          {
            title: product.title,
            quantity: 1,
            unit_price: product.price,
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

    console.log("Preferencia creada correctamente:", response);

    return NextResponse.json({ preferenceId: response.id });
  } catch (error) {
    console.error("Error en create-preference:", error);
    return NextResponse.json(
      { error: "Error al crear la preferencia" },
      { status: 500 }
    );
  }
}
