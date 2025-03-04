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
      "Tratamientos especializados para mejorar la apariencia y salud de tu cuerpo, reducir medidas y combatir la celulitis.",
    services: [
      {
        id: "reduccion-medidas",
        title: "Reducción de Medidas",
        description:
          "Tratamiento intensivo para reducir centímetros en zonas específicas como abdomen, piernas y brazos.",
        price: 60,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
      },
      {
        id: "anticelulitis",
        title: "Tratamiento Anticelulitis",
        description:
          "Combate eficazmente la celulitis con técnicas avanzadas que mejoran la circulación y eliminan toxinas.",
        price: 70,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "reafirmante",
        title: "Tratamiento Reafirmante",
        description:
          "Devuelve la firmeza a tu piel con este tratamiento que estimula la producción de colágeno y elastina.",
        price: 75,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "drenaje-linfatico",
        title: "Drenaje Linfático",
        description: "Técnica de masaje que favorece la eliminación de líquidos y toxinas, reduciendo la hinchazón.",
        price: 65,
        duration: "60 minutos",
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
        id: "limpieza-profunda",
        title: "Limpieza Facial Profunda",
        description: "Elimina impurezas, puntos negros y células muertas dejando tu piel limpia, fresca y luminosa.",
        price: 50,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
      },
      {
        id: "hidratacion-intensiva",
        title: "Hidratación Intensiva",
        description: "Tratamiento que aporta hidratación profunda a la piel, ideal para pieles secas o deshidratadas.",
        price: 55,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "antiarrugas",
        title: "Tratamiento Antiarrugas",
        description: "Reduce visiblemente líneas de expresión y arrugas con principios activos de última generación.",
        price: 80,
        duration: "60 minutos",
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
        id: "masaje-relajante",
        title: "Masaje Relajante",
        description:
          "Masaje suave que reduce el estrés y la ansiedad, proporcionando una sensación de bienestar general.",
        price: 45,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
      },
      {
        id: "masaje-descontracturante",
        title: "Masaje Descontracturante",
        description: "Alivia contracturas y tensiones musculares con técnicas específicas de presión y estiramientos.",
        price: 55,
        duration: "45 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "masaje-deportivo",
        title: "Masaje Deportivo",
        description: "Ideal para deportistas, ayuda a prevenir lesiones y acelerar la recuperación muscular.",
        price: 60,
        duration: "60 minutos",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "especiales",
    title: "Tratamientos Especiales",
    description: "Paquetes y tratamientos exclusivos diseñados para obtener resultados óptimos en tiempo reducido.",
    services: [
      {
        id: "pack-novias",
        title: "Pack Novias",
        description:
          "Preparación completa para lucir radiante en tu día especial. Incluye tratamientos faciales y corporales.",
        price: 180,
        duration: "3 sesiones",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "pack-verano",
        title: "Pack Preparación Verano",
        description:
          "Prepara tu cuerpo para el verano con este pack que incluye tratamientos reductores y reafirmantes.",
        price: 150,
        duration: "3 sesiones",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
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

