"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';

const SectionProjects = () => {
  const router = useRouter();

  const handleProjectClick = (path) => {
    router.push(path); // Redirige a la página de detalles del proyecto
  };

  return (
    <section id="projects" className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-4xl font-body mb-12 text-center mt-10">Mis proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Proyecto 1 */}
        <div className="project-card cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => handleProjectClick('/project1')}>
          <Image
            src="/cuantica.jpg"
            alt="Proyecto 1"
            width={400}
            height={300}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-2xl font-body mb-2"> Cuántica</h3>
          <p className="text-base leading-relaxed">
            Voz/sintetizador
          </p>
        </div>

        {/* Proyecto 2 */}
        <div className="project-card cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => handleProjectClick('/project2')}>
          <Image
            src="/el-asilo.png"
            alt="Proyecto 2"
            width={400}
            height={300}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-2xl font-body mb-2">El asilo de la bestia</h3>
          <p className="text-base leading-relaxed">
            Teclado/coros
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
