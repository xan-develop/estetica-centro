'use client'
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import BlurText from "./ui/textochulo"

export default function HeroSection() {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-2">
                <BlurText
                  text="Mejora tu fisico y modela tu cuerpo"
                  delay={130}
                  animateBy="words"
                  direction="top"
                  className="text-6xl mb-8 font-bold"
                />
              <motion.p 
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                En Belleza Esencial, combinamos técnicas tradicionales y avanzadas para ayudarte a alcanzar tu mejor
                versión.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <Link href="/reservar">
                    Consulta gratuita
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/servicios">Conoce nuestros servicios</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.div 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1, color: "#007acc" }}
              >
                <Clock className="h-4 w-4" />
                <span>Lun-Sáb: 9:00-20:00</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1, color: "#007acc" }}
              >
                <MapPin className="h-4 w-4" />
                <span>Ubicación céntrica</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/local/image6.jpeg"
                width={850}
                height={450}
                alt="Centro de estética"
                className="rounded-lg object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

