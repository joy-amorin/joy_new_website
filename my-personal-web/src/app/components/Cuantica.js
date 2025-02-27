import Image from "next/image";

const SectionCuntica = () => {
  return (
    <section id="cuantica" className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-10">
        {/* Foto a la izquierda */}
        <div className="cuantica-image flex-shrink-0 mb-8 md:mb-0 md:w-1/2 mt-20">
        <Image
            src="/cuantica.jpg"
            alt="cuantica"
            width={500}
            height={500}
            className="rounded-lg object-cover"
        />
        </div>

    {/* Texto a la derecha */}
    <div className="text-center md:text-left md:w-1/2"> 
        <h2 className="text-4xl font-body mb-4 mt-10"> Cuántica</h2>
        <p>
            En 2017, fundé Cuántica junto al bajista Gastón Gómez, una banda de metal alternativo 
            influenciada por grupos como Linkin Park, Papa Roach y Bring Me The Horizon, 
            en la que fui vocalista y una de las principales compositoras junto al guitarrista 
            Germán Alcoba. En 2018, lanzamos el EP <em>Plan Original</em>, presentándonos en la 
            Sala Zitarrosa como parte de Montevideo Capital de la Música Emergente, donde 
            compartimos escenario con otras bandas latinoamericanas, 
            y tocamos en varios escenarios de Montevideo dentro de ese mismo marco.
            En 2019, participamos en la Fiesta del Río y la Convivencia junto a artistas como 
            Pecho e’ Fierro, y realizamos la presentación oficial del EP en el Teatro del 
            Centro Cultural Goes, entre otras presentaciones destacadas. 
            En 2020, nos presentamos en el Teatro del Centro Cultural Florencio Sánchez, 
            compartiendo escenario con Cadáveres Ilustres y otros artistas reconocidos.
            </p>
            <p>
            Actualmente estoy trabajando en un proyecto solista, versionando canciones que compuse para Cuántica y
            que formaban parte de nuestro repertorio en vivo.
            </p>
        </div>
    </div>
    {/* Iframes debajo del texto */}
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
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
</section>

  
  );
};

export default SectionCuntica;
