"use client"

import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [entries, setEntries] = useState([]);
  const [assets, setAssets] = useState({});

  useEffect(() => {
    const fetchEntries = async () => {
      const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
      const environmentId = "master";
      const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

      const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`;
      const response = await fetch(url);
      const data = await response.json();

      const assetIds = data.items
        .map((entry) => entry.fields.blogImage?.sys?.id)
        .filter((id) => id);

      if (assetIds.length > 0) {
        const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets?access_token=${accessToken}&sys.id[in]=${assetIds.join(",")}`;
        const assetResponse = await fetch(assetUrl);
        const assetData = await assetResponse.json();

        const assetMap = assetData.items.reduce((acc, asset) => {
          acc[asset.sys.id] = asset.fields.file.url;
          return acc;
        }, {});

        setAssets(assetMap);
      }

      setEntries(data.items || []);
    };

    fetchEntries();
  }, []);

  const handleBlogClick = (entryId) => {
    // Navegación que será manejada por Next.js en tu código real
    window.location.href = `/blog/${entryId}`;
  };

  return (
    <section id="blog" className="relative bg-black text-white overflow-hidden py-20 px-6 md:px-12">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400">Artículos</span>
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        {entries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {entries.map((entry, index) => {
              const imageId = entry.fields.blogImage?.sys?.id;
              const imageUrl = assets[imageId] ? `https:${assets[imageId]}` : null;

              return (
                <div
                  key={entry.sys.id}
                  className="group relative cursor-pointer"
                  onClick={() => handleBlogClick(entry.sys.id)}
                >
                  {/* Decorative Frame */}
                  <div className="absolute -inset-2 border-l border-t border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300"></div>
                  <div className="absolute -inset-2 border-r border-b border-fuchsia-500/20 group-hover:border-fuchsia-500/40 translate-x-2 translate-y-2 transition-all duration-300"></div>
                  
                  {/* Card Container */}
                  <div className="relative bg-gray-900/50 overflow-hidden h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {imageUrl ? (
                        <>
                          <img
                            src={imageUrl}
                            alt={entry.fields.blogImage?.fields?.title || "Imagen de blog"}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                          
                          {/* Corner Accents */}
                          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Read Icon Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-purple-600/90 backdrop-blur-sm flex items-center justify-center border-2 border-purple-400/50">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <p className="text-gray-500 text-sm">Sin imagen</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative p-4 md:p-5 flex-1 flex flex-col">
                      
                      {/* Entry Number */}
                      <div className="absolute top-0 right-0 -translate-y-1/2 bg-black border-2 border-purple-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Title */}
                      <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 flex-1">
                        {entry.fields.blogTitle}
                      </h3>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500 group-hover:text-purple-400 transition-colors duration-300 mt-auto">
                        <span>Leer más</span>
                        <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 text-gray-500">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <p className="text-base md:text-lg">Cargando artículos...</p>
            </div>
          </div>
        )}

        {/* Bottom Note */}
        {entries.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm md:text-base">
              {entries.length} {entries.length === 1 ? 'artículo publicado' : 'artículos publicados'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;