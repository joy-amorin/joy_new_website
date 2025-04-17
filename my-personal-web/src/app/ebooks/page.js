"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const EbookPage = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await fetch('https://web-resources.joy-resources.workers.dev/ebooks');

        if (!response.ok) {
          throw new Error(`Error fetching eBooks: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched eBooks:", data);

        const filteredEbooks = data.filter(ebook => ebook.name.endsWith('.pdf'));

        const ebooksWithImage = filteredEbooks.map(ebook => {
          const imageUrl = ebook.name.replace('.pdf', '.jpg');
          return {
            ...ebook,
            imageUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${imageUrl}`,
            downloadUrl: `https://web-resources.joy-resources.workers.dev/ebooks/${ebook.name}`
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
        <h1 className="text-center text-4xl font-body mt-10 mb-8">Tus e-books gratuitos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 place-items-center">
          {ebooks.map((ebook, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Tarjeta */}
              <div className="border rounded-lg p-3 bg-background shadow-md flex flex-col items-center w-[200px] h-[300px]">
                <img
                  src={ebook.imageUrl}
                  alt={ebook.name}
                  className="w-full h-[75%] object-cover mx-auto mb-3"
                  onError={(e) => {
                    e.target.src = '/path/to/default-image.jpg';
                    console.error(`Error loading image for ${ebook.name}`);
                  }}
                />
                <h3 className="text-sm font-body text-center text-foreground mb-2 break-words">
                  {ebook.name.replace('.pdf', '').replace(/-/g, ' ')}
                </h3>
              </div>

              <a
                href={ebook.downloadUrl}
                className="mt-3 inline-block text-white bg-primary py-1 px-3 rounded-lg hover:bg-purple-700 transition text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar eBook
              </a>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default EbookPage;
