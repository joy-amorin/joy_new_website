"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NewsletterForm from '../components/NewsletterForm';

const EbookLanding = () => {
  const [ebook, setEbook] = useState(null);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await fetch('https://web-resources.joy-resources.workers.dev/ebooks');
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        const filtered = data.filter(e => e.name.endsWith('.pdf'));
        if (filtered.length > 0) {
          const first = filtered[0];
          setEbook({
            title: first.name.replace('.pdf', '').replace(/-/g, ' '),
            imageUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${first.name.replace('.pdf', '.jpg')}`,
            downloadUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${first.name}`
          });
        }
      } catch (error) {
        console.error("Error fetching eBook:", error);
      }
    };

    fetchEbooks();
  }, []);

  const handleEmailSubmit = () => {
    // Esta función ahora maneja el estado después de que el email es enviado, pero no es necesaria para la descarga directa
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32">
        <h1 className="text-center text-4xl font-body mt-10 mb-4">Aprendizaje Musical Funcional</h1>
        <p className="text-center text-lg mb-10 italic text-muted-foreground">
          Guía práctica para autodidactas
        </p>

        {ebook && (
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={ebook.imageUrl}
              alt={ebook.title}
              className="w-[320px] h-[400px] object-cover rounded-xl shadow-md"
            />

            <div className="flex-1 max-w-xl">
              <p className="mb-4">
              ¿Estás aprendiendo música por tu cuenta y no sabes si vas por buen camino?
              Sentís que avanzás, pero a veces te perdés, te llenás de info o no sabés en qué enfocarte
              </p>

              <p>
              Este e-book te ayuda a organizar tu proceso, basándote en lo que vos necesitás, 
              con lo que ya tenés y al ritmo que puedas.
              </p>

              <ul className="list-disc pl-5 mb-4 mt-4">
                <li>Cómo tomar decisiones que den sentido a tu aprendizaje</li>
                <li>Interpretar canciones desde lo esencial</li>
                <li>Usar tus recursos con criterio y creatividad</li>
                <li> Sostener el proceso sin frustrarte</li>
              </ul>

              <p className="mb-6">📥 Deja tu mail y descarga el PDF gratuito:</p>

              {/* Mostrar el formulario */}
              <NewsletterForm onSubmit={handleEmailSubmit} downloadUrl={ebook.downloadUrl} />
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
};

export default EbookLanding;
