import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

// Inicializar cliente con tu access token (privado)
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TEST_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("🔔 Webhook recibido de Mercado Pago:", JSON.stringify(body, null, 2));

    // Solo procesamos pagos
    if (body.type === "payment") {
      const paymentId = body.data.id;

      // Consultamos la API para confirmar el estado
      const payment = new Payment(client);
      const result = await payment.get({ id: paymentId });

      console.log("📌 Detalle del pago:", result);

      if (result.status === "approved") {
        console.log("✅ Pago aprobado:", result.id, "Email comprador:", result.payer?.email);
        // Aquí podrías enviar un email con el link de descarga
        // o marcar en tu sistema que el producto está habilitado
      } else {
        console.log("❌ Pago NO aprobado. Estado:", result.status);
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("⚠️ Error procesando webhook:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
