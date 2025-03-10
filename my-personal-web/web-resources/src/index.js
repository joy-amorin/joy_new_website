export default {
	async fetch(request, env) {
	  const url = new URL(request.url);
	  
	  // ruta para listar los e-books
	  if (url.pathname === "/ebooks") {
		const objectList = await env.MY_BUCKET.list();  // obtener el listado de objetos
  
		// crear una respuesta json con los nombres de los e-books y sus enlaces de descarga
		const ebookData = objectList.objects.map((obj) => {
		  return {
			name: obj.key,
			downloadUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${obj.key}`  // URL para descargar el archivo
		  };
		});
  
		const headers = new Headers({
		  "Content-Type": "application/json",  // cambiar el tipo de contenido a json
		  "Access-Control-Allow-Origin": "*",  // permitir solicitudes desde cualquier origen
		  "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
		  "Access-Control-Allow-Headers": "Content-Type",
		});
  
		return new Response(JSON.stringify(ebookData), { headers });
	  }
  
	  // extraer la clave del objeto desde la URL para acceder a un archivo específico
	  const pathParts = url.pathname.split("/").filter(Boolean);
	  const key = pathParts.length > 1 && pathParts[0] === "ebooks" ? pathParts[1] : null;
  
	  if (key) {
		// obtener el archivo correspondiente al key proporcionado
		const object = await env.MY_BUCKET.get(key);
		if (object === null) {
		  return new Response("Object Not Found", { status: 404 });
		}
  
		const headers = new Headers();
		object.writeHttpMetadata(headers);
		headers.set("etag", object.httpEtag);

		headers.set('Content-Disposition', `attachment; filename="${key}"`);

  
		headers.set('Access-Control-Allow-Origin', '*');
		headers.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
		headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
		return new Response(object.body, { headers });
	  }
  
	  // si no es la ruta de e-books, proceder con el resto de las operaciones
	  switch (request.method) {
		case "PUT":
		  await env.MY_BUCKET.put(key, request.body);
		  return new Response(`Put ${key} successfully!`);
		case "DELETE":
		  await env.MY_BUCKET.delete(key);
		  return new Response("Deleted!");
		default:
		  return new Response("Method Not Allowed", { status: 405 });
	  }
	},
};
