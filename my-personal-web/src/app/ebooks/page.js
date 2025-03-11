"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const EbookPage = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await fetch('https://web-resources.joy-resources.workers.dev/ebooks');  // ruta completa al worker

        if (!response.ok) {
          throw new Error(`Error fetching eBooks: ${response.statusText}`);
        }

        const data = await response.json();

        console.log("Fetched eBooks:", data); // verificar los datos recibidos
        
        // filtrar solo los archivos PDF
        const filteredEbooks = data.filter(ebook => ebook.name.endsWith('.pdf'));

        // asociar cada PDF con su imagen correspondiente
        const ebooksWithImage = filteredEbooks.map(ebook => {
          const imageUrl = ebook.name.replace('.pdf', '.jpg');  // cambiar la extensión para asociar la imagen
          return {
            ...ebook,
            imageUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${imageUrl}`,
          };
        });

        setEbooks(ebooksWithImage);
      } catch (error) {
        console.error("Error fetching eBooks:", error);
      }
    };

    fetchEbooks();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {ebooks.map((ebook, index) => (
          <div key={index} className="border rounded-lg p-4 bg-background shadow-md">
            <img
              src={ebook.imageUrl}
              alt={ebook.name}
              className="w-full mb-4 h-40 object-cover rounded-lg"
              onError={(e) => { 
                e.target.src = '/path/to/default-image.jpg'; // imagen por defecto si hay error
                console.error(`Error loading image for ${ebook.name}`);
              }}
            />
            <h3 className="text-xl font-body text-center text-foreground">{ebook.name}</h3>

            {/* enlace para descargar el eBook */}
            <div className="mt-4 text-center">
              <a
                href={ebook.downloadUrl}
                className="inline-block text-white bg-primary py-2 px-4 rounded-lg hover:bg-purple-700 transition"
                target="_blank"
                rel="noopener noreferrer"
                >
                Descargar eBook
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Navbar />
    </>
  );
};

export default EbookPage;
