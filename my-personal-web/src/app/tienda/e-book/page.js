"use client"

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import CheckoutButton from "@/app/components/CheckoutButton";
import Link from "next/link";

export default function EbookPage() {
  const [preferenceId, setPreferenceId] = useState(null);
  const slug = "e-book"; // slug del producto que estás mostrando

  useEffect(() => {
    const createPreference = async () => {
      try {
        const res = await fetch("/api/create-preference", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });

        const data = await res.json();
        setPreferenceId(data.preferenceId);

      } catch (error) {
        console.error("Error al generar la preferencia:", error);
      }
    };

    createPreference();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32 mt-10">
        {/* Headline principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-body text-foreground mb-4">
            ¿Te perdés en tu aprendizaje musical y no sabés si vas por buen camino?
          </h1>
          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-body text-foreground mb-2">Aprendizaje Musical Funcional</h2>
            <p className="text-lg text-foreground/80 italic">Guía para Autodidactas</p>
          </div>
        </div>

        {/* Sección imagen + descripción inicial */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
          <div className="flex-shrink-0">
            <img
              src="/ebook-mockup.png"
              alt="Mockup del ebook Aprendizaje musical"
              className="max-w-xs w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>

          <div className="font-body text-foreground">
            <div className="mb-8">
              <p className="mb-4">
                Aprender música por tu cuenta puede ser emocionante… pero también confuso sin
                una dirección clara entre tanto contenido disponible.
              </p>
              <p className="mb-4">
                Esta guía práctica está pensada tanto para principiantes como para quienes ya 
                tienen experiencia, pero quieren optimizar su estudio y avanzar con más foco.
              </p>
              <p className="mb-4">
                Con propuestas claras y herramientas funcionales, vas a poder tomar decisiones 
                conscientes y avanzar con sentido desde donde estás.
              </p>
            </div>

            {/* Precio y CTA */}
            <div className="pt-6">
              <p className="text-2xl font-body text-foreground mb-4">$9.99 USD</p>
              {preferenceId ? (
                <CheckoutButton preferenceId={preferenceId} />
              ) : (
                <button
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg font-body w-full md:w-auto"
                  disabled
                >
                  Generando botón...
                </button>
              )}
            </div>
          </div>
        </div>

        {/* contenido centrado - ancho completo */}
        <div className="max-w-4xl mx-auto">
          {/* Beneficios detallados */}
          <div className="mb-16">
            <h3 className="text-2xl font-body mb-8 text-center">✅ Lo que encontrarás dentro:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-foreground/5 rounded-xl p-6">
                <h4 className="font-body text-lg mb-3 flex items-center gap-2">📋 <span>Planificador Personalizado</span></h4>
                <p>Herramientas para definir tus objetivos y diseñar un plan realista y flexible según tu ritmo</p>
              </div>
              <div className="bg-foreground/5 rounded-xl p-6">
                <h4 className="font-body text-lg mb-3 flex items-center gap-2">🎯 <span>Guía de Enfoque Práctico</span></h4>
                <p>Criterios claros para abordar canciones y organizar prácticas efectivas sin dispersarte</p>
              </div>
              <div className="bg-foreground/5 rounded-xl p-6">
                <h4 className="font-body text-lg mb-3 flex items-center gap-2">🧠 <span>Recursos y Estrategias</span></h4>
                <p>Sugerencias para aprovechar tu tiempo, usar canciones como material y sacar provecho a la tecnología</p>
              </div>
              <div className="bg-foreground/5 rounded-xl p-6">
                <h4 className="font-body text-lg mb-3 flex items-center gap-2">💪 <span>Herramientas para el Proceso</span></h4>
                <p>Consejos para mantener hábitos sostenibles, reconocer avances y construir una relación positiva con tu proceso</p>
              </div>
            </div>
          </div>

          {/* Sección de calificación */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-body mb-6 text-center">Este e-book es para vos si:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3"><span className="text-green-600 font-body text-xl">✓</span><span>Aprendés música por tu cuenta</span></div>
              <div className="flex items-center gap-3"><span className="text-green-600 font-body text-xl">✓</span><span>Te sentís perdido/a entre tanta información</span></div>
              <div className="flex items-center gap-3"><span className="text-green-600 font-body text-xl">✓</span><span>Querés un método que se adapte a tu ritmo</span></div>
              <div className="flex items-center gap-3"><span className="text-green-600 font-body text-xl">✓</span><span>Necesitás organizar tu proceso de aprendizaje</span></div>
            </div>
          </div>

          {/* CTA central */}
          <div className="text-center mb-16">
            <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-3xl font-body text-foreground mb-6">$9.99 USD</p>
              {preferenceId ? (
                <CheckoutButton preferenceId={preferenceId} />
              ) : (
                <button
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg font-body w-full md:w-auto"
                  disabled
                >
                  Generando botón...
                </button>
              )}
            </div>
          </div>

          {/* Mención del workbook */}
          <div className="bg-gradient-to-r from-foreground/5 to-transparent border-l-4 border-primary rounded-r-xl p-8 mb-12">
            <h3 className="text-xl font-body mb-3">¿Querés llevar tu aprendizaje un paso más allá?</h3>
            <p className="text-foreground/90 mb-4">
              Si querés poner en práctica lo aprendido, también está disponible un <strong>Workbook con ejercicios específicos</strong> que complementan esta guía.
            </p>
            <Link href="/tienda/workbook" className="text-primary hover:underline font-medium text-lg">Conocé el Workbook aquí →</Link>
          </div>

          {/* P.S. final */}
          <div className="text-center bg-foreground/5 rounded-xl p-6">
            <p className="text-foreground/80 italic text-lg">
              Con un plan realista y funcional, podés tomar decisiones claras y construir una práctica musical alineada con tus objetivos.
            </p>
          </div>

        </div>
      </main>
      <Navbar />
    </>
  );
}
