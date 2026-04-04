"use client";

import Image from "next/image";
import { useState } from "react";

const SectionElAsilo = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  ];

  const handlePrev = () => {
    setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="el-asilo" className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Foto + Texto */}
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-10">
          <div className="flex-shrink-0 mb-8 md:mb-0 mt-20">
            <Image
              src="/el-asilo-banda.jpg"
              alt="el-asilo-banda"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="text-center md:text-left md:w-auto">
            <h2 className="text-4xl font-body mb-4 mt-10">El asilo de la bestia</h2>
            <p className="mb-3">
              El Asilo de la Bestia es una banda de hard rock/metal fundada en 2020,
              en la que me uní como tecladista en mayo de 2024 y con la que continúo trabajando hasta la fecha.
              Cuenta con un EP titulado <em>Epidemia</em> y un álbum de estudio, <em>Despertar</em>,
              nominado en 2024 a los Premios Graffiti como Mejor Álbum de Metal y Hard Rock.
            </p>
            <p className="mb-3">
              En su trayectoria, ha tocado en festivales como Durazno Rock,
              Santa Rosa Rock y Ruedas, Expo Rock, entre otros, compartiendo escenario
              con grupos destacados como NTVG, Buitres, La Triple Nelson, Rey Toro,
              Pecho e' Fierro, y Flema (Arg.), entre otros.
            </p>
            <p>
              Actualmente, estoy en el proceso de grabación del segundo disco de la banda y
              tocando en las presentaciones en vivo como tecladista oficial.
            </p>
          </div>
        </div>

        {/* Fotos destacadas */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400">Fotos destacadas</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>

          <div className="flex gap-3 h-72">
            {/* Foto grande */}
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

            {/* Grid 2x2 */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
              {photos.slice(1).map((photo, index) => (
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
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400">Videos en vivo</span>
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Imagen */}
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhoto]}
              alt="foto ampliada"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Contador */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-purple-400">
              {selectedPhoto + 1} / {photos.length}
            </div>

            {/* Botón anterior */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center border border-purple-500/50 text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 rounded"
              onClick={handlePrev}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Botón siguiente */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center border border-purple-500/50 text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 rounded"
              onClick={handleNext}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Botón cerrar */}
            <button
              className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Miniaturas abajo */}
          <div className="absolute bottom-6 flex gap-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`w-14 h-14 overflow-hidden rounded cursor-pointer border-2 transition-all duration-300 ${
                  selectedPhoto === index ? 'border-purple-500' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
                onClick={(e) => { e.stopPropagation(); setSelectedPhoto(index); }}
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