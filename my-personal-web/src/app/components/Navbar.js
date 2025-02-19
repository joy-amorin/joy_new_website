"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-foreground p-4 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-logo text-primary">JA</h1>

        {/* Botón de menú en móviles */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menú principal */}
        <ul className={`md:flex space-x-4 font-logo text-xl hidden md:block`}>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Inicio</a></li>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Proyectos</a></li>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Blog</a></li>
          <li><a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Descargas</a></li>
        </ul>

        {/* Menú desplegable en móviles */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-background text-center space-y-4 py-4 font-logo text-xl md:hidden">
            <li><a href="#" className="block py-2 hover:text-primary">Inicio</a></li>
            <li><a href="#" className="block py-2 hover:text-primary">Proyectos</a></li>
            <li><a href="#" className="block py-2 hover:text-primary">Blog</a></li>
            <li><a href="#" className="block py-2 hover:text-primary">Descargas</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
