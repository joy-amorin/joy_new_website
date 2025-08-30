"use client";

import Navbar from '../components/Navbar';
import NewsletterForm from '../components/NewsletterForm';
import { resources } from '@/data/resources';

const EbookLanding = () => {
  const ebook = resources[0]; // solo hay un recurso

  const handleEmailSubmit = () => {
    //  manejar el estado después de enviar el email si querés trackear algo
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
              src={ebook.image}
              alt={ebook.title}
              className="w-[320px] h-[400px] object-contain rounded-xl shadow-md"
            />

            <div className="flex-1 max-w-xl">
              <p className="mb-4">
                ¿Estás aprendiendo música por tu cuenta y no sabes si vas por buen camino?
                Sentís que avanzás, pero a veces te perdés, te llenás de info o no sabés en qué enfocarte
              </p>

              <p>
                Esta guía rápida te ayuda a organizar tu proceso, basándote en lo que vos necesitás, 
                con lo que ya tenés y al ritmo que puedas.
              </p>

              <ul className="list-disc pl-5 mb-4 mt-4">
                <li>Cómo tomar decisiones que den sentido a tu aprendizaje</li>
                <li>Interpretar canciones desde lo esencial</li>
                <li>Usar tus recursos con criterio y creatividad</li>
                <li>Sostener el proceso sin frustrarte</li>
              </ul>

              <p className="mb-6">📥 Deja tu mail y descarga el PDF gratuito:</p>

              <NewsletterForm onSubmit={handleEmailSubmit} downloadUrl={ebook.resourse} />
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
};

export default EbookLanding;
