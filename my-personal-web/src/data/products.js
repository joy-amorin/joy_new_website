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
    "aprendizaje-musical-funcional-guia-para-autodidactas": 0.05,
    "cuaderno-digital-tu-plan-musical": 5.99,
  };

  // Características específicas por producto
  const featuresMap = {
    "aprendizaje-musical-funcional-guia-para-autodidactas": [
      "Planificador Personalizado: herramientas para definir tus objetivos y diseñar un plan realista y flexible según tu ritmo",
      "Guía de Enfoque Práctico: criterios claros para abordar canciones y organizar prácticas efectivas sin dispersarte",
      "Recursos y Estrategias: sugerencias para aprovechar tu tiempo, usar canciones como material y sacar provecho a la tecnología",
      "Herramientas para el Proceso: consejos para mantener hábitos sostenibles, reconocer avances y construir una relación positiva con tu proceso"
    ],
    "cuaderno-digital-tu-plan-musical": [
      "Perfil del estudiante: Identifica tu estilo de aprendizaje único",
      "Plantillas para metas SMART: Espacios estructurados para definir objetivos claros",
      "Ejercicios de enfoque: Aprende a concentrarte en el proceso, no solo en los resultados",
      "Ejemplos aplicados: Casos prácticos para diferentes tipos de objetivos musicales"
    ]
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

    // Agregar características específicas
    grouped[baseName].features = featuresMap[baseName] || [];
  });

  return Object.values(grouped);
}
