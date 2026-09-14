"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const SectionInicio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen inset-0 bg-background text-white overflow-hidden flex items-center pt-24 md:pt-28 xl:pt-32 2xl:pt-0">
      
      {/* Elementos de fondo flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculo grande difuminado */}
        <div 
          className="absolute top-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        />
      </div>

      {/* Contenido principal - Layout Split Central */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        
        {/* Contenedor flex centrado */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          
          {/* Foto - Cuadrada con marco */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]">
              
              {/* Contenedor de imagen con halo tecnológico */}
              <div
                className="relative w-full h-full overflow-hidden border-2 border-white/10"
                
              >
                <Image
                  src="/home-fotos/hero-photo.png"
                  alt="Joy Amorin"
                  fill
                  className="object-cover"
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
                  }}
                  priority
                />
              </div>
             
            </div>
          </div>

          {/* Texto - Centrado */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8 order-2 lg:order-1">
            
            {/* Nombre */}
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-logo font-black tracking-[-0.02em] leading-none">
                JOY
              </h1>
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-logo font-black tracking-[-0.02em] leading-none">
                AMORIN
              </h2>
            </div>

            {/* Descripción con palabras clave resaltadas */}
                <p className="text-xs md:text-sm text-foreground uppercase tracking-[0.3em]">
                  Música • Producción • Creadora digital
                </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInicio;
