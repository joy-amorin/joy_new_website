"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-background text-foreground p-4 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo: "JA" y enlace a la página de inicio */}
        <Link href="/" className="text-3xl font-logo">
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
        <ul className="md:flex space-x-4 font-logo text-3xl hidden md:block">
          <li><a href="#about" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Sobre mi</a></li>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Proyectos</a></li>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Blog</a></li>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Recursos</a></li>
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
              <li><a href="#" className="block py-2 hover:text-primary" onClick={handleLinkClick}>Sobre mi</a></li>
              <li><a href="#" className="block py-2 hover:text-primary" onClick={handleLinkClick}>Proyectos</a></li>
              <li><a href="#" className="block py-2 hover:text-primary" onClick={handleLinkClick}>Blog</a></li>
              <li><a href="#" className="block py-2 hover:text-primary" onClick={handleLinkClick}>Recursos</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
