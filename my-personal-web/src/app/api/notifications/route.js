export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { generateToken } from "@/utils/jwt"; // importa tu función de generación de JWT

// Inicializar cliente con tu access token (privado)
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TEST_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("🔔 Webhook recibido de Mercado Pago:", JSON.stringify(body, null, 2));

    // Solo procesar pagos
    if (body.type === "payment") {
      const paymentId = body.data.id;

      // Consultar la API para confirmar el estado
      const payment = new Payment(client);
      const result = await payment.get({ id: paymentId });

      console.log("📌 Detalle del pago:", result);

      if (result.status === "approved") {
        console.log("✅ Pago aprobado:", result.id, "Email comprador:", result.payer?.email);

        // Generar token JWT temporal para descarga
        const slug = result.external_reference || result.preference_id; 
        const token = generateToken(slug);

        return NextResponse.json({
          status: "approved",
          productSlug: slug,
          token,
        });
      } else {
        console.log("❌ Pago NO aprobado. Estado:", result.status);
        return NextResponse.json({
          status: result.status,
        });
      }
    }

    return NextResponse.json({ status: "ignored" });
  } catch (error) {
    console.error("⚠️ Error procesando webhook:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
