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

  return (
    <>
      <div className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32">
        <h1 className="text-center text-4xl font-body mt-10 mb-4">Aprendizaje Funcional</h1>
        <p className="text-center text-lg mb-10 italic text-muted-foreground">
          Guía para autodidactas creativos
        </p>

        {ebook && (
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={ebook.imageUrl}
              alt={ebook.title}
              className="w-[300px] h-[400px] object-cover rounded-xl shadow-md"
            />

            <div className="flex-1 max-w-xl">
              <p className="mb-4">
                ¿Sos autodidacta y sentís que aprendés a medias, que te cuesta avanzar o que te dispersás fácilmente?
                Esta guía te ofrece un método claro y funcional para estructurar tu aprendizaje de forma creativa, realista y sostenible.
              </p>

              <ul className="list-disc pl-5 mb-4">
                <li>Cómo organizar tu aprendizaje sin rigidez</li>
                <li>Aplicar lo que aprendés y no olvidarlo</li>
                <li>Sostener tu motivación y avanzar con foco</li>
              </ul>

              <p className="mb-6">📥 Dejá tu mail para recibir el PDF gratuito:</p>

              <a
                href={ebook.downloadUrl}
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar Guía
              </a>
            </div>
          </div>
        )}
      </div>
      <NewsletterForm />
      <Navbar />

    </>
    
  );
};

export default EbookLanding;
