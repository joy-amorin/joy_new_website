
import Image from "next/image";

const SectionAbout = () => {
  return (
    <section id="about" className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8 lg:px-16">
  <div className="flex flex-col md:flex-row items-start justify-between md:gap-6">
    {/* Foto a la izquierda */}
    <div className="about-image flex-shrink-0 mb-8 md:mb-0 md:w-1/2 mt-20">
      <Image
        src="/joy-about.jpg"
        alt="Sobre mí"
        width={500}
        height={500}
        className="rounded-lg object-cover"
      />
    </div>

    {/* Texto a la derecha */}
    <div className="text-center md:text-left md:w-1/2"> 
        <h2 className="text-4xl font-body mb-4 mt-10">Investigar y crear</h2>
        <p className="text-base md:text-lg leading-relaxed">
            Investigar y crear siempre ha sido mi forma de conectar con la música. Comencé en la adolescencia como 
            autodidacta, tocando instrumentos como la guitarra y la batería. Después de tomar clases, decidí seguir 
            estudiando por mi cuenta, interesándome en la grabación y creación de mi propia música. Esto me llevó a 
            explorar programas de producción (DAWs) y adentrarme en el mundo de los instrumentos virtuales.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
            Mi curiosidad por la tecnología también me abrió las puertas al mundo de la programación, lo que derivó 
            en el desarrollo de esta página. Aquí comparto mis proyectos musicales, además de recursos y herramientas 
            que utilizo tras investigar y experimentar lo que me ha sido útil. No son "guías definitivas", sino aportes 
            basados en lo que he aprendido y me ha funcionado, y que tal vez puedan ser de ayuda para alguien más.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
            He descubierto que "investigar y crear" no solo define mi relación con la música, sino también con 
            la vida misma.
        </p>
        </div>
    </div>
</section>

  
  );
};

export default SectionAbout;
