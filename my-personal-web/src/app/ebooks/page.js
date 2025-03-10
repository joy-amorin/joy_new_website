"use client"

import React, { useEffect, useState } from 'react';

function Ebooks() {
    const [ebooks, setEbooks] = useState([]);

    useEffect(() => {
        const fetchEbooks = async () => {
            try {
                const response = await fetch('https://web-resources.joy-resources.workers.dev/ebooks');
                if (!response.ok) {
                    throw new Error('Error al obtener los e-books');
                }

                const data = await response.json(); // recibir el json con los nombres y las URLs de descarga
                setEbooks(data);
            } catch (error) {
                console.error('Error', error);
            }
        };
        fetchEbooks();
    }, []);

    return (
        <div>
            <h1>E-books disponibles</h1>
            <ul>
                {ebooks.map((ebook, index) => (
                    <li key={index}>
                        {/* acceder a las propiedades del objeto */}
                        <a href={ebook.downloadUrl} target="_blank" rel="noopener noreferrer">
                            Descargar {ebook.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ebooks;
