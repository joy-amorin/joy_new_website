import Image from "next/image";

const SectionCuntica = () => {
  return (
    <section id="el-asilo" className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-10">
        {/* Foto a la izquierda */}
        <div className="cuantica-image flex-shrink-0 mb-8 md:mb-0 md:w-1/2 mt-20">
        <Image
            src="/el-asilo.png"
            alt="cuantica"
            width={500}
            height={500}
            className="rounded-lg object-cover"
        />
        </div>

    {/* Texto a la derecha */}
    <div className="text-center md:text-left md:w-1/2"> 
        <h2 className="text-4xl font-body mb-4 mt-10"> El asilo de la bestia</h2>
        <p>
            El Asilo de la Bestia es una banda de hard rock/metal fundada en 2020, 
            en la que me uní como tecladista en mayo de 2024. La misma cuenta con un EP
            y un álbum de estudio, <em>Despertar</em>, que fue nominado ese año a los premios
            Graffiti como mejor álbum de Metal y Hard Rock.
            </p>
            <p>
            En su trayectoria, ha tocado en festivales como Durazno Rock,
            Santa Rosa Rock y Ruedas, Expo Rock, entre otros,  compartiendo escenario
            con grupos destacados como NTVG, Buitres, La Triple Nelson, Rey Toro,
            Pecho e' Fierro, y Flema (Arg.), entre otros.
            </p>
            <p>
            Actualmente, estoy en el proceso de grabación del segundo disco de la banda y
            tocando en las presentaciones en vivo como tecladista oficial.
            </p>
        </div>
    </div>
    {/* Spotify Embed */}
    <div className="spotify-container mt-8">
            <h3 className="text-2xl mb-4">Escucha el disco Despertar en Spotify</h3>
            <div className="iframe-container-asilo">
              <iframe 
                style={{ borderRadius: '12px', width: '80%', height: '400px' }} 
                src="https://open.spotify.com/embed/album/3smBDwTFUY3LDbQO1aLDT0?utm_source=generator&theme=0" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
</section>

  
  );
};

export default SectionCuntica;
