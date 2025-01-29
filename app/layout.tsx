import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Laku - Artista',
  description: 'Sitio web de Laku, artista de música.',
  openGraph: {
    title: 'Laku - Artista',
    description: 'Sitio web de Laku, artista de música.',
    url: 'https://laku.com',  // Reemplaza con la URL real de tu sitio
    type: 'website',
    image: '/public/nLogo.webp',  // Imagen de Open Graph (asegúrate de que exista en tu carpeta pública)
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laku - Artista',
    description: 'Sitio web de Laku, artista de música.',
    image: '/images/twitter-image.jpg',  // Imagen para Twitter (asegúrate de que exista en tu carpeta pública)
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <link rel="icon" href="" />
        <link rel="canonical" href="https://nestcodestudio.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="NestCodeStudio - Desarrollo Web y Software" />
        <meta property="og:description" content="Servicios profesionales de desarrollo web, software y aplicaciones. Soluciones digitales personalizadas para tu negocio." />
        <meta property="og:url" content="https://nestcodestudio.com" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NestCodeStudio - Desarrollo Web y Software" />
        <meta name="twitter:description" content="Servicios profesionales de desarrollo web, software y aplicaciones." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
