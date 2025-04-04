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
        price: 35,
        duration: "Por sección y zona",
        image: "/fotos/sesion_maderoterapia_004.webp?height=300&width=400",
      },
      {
        id: "manta-termica",
        title: "Manta Térmica",
        description:
          "Terapia de calor que ayuda a la eliminación de toxinas, mejora la circulación y favorece la reducción de medidas.",
        price: 30,
        duration: "1€ minuto - mínimo 30 minutos",
        image: "/img/manta-termica.webp?height=300&width=400",
      },
      {
        id: "radiofrecuencia",
        title: "Radiofrecuencia",
        description:
          "Tratamiento reafirmante que estimula la producción de colágeno y elastina para mejorar la firmeza de la piel.",
        price: 15,
        duration: "1€ minuto - mínimo 15 minutos",
        image: "/img/radiofrecuencia.webp?height=300&width=400",
      },
      {
        id: "cavitacion",
        title: "Cavitación",
        description:
          "Técnica de ultrasonido que ayuda a eliminar grasa localizada y reducir medidas sin cirugía.",
        price: 30,
        duration: "1€ minuto - mínimo 30 minutos",
        image: "/img/cavitacion.webp?height=300&width=400",
      },
      {
        id: "presoterapia",
        title: "Presoterapia",
        description:
          "Tratamiento de compresión que mejora la circulación, reduce la retención de líquidos y ayuda en la recuperación muscular.",
        price: 45,
        duration: "1€ minuto - mínimo 45 minutos",
        image: "/img/presoterapia.webp?height=300&width=400",
      },
      {
        id: "vacumterapia",
        title: "Vacumterapia",
        description:
          "Terapia de succión que ayuda a mejorar la circulación, reducir la celulitis y tonificar la piel.",
        price: 30,
        duration: "1€ minuto - mínimo 30 minutos",
        image: "/img/vacumterapia.webp?height=300&width=400",
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
        title: "Limpieza Facial Básica",
        description:
          "Elimina impurezas y deja la piel fresca y revitalizada.",
        price: 40,
        duration: "45 minutos",
        image: "/img/limpiezabasica.webp?height=300&width=400",
      },
      {
        id: "limpieza-profunda",
        title: "Limpieza Facial Profunda",
        description:
          "Elimina impurezas, puntos negros y células muertas dejando tu piel limpia, fresca y luminosa.",
        price: 65,
        duration: "60 minutos",
        image: "/img/limpiezaprofunda.webp?height=300&width=400",
      },
      {
        id: "dermapen-hilos",
        title: "Dermapen con Hilos Tensores",
        description:
          "Reafirma y rejuvenece la piel con una combinación avanzada de Dermapen y hilos tensores.",
        price: 105,
        duration: "60 minutos",
        image: "/img/dermapen-hilos.webp?height=300&width=400",
      },
      {
        id: "dermapen-hidratacion",
        title: "Dermapen con Hidratación",
        description:
          "Estimula la regeneración de la piel mientras proporciona hidratación profunda.",
        price: 60,
        duration: "60 minutos",
        image: "/img/dermapen-hidratacion.webp?height=300&width=400",
      },
      {
        id: "dermapen-labial-hidratacion",
        title: "Dermapen Labial con Hidratación",
        description:
          "Tratamiento para labios que mejora la textura y los mantiene hidratados.",
        price: 35,
        duration: "30 minutos",
        image: "/img/dermapen-hidratacionlabial.webp?height=300&width=400",
      },
      {
        id: "dermapen-labial-hidratacion-color",
        title: "Dermapen Labial con Hidratación y Color",
        description:
          "Añade un toque de color mientras hidrata y mejora la apariencia de los labios.",
        price: 45,
        duration: "30 minutos",
        image: "/img/dermapen-color-hidratacion.webp?height=300&width=400",
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
        image: "/img/masaje-espalda.webp?height=300&width=400",
      },
      {
        id: "masaje-relajante-cuello",
        title: "Masaje Relajante de Cuello",
        description:
          "Técnica suave y efectiva para liberar la tensión acumulada en el cuello.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-cuello.webp?height=300&width=400",
      },
      {
        id: "masaje-relajante-cara",
        title: "Masaje Relajante Facial",
        description:
          "Estimula la circulación facial y reduce el estrés proporcionando una sensación de bienestar.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-facial.webp?height=300&width=400",
      },
      {
        id: "masaje-relajante-piernas",
        title: "Masaje Relajante de Piernas",
        description:
          "Alivia la pesadez en las piernas y mejora la circulación sanguínea.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-piernas.webp?height=300&width=400",
      },
      {
        id: "masaje-relajante-pies",
        title: "Masaje Relajante de Pies",
        description:
          "Terapia para relajar los pies cansados y mejorar el bienestar general.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-pies.webp?height=300&width=400",
      },
      {
        id: "masaje-relajante-cuerpo-completo",
        title: "Masaje Relajante de Cuerpo Completo",
        description:
          "Masaje integral para liberar estrés y relajar todos los músculos del cuerpo.",
        price: 75,
        duration: "60 minutos",
        image: "/img/masaje-cuerpo.webp?height=300&width=400",
      },
      {
        id: "masaje-descontracturante-cuerpo-completo",
        title: "Masaje Descontracturante de Cuerpo Completo",
        description:
          "Técnica profunda que ayuda a aliviar tensiones musculares y mejorar la movilidad.",
        price: 90,
        duration: "60 minutos",
          image: "/img/masaje-des.webp?height=300&width=400",
        },
      ],
    },
    {
      "id": "laser",
      "title": "Depilación Láser SHR-V",
      "description": "Cuida y rejuvenece tu rostro con nuestros tratamientos faciales personalizados para cada tipo de piel. Los precios son por una zona a elegir de la lista",
      "services": [
        {
          "id": "zona-smart",
          "title": "Zona Smart (Pequeñas Zonas)",
          "description": "Precio por una zona,Labio Superior, Mentón, Línea Alba, Manos, Pies, Entresijo, Patillas, Pubis (Ano), Areolas",
          "price": 17,
          "duration": "Por sesión",
          "image": "/img/zona-smart.webp?height=300&width=400"
        },
        {
          "id": "zona-pequena",
          "title": "Zona Pequeña",
          "description": "Precio por una zona,Axilas, Antebrazos, Hombros, Nuca",
          "price": 30,
          "duration": "Por sesión",
          "image": "/img/zona-pequena.webp?height=300&width=400"
        },
        {
          "id": "zona-mediana",
          "title": "Zona Mediana",
          "description": "Precio por una zona,Muslo, Espalda, Lumbares, Glúteo, Abdomen, Brazos + Manos, Ingle + Pubis, Facial Completo, Barba",
          "price": 40,
          "duration": "Por sesión",
          "image": "/img/zona-mediana.webp?height=300&width=400"
        },
        {
          "id": "zona-grande",
          "title": "Zona Grande",
          "description": "Precio por una zona,Piernas + Pies, Pecho + Abdomen, Espalda + Lumbares",
          "price": 80,
          "duration": "Por sesión",
          "image": "/img/zona-grande.webp?height=300&width=400"
        },
        {
          "id": "pack-40",
          "title": "Pack Labio Superior y Axilas",
          "description": "Labio Superior, Axila",
          "price": 40,
          "duration": "Por sesión",
          "image": "/img/pack-40.webp?height=300&width=400"
        },
        {
          "id": "pack-45",
          "title": "Pack Ingle y Axilas",
          "description": "Ingle, Axila",
          "price": 45,
          "duration": "Por sesión",
          "image": "/img/pack-45.webp?height=300&width=400"
        },
        {
          "id": "pack-75",
          "title": "Pack Media Pierna, Ingle y Axilas",
          "description": "Media Pierna, Ingle, Axila",
          "price": 75,
          "duration": "Por sesión",
          "image": "/img/pack-75.webp?height=300&width=400"
        },
        {
          "id": "pack-90",
          "title": "Pack Pierna Completa, Ingle, Pubis y Axilas",
          "description": "Pierna Completa, Ingle, Pubis, Axila",
          "price": 90,
          "duration": "Por sesión",
          "image": "/img/pack-90.webp?height=300&width=400"
        },
        {
          "id": "pack-95",
          "title": "Pack Espalda Masculina y Brazos",
          "description": "Espalda Masculina, Brazos",
          "price": 95,
          "duration": "Por sesión",
          "image": "/img/pack-95.webp?height=300&width=400"
        },
        {
          "id": "pack-130",
          "title": "Pack Completo (Piernas, Ingle, Pubis, Axilas y Bigote)",
          "description": "Ingle, Pubis, Axila, Pierna Completa, Regalo Bigote",
          "price": 130,
          "duration": "Por sesión",
          "image": "/img/pack-130.webp?height=300&width=400"
        }
      ]
    }
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

