export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { generateToken } from "@/utils/jwt";
import { getProducts } from "@/data/products";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    if (!slug) return NextResponse.json({ error: "No slug provided" }, { status: 400 });

    const products = await getProducts();
    const product = products.find((p) => p.slug === slug);
    if (!product) return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });

    const token = generateToken(slug);

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generando token:", error);
    return NextResponse.json({ error: "Error generando token" }, { status: 500 });
  }
}
