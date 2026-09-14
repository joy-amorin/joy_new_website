"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';

const SectionProjects = () => {
  const router = useRouter();

  const handleProjectClick = (path) => {
    router.push(path);
  };

  const projects = [
    {
      id: 1,
      title: "Cuántica",
      role: "Voz/Sintetizador",
      image: "/cuantica.jpg",
      path: "/projects/cuantica",
      color: "purple"
    },
    {
      id: 2,
      title: "El Asilo de la Bestia",
      role: "Teclado/Coros",
      image: "/el-asilo-banda.jpg",
      path: "/projects/el-asilo",
      color: "fuchsia"
    }
  ];

  return (
    <section id="projects" className="relative bg-background text-primary overflow-hidden py-20 px-6 md:px-12">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Mis Proyectos
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => handleProjectClick(project.path)}
            >              
              {/* Card Container */}
              <div className="relative bg-surface overflow-hidden">
                
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center border-2 border-border">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 ml-1 text-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 md:p-6">

                {/* Title */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-body mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-6 bg-gradient-to-r from-muted to-transparent"></div>
                    <p className="text-xs md:text-sm text-muted uppercase tracking-wider">
                      {project.role}
                    </p>
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-sm font-body uppercase tracking-wider text-muted group-hover:text-primary transition-colors duration-300">
                    <span>Ver Proyecto</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionProjects;