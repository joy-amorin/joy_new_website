"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SectionElAsilo = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    "/el-asilo-fotos/moors-1.jpg",
    "/el-asilo-fotos/indio-fest.jpg",
    "/el-asilo-fotos/zitarrosa-2.jpg",
    "/el-asilo-fotos/santa-rosa-1.jpg",
    "/el-asilo-fotos/rara-avis.jpg",
    "/el-asilo-fotos/rara-avis-banda.jpg",
    "/el-asilo-fotos/moors-3.jpg",
    "/el-asilo-fotos/zitarrosa-1.jpg",
    "/el-asilo-fotos/santa-rosa-full-band.jpg",
    "/el-asilo-fotos/rara-avis-publico.jpg",
  ];

  const handlePrev = () => {
    setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhoto === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section id="el-asilo" className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Foto + Texto */}
        <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-10">
          <div className="flex-shrink-0 mb-8 lg:mb-0 mt-20 w-full lg:w-auto">
            <Image
              src="/el-asilo-banda.jpg"
              alt="el-asilo-banda"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full lg:w-[500px]"
            />
          </div>

          <div className="text-center lg:text-left w-full">
            <h2 className="text-4xl font-body mb-4 mt-6 lg:mt-10">El asilo de la bestia</h2>
            <p className="mb-3">
              El Asilo de la Bestia es una banda de hard rock/metal fundada en 2020,
              en la que me uní como tecladista en junio de 2024 y con la que continúo trabajando hasta la fecha.
              Cuenta con un EP titulado <em>Epidemia</em> y un álbum de estudio, <em>Despertar</em>,
              nominado en 2024 a los Premios Graffiti como Mejor Álbum de Metal y Hard Rock.
            </p>
            <p className="mb-3">
              En su trayectoria, ha tocado en festivales como Durazno Rock,
              Santa Rosa Rock y Ruedas, Expo Rock, entre otros, compartiendo escenario
              con grupos destacados como NTVG, Buitres, La Triple Nelson, Rey Toro,
              Pecho e' Fierro, y Flema (Arg.), entre otros.
            </p>
             <p className="mb-3">
              Junto a la banda, participé en la grabación del sencillo “Enemigos”, lanzado en agosto 
              de 2025 en colaboración con Alejandro Spuntone, el cual cuenta con videoclip oficial. 
              En octubre de 2025, realizamos una versión de “Marinero de Luces”, original de José Luis 
              Perales e interpretada por Isabel Pantoja, también acompañada de un video con estética 
              estilo “garage”.
            </p>
             <p className="mb-3">
              En noviembre de 2025 presentamos Rara Avis, un espectáculo en la sala Hugo Balzo del Auditorio 
              Nacional del Sodre, donde incorporamos instrumentos sinfónicos a la propuesta musical.
            </p>
            <p>
              Actualmente, nos encontramos en proceso de composición de nuevo material para un próximo disco, 
              con una presentación prevista en La Trastienda el 12 de noviembre de 2026.
            </p>
          </div>
        </div>

        {/* Galería */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400">Galería</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>

          {/* Móvil y tablet: grid simple */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {photos.slice(0, 6).map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedPhoto(index)}
              >
                <img
                  src={photo}
                  alt={`foto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Desktop: foto grande + grid 2x2 */}
          <div className="hidden lg:flex gap-3 h-[450px]">
            <div
              className="relative w-1/2 overflow-hidden rounded-lg group flex-shrink-0 cursor-pointer"
              onClick={() => setSelectedPhoto(0)}
            >
              <img
                src={photos[0]}
                alt="foto destacada 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
              {photos.slice(1, 5).map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => setSelectedPhoto(index + 1)}
                >
                  <img
                    src={photo}
                    alt={`foto destacada ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400">Escucha en Spotify</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/1gypBtZDCifC4YOmsGZuBw?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/74JWqVaHxALN8H6tuUHu5d?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* YouTube */}
        <div className="mt-12 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400">YouTube</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/6zqXlNTSwF4?si=jsJ9pHIGmqhLQLUy"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/VPpTo4X_jMs?si=nsmhccLRYePKlnno"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Imagen + botones laterales */}
          <div
            className="relative max-w-4xl w-full mx-4 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón anterior — siempre visible en móvil */}
            <button
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/70 border border-purple-500/70 text-purple-400 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 rounded-none"
              onClick={handlePrev}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Imagen */}
            <div className="relative flex-1">
              <img
                src={photos[selectedPhoto]}
                alt="foto ampliada"
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Contador */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-purple-400">
                {selectedPhoto + 1} / {photos.length}
              </div>

              {/* Botón cerrar */}
              <button
                className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-black/70 border border-purple-500/50 text-gray-400 hover:text-white hover:border-purple-400 transition-all duration-300 rounded-full"
                onClick={() => setSelectedPhoto(null)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Botón siguiente — siempre visible en móvil */}
            <button
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/70 border border-purple-500/70 text-purple-400 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 rounded-none"
              onClick={handleNext}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Miniaturas */}
          <div
            className="mt-6 flex gap-2 flex-wrap justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`w-12 h-12 overflow-hidden rounded cursor-pointer border-2 transition-all duration-300 ${
                  selectedPhoto === index ? 'border-purple-500' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
                onClick={() => setSelectedPhoto(index)}
              >
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionElAsilo;