const SectionAbout = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6 md:px-12">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400">Sobre mí</span>
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight">
            Investigar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">y Crear</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border-l border-t border-purple-500/20"></div>
              <div className="absolute -inset-3 border-r border-b border-fuchsia-500/20 translate-x-3 translate-y-3"></div>
              
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-900">
                <img
                  src="/joy-about.jpg"
                  alt="Joy Amorin"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-500"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-fuchsia-500"></div>
              </div>
            </div>

            {/* Quote or Highlight */}
            <div className="mt-8 p-6 border-l-4 border-purple-500 bg-purple-500/5">
              <p className="text-lg md:text-xl font-light italic text-gray-300">
                "Investigar y crear no solo define mi relación con la música, sino también con la vida misma."
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6 order-1 lg:order-2">
            
            {/* Paragraph 1 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Investigar y crear siempre ha sido mi forma de conectar con la música. Comencé en la adolescencia como 
                autodidacta, tocando instrumentos como la <span className="text-purple-400 font-semibold">guitarra</span> y la <span className="text-purple-400 font-semibold">batería</span>. Después de tomar algunas clases por un tiempo, 
                decidí seguir estudiando por mi cuenta, interesándome en el teclado y la grabación y creación de mi propia música.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Esto me llevó a explorar programas de producción (DAWs) y adentrarme en el mundo de los instrumentos virtuales.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Mi curiosidad por la <span className="text-fuchsia-400 font-semibold">tecnología</span> también me abrió las puertas al mundo de la programación, lo que derivó 
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