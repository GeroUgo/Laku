'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con gestión de inventario y pagos integrados',
    image: '/images/1.jpeg',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel de control con análisis en tiempo real y visualización de datos',
    image: '/images/2.jpeg',
    tags: ['React', 'D3.js', 'Firebase']
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'Aplicación móvil multiplataforma para gestión de tareas',
    image: '/images/3.jpeg',
    tags: ['React Native', 'Node.js', 'MongoDB']
  }
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <Card key={project.id} className="w-full flex-shrink-0 border-0 bg-transparent">
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2 ">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="rounded-full bg-gray-500/20 px-3 py-1 text-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-fit hover:bg-primary hover:text-white"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="mt-4 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-secondary' : 'bg-gray-800'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
