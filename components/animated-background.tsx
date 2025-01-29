"use client"

import { useEffect, useState } from "react"
import Image from "@/components/ui/image";

interface Sparkle {
  id: number
  size: number
  left: number
  top: number
  opacity: number
}

interface ColorBlob {
  id: number
  x: number
  y: number
  color: string
  speed: number
  direction: { x: number; y: number }
}

export function AnimatedBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [colorBlobs, setColorBlobs] = useState<ColorBlob[]>([])

  // Inicializar blobs de color
  useEffect(() => {
    const colors = [
      "from-red-500 via-red-700 to-red-900",
      "from-yellow-500 via-orange-700 to-red-900",
      "from-white-500 via-orange-700 to-black-900",
    ]

    const initialBlobs = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[i],
      speed: Math.random() * 3 + 1, 
      direction: {
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
      },
    }))

    setColorBlobs(initialBlobs)
  }, [])

  // Actualizar posiciones de los blobs
  useEffect(() => {
    const interval = setInterval(() => {
      setColorBlobs((prevBlobs) =>
        prevBlobs.map((blob) => {
          let newX = blob.x + blob.direction.x * blob.speed * 0.1
          let newY = blob.y + blob.direction.y * blob.speed * 0.1
          let newDirection = { ...blob.direction }

          // Rebotar en los bordes con un margen
          if (newX <= -20 || newX >= 120) {
            newDirection.x = -newDirection.x
            newX = Math.max(-20, Math.min(120, newX))
          }
          if (newY <= -20 || newY >= 120) {
            newDirection.y = -newDirection.y
            newY = Math.max(-20, Math.min(120, newY))
          }

          // Cambiar dirección aleatoriamente con menos frecuencia
          if (Math.random() < 0.01) {
            newDirection = {
              x: Math.random() * 2 - 1,
              y: Math.random() * 2 - 1,
            }
          }

          return {
            ...blob,
            x: newX,
            y: newY,
            direction: newDirection,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])



  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black flex justify-center items-center">
      {/* Blobs de color con movimiento aleatorio */}
      {colorBlobs.map((blob) => (
        <div
          key={blob.id}
          className={`absolute h-56 w-56 md:h-76 md:w-76 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br ${blob.color} opacity-30 blur-3xl`}
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.5s ease-out",
          }}
        />
      ))}

      {/* Destellos */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-white animate-sparkle"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            opacity: sparkle.opacity,
          }}
        />
      ))}

      {/* Capa de brillo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Contenido */}
      <>
      <Image src="/images/qtead.png" alt="Imagen de laku"  className="w-full h-full" ></Image>
      </>
    </section>
  )
}
