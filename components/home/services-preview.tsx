'use client'
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const featuredServices = [
  {
    title: "Tratamientos corporales",
    description: "Reduce medidas, elimina celulitis y reafirma tu piel con nuestros tratamientos personalizados.",
    image: "/tratamientos/image2.jpeg",
    link: "/servicios#corporales",
  },
  {
    title: "Tratamientos faciales",
    description: "Rejuvenece tu rostro con técnicas avanzadas que mejoran la textura y luminosidad de tu piel.",
    image: "/tratamientos/image0.jpeg",
    link: "/servicios#faciales",
  },
  {
    title: "Masajes terapéuticos",
    description:
      "Alivia tensiones, mejora la circulación y disfruta de una experiencia relajante con nuestros masajes.",
    image: "/tratamientos/image5_1.jpeg",
    link: "/servicios#masajes",
  },
]

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function ServicesPreview() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-2">
            <motion.div 
              className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Nuestros Servicios
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Tratamientos personalizados
            </motion.h2>
            <motion.p 
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Ofrecemos una amplia gama de servicios diseñados para mejorar tu físico y bienestar.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="overflow-hidden h-full shadow-lg">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="aspect-video object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="mt-2 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="link" className="mt-4 p-0" asChild>
                      <Link href={service.link}>
                        Saber más <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" asChild>
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

