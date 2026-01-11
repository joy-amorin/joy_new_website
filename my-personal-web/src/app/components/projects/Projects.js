"use client"

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
    <section id="projects" className="relative bg-black text-white overflow-hidden py-20 px-6 md:px-12">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400">Proyectos</span>
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Proyectos</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => handleProjectClick(project.path)}
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border-l border-t border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300"></div>
              <div className="absolute -inset-3 border-r border-b border-fuchsia-500/20 group-hover:border-fuchsia-500/40 translate-x-3 translate-y-3 transition-all duration-300"></div>
              
              {/* Card Container */}
              <div className="relative bg-gray-900/50 overflow-hidden">
                
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Corner Accents */}
                  <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 ${project.color === 'purple' ? 'border-purple-500' : 'border-fuchsia-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 ${project.color === 'purple' ? 'border-purple-500' : 'border-fuchsia-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-600/90 backdrop-blur-sm flex items-center justify-center border-2 border-purple-400/50">
                      <svg className="w-5 h-5 md:w-6 md:h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 md:p-6">
                  
                  {/* Project Number */}
                  <div className="absolute top-0 right-0 -translate-y-1/2 bg-black border-2 border-purple-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-bold mb-2 group-hover:${project.color === 'purple' ? 'text-purple-400' : 'text-fuchsia-400'} transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-px w-6 bg-gradient-to-r ${project.color === 'purple' ? 'from-purple-500' : 'from-fuchsia-500'} to-transparent`}></div>
                    <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                      {project.role}
                    </p>
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                    <span>Ver Proyecto</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm md:text-base">
            Más proyectos próximamente...
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;