"use client"

import { usePathname } from 'next/navigation';
import Cuantica from '../../components/Cuantica';
import ElAsilo from '../../components/ElAsilo';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
  const pathname = usePathname();
  const [ProjectComponent, setProjectComponent] = useState(null);

  useEffect(() => {
    const projectName = pathname.split('/').pop(); // Obtener el nombre del proyecto desde la URL

    if (projectName === 'cuantica') {
      setProjectComponent(() => Cuantica);
    } else if (projectName === 'el-asilo') {
      setProjectComponent(() => ElAsilo);
    } else {
      setProjectComponent(() => () => <p>Proyecto no encontrado</p>);
    }
  }, [pathname]);

  if (!ProjectComponent) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <ProjectComponent />
      <Navbar />
    </div>
  );
};

export default ProjectPage;
