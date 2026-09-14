const SectionAbout = () => {
  return (
    <section id="about" className="relative min-h-screen bg-background text-white overflow-hidden py-20 px-6 md:px-12">
      
      {/* Background Elements */}
      <div className="absolute inset-0  "></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 lg:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Investigar y crear
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
                            
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-900">
                <img
                  src="/joy-about.jpg"
                  alt="Joy Amorin"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>

            {/* Quote or Highlight */}
            
              <p className="text-lg mt-2 md:text-xl font-light italic text-primary">
                "Investigar y crear no solo define mi relación con la música,
                <br />
                 sino también con la vida misma."
              </p>
            
          </div>

          {/* Text Section */}
          <div className="space-y-6 order-1 lg:order-2">
            
            {/* Paragraph 1 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Investigar y crear siempre ha sido mi forma de conectar con la música. Comencé en la adolescencia como 
                autodidacta, tocando instrumentos como la guitarra y la batería. Después de tomar algunas clases por un tiempo, 
                decidí seguir estudiando por mi cuenta, interesándome en el teclado y la grabación y creación de mi propia música.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Esto me llevó a explorar programas de producción (DAWs) y adentrarme en el mundo de los instrumentos virtuales.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Mi curiosidad por la tecnología también me abrió las puertas al mundo de la programación, lo que derivó 
                en el desarrollo de esta página. Aquí comparto mis proyectos musicales, además de recursos y herramientas 
                que utilizo tras investigar y experimentar lo que me ha sido útil.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                No son <span className="italic">"guías definitivas"</span>, sino aportes basados en lo que he aprendido y me ha funcionado, 
                y que tal vez puedan ser de ayuda para alguien más.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;