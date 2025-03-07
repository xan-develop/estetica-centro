import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCategory from "@/components/services/service-category"

export const metadata: Metadata = {
  title: "Servicios - Belleza Esencial",
  description: "Descubre todos nuestros tratamientos para mejorar tu físico y bienestar",
}

// Datos de ejemplo para los servicios
const serviceCategories = [
  {
    
    id: "corporales",
    title: "Tratamientos Corporales",
    description:
      "Tratamientos especializados para mejorar la apariencia y salud de tu cuerpo, utilizando diversas técnicas innovadoras.",
    services: [
      {
        id: "maderoterapia",
        title: "Maderoterapia",
        description:
          "Terapia con herramientas de madera diseñadas para modelar el cuerpo, reducir medidas y mejorar la circulación.",
        price: 15,
        duration: "1€ minuto - mínimo 5 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "mesoterapia",
        title: "Mesoterapia",
        description:
          "Tratamiento estético no invasivo que ayuda a reducir grasa localizada y mejorar la apariencia de la piel.",
        price: 15,
        duration: "1€ minuto - mínimo 15 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "manta-termica",
        title: "Manta Térmica",
        description:
          "Terapia de calor que ayuda a la eliminación de toxinas, mejora la circulación y favorece la reducción de medidas.",
        price: 15,
        duration: "1€ minuto - mínimo 15 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "radiofrecuencia",
        title: "Radiofrecuencia",
        description:
          "Tratamiento reafirmante que estimula la producción de colágeno y elastina para mejorar la firmeza de la piel.",
        price: 15,
        duration: "1€ minuto - mínimo 15 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "cavitacion",
        title: "Cavitación",
        description:
          "Técnica de ultrasonido que ayuda a eliminar grasa localizada y reducir medidas sin cirugía.",
        price: 15,
        duration: "1€ minuto - mínimo 30 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "presoterapia",
        title: "Presoterapia",
        description:
          "Tratamiento de compresión que mejora la circulación, reduce la retención de líquidos y ayuda en la recuperación muscular.",
        price: 15,
        duration: "1€ minuto - mínimo 45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "vacumterapia",
        title: "Vacumterapia",
        description:
          "Terapia de succión que ayuda a mejorar la circulación, reducir la celulitis y tonificar la piel.",
        price: 15,
        duration: "1€ minuto - mínimo 30 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "faciales",
    title: "Tratamientos Faciales",
    description:
      "Cuida y rejuvenece tu rostro con nuestros tratamientos faciales personalizados para cada tipo de piel.",
    services: [
      {
        id: "limpieza-basica",
        title: "Limpieza Básica",
        description:
          "Elimina impurezas y deja la piel fresca y revitalizada.",
        price: 40,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "limpieza-profunda",
        title: "Limpieza Facial Profunda",
        description:
          "Elimina impurezas, puntos negros y células muertas dejando tu piel limpia, fresca y luminosa.",
        price: 65,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "dermapen-hilos",
        title: "Dermapen + Hilos",
        description:
          "Reafirma y rejuvenece la piel con una combinación avanzada de Dermapen y hilos tensores.",
        price: 105,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "dermapen-hidratacion",
        title: "Dermapen + Hidratación",
        description:
          "Estimula la regeneración de la piel mientras proporciona hidratación profunda.",
        price: 60,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "dermapen-labial-hidratacion",
        title: "Dermapen Labial + Hidratación",
        description:
          "Tratamiento para labios que mejora la textura y los mantiene hidratados.",
        price: 35,
        duration: "30 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "dermapen-labial-hidratacion-color",
        title: "Dermapen Labial + Hidratación con Color",
        description:
          "Añade un toque de color mientras hidrata y mejora la apariencia de los labios.",
        price: 45,
        duration: "30 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "masajes",
    title: "Masajes Terapéuticos",
    description:
      "Relaja cuerpo y mente, alivia tensiones y mejora tu bienestar general con nuestros masajes especializados.",
    services: [
      {
        id: "masaje-relajante-espalda",
        title: "Masaje Relajante de Espalda",
        description:
          "Masaje relajante centrado en la espalda para aliviar tensiones y mejorar la circulación.",
        price: 35,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-relajante-cuello",
        title: "Masaje Relajante de Cuello",
        description:
          "Técnica suave y efectiva para liberar la tensión acumulada en el cuello.",
        price: 35,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-relajante-cara",
        title: "Masaje Relajante de Cara",
        description:
          "Estimula la circulación facial y reduce el estrés proporcionando una sensación de bienestar.",
        price: 35,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-relajante-piernas",
        title: "Masaje Relajante de Piernas",
        description:
          "Alivia la pesadez en las piernas y mejora la circulación sanguínea.",
        price: 35,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-relajante-pies",
        title: "Masaje Relajante de Pies",
        description:
          "Terapia para relajar los pies cansados y mejorar el bienestar general.",
        price: 35,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-relajante-cuerpo-completo",
        title: "Masaje Relajante Cuerpo Completo",
        description:
          "Masaje integral para liberar estrés y relajar todos los músculos del cuerpo.",
        price: 75,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-descontracturante-cuerpo-completo",
        title: "Masaje Descontracturante Cuerpo Completo",
        description:
          "Técnica profunda que ayuda a aliviar tensiones musculares y mejorar la movilidad.",
        price: 90,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Descubre todos los tratamientos que ofrecemos para mejorar tu físico y bienestar
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex overflow-x-auto py-2 gap-2">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 whitespace-nowrap rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-8">
        {serviceCategories.map((category) => (
          <ServiceCategory key={category.id} category={category} />
        ))}

        <div className="flex justify-center py-12">
          <Button size="lg" asChild>
            <Link href="/reservar">Reservar una cita</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

