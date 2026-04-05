"use client";

import Image from "next/image";
import { useState } from "react";

const SectionCuntica = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    "/cuantica-fotos/fiesta-del-rio-1.jpg",
    "/cuantica-fotos/fiesta-del-rio-2.jpg",
    "/cuantica-fotos/goes-1.jpg",
    "/cuantica-fotos/sitarroza-2.jpg",
    "/cuantica-fotos/florencio-sanchez-2.jpg",
    "/cuantica-fotos/goes-3.jpg",
    "/cuantica-fotos/goes-2.jpg",
    "/cuantica-fotos/sitarroza-1.jpg",
    "/cuantica-fotos/goes-2.jpg",
  ];

  const handlePrev = () => {
    setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="cuantica" className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Foto + Texto */}
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-10">
          <div className="flex-shrink-0 mb-8 md:mb-0 mt-20">
            <Image
              src="/cuantica.jpg"
              alt="cuantica"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="text-center md:text-left md:w-auto">
            <h2 className="text-4xl font-body mb-4 mt-10">Cuántica</h2>
            <p className="mb-3">
              En 2017 fundé <em>Cuántica</em> junto al bajista Gastón Gómez, una banda de metal alternativo
              influenciada por grupos como Linkin Park, Papa Roach y Bring Me The Horizon. Me desempeñé
              como vocalista y fui una de las principales compositoras junto al guitarrista Germán Alcoba.
              La banda estuvo activa entre 2017 y 2020.
            </p>
            <p className="mb-3">
              En 2018 lanzamos el EP Plan Original, el cual presentamos en la Sala Zitarrosa como parte del ciclo
              Montevideo Capital de la Música Emergente, compartiendo escenario con bandas de distintos países
              latinoamericanos. También nos presentamos en varios escenarios de Montevideo en el marco de ese mismo
              programa.
            </p>
            <p className="mb-3">
              En 2019 participamos en la Fiesta del Río y la Convivencia junto a artistas como Pecho e' Fierro, y
              realizamos la presentación oficial del EP en el Teatro del Centro Cultural Goes, entre otras
              presentaciones destacadas. En 2020, tocamos en el Teatro del Centro Cultural Florencio Sánchez junto a
              Cadáveres Ilustres y otros artistas reconocidos.
            </p>
            <p>
              <em>Cuántica</em> fue un proyecto muy significativo para mí, tanto a nivel musical como conceptual.
              Le di ese nombre inspirada en la idea de los "saltos cuánticos" del libro <em>Los pájaros se
              orientan con la física cuántica</em>, de <em>Jorge Blaschke</em>, donde se explica cómo los electrones pueden
              cambiar de estado sin recorrer el espacio intermedio. Creíamos que, si hacíamos las cosas de "cierta
              manera", también nosotros podíamos dar esos saltos.
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

          <div className="flex gap-3 h-[450px]">
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

        {/* Spotify + YouTube */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400">Escucha y mira</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <iframe
              style={{ borderRadius: '12px' }}
              width="100%"
              height="352"
              src="https://open.spotify.com/embed/track/29a5qSI1PmUYGP4hz4WLQ3?utm_source=generator&theme=0"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              style={{ borderRadius: '12px' }}
              width="100%"
              height="352"
              src="https://www.youtube.com/embed/O2GGx8H9y1o?si=jAw19T88nCqiQtVy"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
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

          {/* Miniaturas */}
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

export default SectionCuntica;