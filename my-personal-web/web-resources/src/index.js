export default {
	async fetch(request, env) {
	  const url = new URL(request.url);
	  const key = url.pathname.slice(1);
  
	  switch (request.method) {
		case "PUT":
		  await env.MY_BUCKET.put(key, request.body);  // Interacción con el bucket
		  return new Response(`Put ${key} successfully!`);
		case "GET":
		  const object = await env.MY_BUCKET.get(key);  // Leer del bucket
		  if (object === null) {
			return new Response("Object Not Found", { status: 404 });
		  }
		  const headers = new Headers();
		  object.writeHttpMetadata(headers);
		  headers.set("etag", object.httpEtag);
		  return new Response(object.body, { headers });
		case "DELETE":
		  await env.MY_BUCKET.delete(key);  // Eliminar del bucket
		  return new Response("Deleted!");
		default:
		  return new Response("Method Not Allowed", { status: 405 });
	  }
	},
  };
  