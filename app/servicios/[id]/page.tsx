'use client'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useCart } from "@/components/cart-context"

// Importa los datos de servicios (asegúrate de que este archivo exista y contenga los datos)
import { serviceCategories } from "@/lib/services-data"

function findService(id: string) {
  for (const category of serviceCategories) {
    const service = category.services.find((s) => s.id === id)
    if (service) return service
  }
  return null
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = findService(params.id)
  const { agregarAlCarrito } = useCart(); // Usa el hook para acceder a las funciones del carrito

  if (!service) {
    notFound()
  }

  return (
    <main className="flex-1">
      <div className="bg-muted">
        <div className="container px-4 py-8 md:py-12">
          <nav className="text-sm mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/servicios" className="hover:underline">
              Servicios
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{service.title}</span>
          </nav>
        </div>
      </div>

      <article className="container px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-serif font-bold">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold">{service.price}€</div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 h-5 w-5" />
                {service.duration}
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto ml-4 bg-red-200 text-black" onClick={() => agregarAlCarrito({ id: service.id, title: service.title, price: service.price })}>
              Añadir al carrito
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Beneficios</h2>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 mr-2 text-primary flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">El proceso</h2>
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-serif font-bold text-primary mr-4">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Listo para transformar tu bienestar?</h2>
          <p className="mb-6 text-muted-foreground">
            Reserva tu sesión hoy y comienza tu viaje hacia una mejor versión de ti mismo.
          </p>
          <Button size="lg" asChild>
            <Link href={`/reservar?servicio=${service.id}`}>Reservar ahora</Link>
          </Button>
        </div>
      </article>
    </main>
  )
}

