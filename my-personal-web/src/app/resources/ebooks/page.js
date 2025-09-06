"use client";

import Navbar from '../../components/Navbar';
import NewsletterForm from '@/app/components/NewsletterForm';
import { resources } from '@/data/resources';

const EbookLanding = () => {

  const ebook = {
    title: "Mini guía de práctica musical",
    image: "/images/mini-guia-de-practica-musical.jpg", 
    description: "Tu sistema de objetivos claros para organizar tu práctica musical y avanzar de forma efectiva. Incluye un pequeño planificador semanal.",
    resource: "/pdfs/mini-guia-de-practica-musical.pdf" 
  };

  const handleEmailSubmit = () => {

    //  manejar el estado después de enviar el email

  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32">
        <h1 className="text-center text-4xl font-body mt-10 mb-4">Mini guía de prácticamusical</h1>
        <p className="text-center text-lg mb-10 italic text-muted-foreground">
          Tu sistema de objetivos claros
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

                ¿Estás aprendiendo música por tu cuenta pero no sabés en qué enfocarte?
                Esta mini guía te ofrece herramientas prácticas para organizar tu práctica 
                y avanzar de forma clara y efectiva, incluyendo un pequeño planificador 
                semanal para que planifiques tus sesiones.
              </p>


              <ul className="list-disc pl-5 mb-4 mt-4">
                <li>Cómo definir objetivos simples y claros para tu práctica</li>
                <li>Convertir tus ganas de tocar en un plan de acción concreto</li>
                <li>Trabajar paso a paso con micro-objetivos semanales</li>
                <li>Identificar obstáculos comunes y celebrar cada pequeño logro</li>
              </ul>

              <p className="mb-6">📥 Deja tu mail y descarga el PDF gratuito:</p>

              <NewsletterForm onSubmit={handleEmailSubmit} downloadUrl={ebook.resource} />
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
};

export default EbookLanding;
