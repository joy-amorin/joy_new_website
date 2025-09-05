import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";
import { getProducts } from "@/data/products";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    const token = url.searchParams.get("token");

    if (!slug || !token) {
      return NextResponse.json({ error: "Faltan parámetros" }, { status: 400 });
    }

    const valid = verifyToken(token);
    if (!valid || valid.slug !== slug) {
      return NextResponse.json({ error: "Token inválido o expirado" }, { status: 403 });
    }

    const products = await getProducts();
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    // hacer fetch al fileUrl remoto
    const fileRes = await fetch(product.fileUrl);
    if (!fileRes.ok) {
      return NextResponse.json({ error: "Archivo no encontrado en remoto" }, { status: 404 });
    }
    const fileBuffer = await fileRes.arrayBuffer();

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf", // o "application/octet-stream"
        "Content-Disposition": `attachment; filename="${product.slug}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error descargando archivo:", error);
    return NextResponse.json({ error: "Error descargando archivo" }, { status: 500 });
  }
}
