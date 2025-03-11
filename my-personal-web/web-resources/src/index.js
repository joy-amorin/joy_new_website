export default {
	async fetch(request, env) {
	  const url = new URL(request.url);
	  const pathParts = url.pathname.split("/").filter(Boolean);
  
	  // ruta para listar los e-books (PDFs)
	  if (url.pathname === "/ebooks") {
		const objectList = await env.MY_BUCKET.list();  // obtener el listado de objetos
  
		const ebookData = objectList.objects.map((obj) => {
		  return {
			name: obj.key,
			downloadUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${obj.key}`,
			imageUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${obj.key.replace('.pdf', '.jpg')}` // Ruta de la imagen
		  };
		});
  
		const headers = new Headers({
		  "Content-Type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
		  "Access-Control-Allow-Headers": "Content-Type",
		});
  
		return new Response(JSON.stringify(ebookData), { headers });
	  }
  
	  // ruta para servir los archivos PDF (E-books)
	  if (pathParts[0] === "ebooks" && pathParts[1].endsWith(".pdf")) {
		const key = pathParts[1];
		const object = await env.MY_BUCKET.get(key);
		if (object === null) {
		  return new Response("Object Not Found", { status: 404 });
		}
  
		const headers = new Headers();
		object.writeHttpMetadata(headers);
		headers.set("etag", object.httpEtag);
		headers.set('Content-Disposition', `attachment; filename="${key}"`);
  
		return new Response(object.body, { headers });
	  }
  
	  // ruta para servir las imágenes
	  if (pathParts[0] === "ebooks" && pathParts[1].endsWith(".jpg")) {
		const imageKey = pathParts[1];
		const object = await env.MY_BUCKET.get(imageKey);
		if (object === null) {
		  return new Response("Image Not Found", { status: 404 });
		}
  
		const headers = new Headers();
		object.writeHttpMetadata(headers);
		headers.set("etag", object.httpEtag);
  
		return new Response(object.body, { headers });
	  }
  
	  return new Response("Not Found", { status: 404 });
	}
  };
  