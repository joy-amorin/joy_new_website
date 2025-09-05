export async function getProducts() {
  const res = await fetch("https://web-resources.joy-resources.workers.dev/ebooks");
  if (!res.ok) {
    throw new Error("Error fetching products");
  }
  const data = await res.json();

  const products = [];
  const grouped = {};

  // Mapa de precios por producto
  const precios = {
    "aprendizaje-musical-funcional-guia-para-autodidactas": 9.99,
    "cuaderno-digital-tu-plan-autodidacta": 14.99,
    "mini-guia-de-practica-musical": 4.99,
  };

  data.forEach(item => {
    const baseName = item.name.replace(/\.(jpg|pdf)$/, "");
    if (!grouped[baseName]) grouped[baseName] = {};
    if (item.name.endsWith(".pdf")) grouped[baseName].fileUrl = item.downloadUrl;
    if (item.name.endsWith(".jpg")) grouped[baseName].image = item.imageUrl;
    
    grouped[baseName].title = baseName.replace(/-/g, " ");
    grouped[baseName].slug = baseName;
    grouped[baseName].id = baseName;
    
    // Asignar precio según el mapa
    grouped[baseName].price = precios[baseName] || 9.99; // fallback 9.99 si no está
  });

  return Object.values(grouped);
}
