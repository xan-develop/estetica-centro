'use client'
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Star, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll } from "framer-motion"
import BlurText from "./ui/textochulo"
import { contactInfo } from "@/lib/services-data"

export default function HeroSection() {
  return (
    <section id="inicio" className="w-full bg-muted/30 py-12 md:py-16 lg:py-20 overflow-hidden relative">
      {/* Imagen de fondo */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: useScroll().scrollY,
          scale: 1.1
        }}
      >
        <Image
          src="fotos/sesion_maderoterapia_008.webp" 
          alt="Fondo decorativo"
          fill
          className="object-cover opacity-15"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo Container - Centrado */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-xl mx-auto mb-10"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40"></div>
            
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-3xl blur-3xl opacity-50"></div>
            
            {/* Logo - estilo mejorado */}
            <div className="relative backdrop-blur-md rounded-2xl p-6 border border-primary/10">
              <Image
                src="/logolixchel.png"
                alt="Lixchel"
                width={400}
                height={200}
                className="w-full h-auto transform transition-all duration-700 hover:scale-105 drop-shadow-sm"
                priority
              />
            </div>
          </motion.div>

          {/* Contenido principal */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              <p className="text-primary font-medium tracking-[0.2em] mb-2 text-sm md:text-base">EXPERIENCIA EXCLUSIVA</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight">
                Tu belleza natural, <br/>
                <span className="text-primary">potenciada</span>
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Descubre tratamientos personalizados que realzan tu belleza natural con técnicas innovadoras y resultados excepcionales.
              </p>
            </motion.div>

            {/* Botones centrados */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-2 mb-10"
            >
              <Button 
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-10 text-base font-medium shadow-md shadow-primary/20"
                onClick={() => alert('La función de reservar cita no está disponible por ahora.')}
              >
                Reservar Cita
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border border-primary text-primary hover:bg-primary/5 rounded-full px-6 h-10 text-base font-medium"
              >
                <Link href="/servicios">
                  Ver Servicios
                </Link>
              </Button>
            </motion.div>
          </div>
 {/* Iconos de contacto */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 pt-10"
          >
            <Link href="https://www.instagram.com/lixchel_/" target="_blank" className="text-primary hover:text-primary/80">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" className="text-primary hover:text-primary/80">
              <Phone className="h-6 w-6" />
            </Link>
            <Link href={`mailto:${contactInfo.email}`} className="text-primary hover:text-primary/80">
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>
          {/* Indicadores de calidad */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 pt-10 mt-4"
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" fill="currentColor" strokeWidth={1} />
              <span className="text-sm text-muted-foreground">Excelencia garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">Atención personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">{contactInfo.address}</span>
            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  )
}

