'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code2 } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {  // Cambia el valor según lo que necesites
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center p-6 transition duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
      {/* Contenedor del navbar */}
      <div className={`sticky top-4 z-40 w-full max-w-sm bg-blue-600/40 backdrop-blur-md p-4 ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'} lg:rounded-full  flex items-center justify-between shadow-md`}>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 mx-auto">
          <a href="#" className={`text-white hover:text-blue-400 text-center`}>Inicio</a>
          <a href="#temas" className={`text-white hover:text-blue-400 text-center`}>Lanzamientos</a>
          <a href="#redes" className={`text-white hover:text-blue-400 text-center `}>Redes</a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation con transición */}
      <div className={`lg:hidden w-full max-w-5xl bg-blue-600/40 backdrop-blur-md rounded-b-2xl shadow-md overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'}`}>
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link href="/" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/sobre-nosotros" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Sobre Nosotros</Link>
          <Link href="/portfolio" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/contacto" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      </div>
    </nav>
  )
}
