import { Code2, Mail, MapPin, Phone, Music, PlayIcon, PauseCircle } from 'lucide-react'
import { Play } from 'next/font/google'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Contenedor principal centrado */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center  md:text-left">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-bold text-lg">LAKU</span>
            </div>
          </div>
          
          {/* Enlaces */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#temas" className="text-gray-400 hover:text-white">Lanzamientos</a></li>
              <li><a href="#redes" className="text-gray-400 hover:text-white">Redes</a></li>
            </ul>
          </div>
          
          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ultimas novedades</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Ultimo tema.</li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center md:justify-start space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span className="break-words text-sm md:text-base overflow-hidden text-ellipsis">
                  lakuysmusic@gmail.com
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Línea separadora y derechos de autor */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NestCodeStudio. Todos los derechos reservados.</p>
        </div>
      
      </div>
    </footer>
  )
}

