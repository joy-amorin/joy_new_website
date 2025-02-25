"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú y realiza el desplazamiento
  const handleNavClick = (id) => {
    setIsOpen(false); // Cierra el menú
    setTimeout(() => {
      window.location.hash = id; // Cambia la URL y hace el desplazamiento
    }, 300); // Pequeño retraso para que el menú se cierre antes
  };

  return (
    <nav className="bg-background text-foreground p-4 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo: "JA" y enlace a la página de inicio */}
        <Link href="/" className="text-2xl font-logo">
          JA
        </Link>
        {/* Botón de menú en móviles */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menú principal en pantallas grandes */}
        <ul className="md:flex space-x-4 font-logo text-2xl hidden md:block">
          <li>
            <a
              href="/#about"
              className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => handleNavClick("about")}
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => handleNavClick("proyectos")}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/#blog"
              className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => handleNavClick("blog")}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/#recursos"
              className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => handleNavClick("recursos")}
            >
              Recursos
            </a>
          </li>
        </ul>

        {/* Menú desplegable en móviles con animación */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-background text-center space-y-4 py-4 font-logo text-xl md:hidden"
            >
              <li>
                <a
                  href="#about"
                  className="block py-2 hover:text-primary"
                  onClick={() => handleNavClick("about")}
                >
                  Sobre mi
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 hover:text-primary"
                  onClick={() => handleNavClick("proyectos")}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block py-2 hover:text-primary"
                  onClick={() => handleNavClick("blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#recursos"
                  className="block py-2 hover:text-primary"
                  onClick={() => handleNavClick("recursos")}
                >
                  Recursos
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
