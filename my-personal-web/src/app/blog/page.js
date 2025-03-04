"use client";

import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [entries, setEntries] = useState([]);
  const [assets, setAssets] = useState({});

  useEffect(() => {
    const fetchEntries = async () => {
      // Acceder a las variables de entorno
      const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
      const environmentId = "master";
      const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

      // Obtener las entradas del blog con Contentful
      const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`;
      const response = await fetch(url);
      const data = await response.json();

      // Mapeaar los assets en un objeto con su ID como clave
      const assetIds = data.items
        .map((entry) => entry.fields.blogImage?.sys?.id)
        .filter((id) => id); // Filtramos undefined o null

      if (assetIds.length > 0) {
        const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets?access_token=${accessToken}&sys.id[in]=${assetIds.join(",")}`;
        const assetResponse = await fetch(assetUrl);
        const assetData = await assetResponse.json();

        // Crear un mapa de assets con el ID del asset como clave
        const assetMap = assetData.items.reduce((acc, asset) => {
          acc[asset.sys.id] = asset.fields.file.url;
          return acc;
        }, {});

        setAssets(assetMap);
      }

      setEntries(data.items || []); // Guardar las entradas obtenidas en el estado
    };

    fetchEntries();
  }, []);

  return (
    <div className="bg-background text-foreground py-12 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">Entradas de Blog</h1>
      {entries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map((entry) => {
            const imageId = entry.fields.blogImage?.sys?.id;
            const imageUrl = assets[imageId] ? `https:${assets[imageId]}` : null;

            return (
              <div key={entry.sys.id} className="bg-background text-foreground p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-4">{entry.fields.blogTitle}</h2>

                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={entry.fields.blogImage?.fields?.title || "Imagen de blog"}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                ) : (
                  <p>No hay imagen disponible</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No hay entradas disponibles.</p>
      )}
    </div>
  );
};

export default BlogPage;
