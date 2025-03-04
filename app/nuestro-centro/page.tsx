import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import GallerySection from "@/components/nuestro-centro/gallery-section"
import TeamSection from "@/components/nuestro-centro/team-section"

export const metadata: Metadata = {
  title: "Nuestro Centro - Belleza Esencial",
  description: "Conoce nuestras instalaciones, equipo y filosofía en Belleza Esencial",
}

export default function NuestroCentroPage() {
  return (
    <main className="flex-1">
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Bienvenido a Belleza Esencial
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto">
            Descubre el espacio donde la tradición se encuentra con la innovación para ofrecerte los mejores
            tratamientos de belleza y bienestar.
          </p>
        </div>
      </section>

      <GallerySection />

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tighter mb-4">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground mb-6">
                En Belleza Esencial, nos dedicamos a realzar la belleza natural de cada cliente, combinando técnicas
                tradicionales con las últimas innovaciones en estética. Nuestro objetivo es proporcionar un espacio
                donde puedas relajarte, rejuvenecer y sentirte lo mejor posible.
              </p>
              <h3 className="text-2xl font-serif font-semibold mb-2">¿Por qué elegirnos?</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Más de 15 años de experiencia
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Profesionales altamente cualificados
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tecnología de vanguardia
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Atención personalizada
                </li>
              </ul>
              <Button size="lg">Reserva tu consulta gratuita</Button>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-4">Nuestra Historia</h3>
                <p className="text-muted-foreground mb-4">
                  Fundada en 2008 por María Rodríguez, Belleza Esencial nació con la visión de crear un espacio donde la
                  belleza y el bienestar se unieran en perfecta armonía.
                </p>
                <p className="text-muted-foreground mb-4">
                  A lo largo de los años, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con la
                  excelencia y la atención personalizada que nos caracteriza.
                </p>
                <p className="text-muted-foreground">
                  Hoy, nos enorgullece ser uno de los centros de estética más reconocidos de la ciudad, gracias a la
                  confianza de nuestros clientes y la dedicación de nuestro equipo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TeamSection />
    </main>
  )
}

