import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"


const projects = [
  {
    title: "E-commerce Premium",
    description: "Plataforma de comercio electrónico con características avanzadas",
    image: "/images/RediseñoWeb.webp",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Sistema de Gestión",
    description: "Software de gestión empresarial personalizado",
    image: "/images/OptimizacionSEO.webp",
    tags: ["React", "TypeScript", "Express", "PostgreSQL"],
  },
  {
    title: "Aplicación Web Educativa",
    description: "Plataforma de aprendizaje en línea interactiva",
    image: "/images/PaginaWebCorporativa.jpg",
    tags: ["React", "Firebase", "Material-UI"],
  },
  {
    title: "Portal Inmobiliario",
    description: "Sitio web para búsqueda y gestión de propiedades",
    image: "/images/TiendaOnlinePersonalizada.jpg",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen pb-20 pt-28 lg:pt-28 xl:pt-32">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nuestro Portfolio</h1>
          <p className="text-xl text-gray-600">
            Descubre algunos de nuestros proyectos más destacados
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline">
                  Ver Detalles
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-600 mb-8">
            Contáctanos para discutir cómo podemos ayudarte a hacerlo realidad
          </p>
          <Link href="/contacto">
            <Button size="lg">Iniciar Proyecto</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

