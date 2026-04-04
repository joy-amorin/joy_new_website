"use client";

import Navbar from '../../components/layout/Navbar';
import NewsletterForm from '@/app/components/layout/NewsletterForm';
import { resources } from '@/data/resources';

const EbookLanding = () => {

  const ebook = {
    title: "Mini guía de práctica musical",
    image: "/images/mini-guia-de-practica-musical.jpg", 
    description: "Tu sistema de objetivos claros para organizar tu práctica musical y avanzar de forma efectiva. Incluye un pequeño planificador semanal.",
    resource: "/pdfs/mini-guia-de-practica-musical.pdf" 
  };

  const handleEmailSubmit = () => {
    // manejar el estado después de enviar el email
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto"> {/* 👈 mismo cambio */}
          <h1 className="text-center text-4xl font-body mt-10 mb-4">Mini guía de práctica musical</h1>
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
                  ¿Estás aprendiendo música por tu cuenta pero no sabes en qué enfocarte?
                  Esta mini guía te ofrece herramientas prácticas para organizarte.
                </p>

                <ul className="list-disc pl-5 mb-4 mt-4">
                  <li>Cómo definir objetivos simples y claros para tu práctica</li>
                  <li>Convertir tus ganas de tocar en un plan de acción concreto</li>
                  <li>Trabajar paso a paso con micro-objetivos semanales</li>
                </ul>

                <p className="mb-6">📥 Deja tu mail y descarga el PDF gratuito:</p>

                <NewsletterForm onSubmit={handleEmailSubmit} downloadUrl={ebook.resource} />
              </div>
            </div>
          )}

          <div className="p-6 space-y-12">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-8">
              <p className="text-center text-xl text-foreground/90 mb-6 leading-relaxed">
                Si quieres profundizar estas técnicas, accede a la práctica avanzada con el 
                <span className="font-semibold text-primary"> E-book completo y/o el cuaderno de trabajo</span>
              </p>
              <div className="text-center">
                <a
                  href="/tienda"
                  className="text-foreground font-body text-xl underline decoration-2 hover:decoration-primary-dark transition-all"
                >
                  Acceder a la práctica avanzada
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default EbookLanding;