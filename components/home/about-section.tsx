import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const features = [
    "Profesionales certificados con amplia experiencia",
    "Equipos de última generación con resultados comprobados",
    "Atención personalizada adaptada a tus necesidades",
    "Productos de alta calidad para cuidar tu piel",
  ]

  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="fotos/sesion_maderoterapia_017.webp"
              width={500}
              height={500}
              alt="Nuestro equipo"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Sobre Nosotros</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tradición y experiencia</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Con más de 15 años de experiencia, nuestro centro combina técnicas tradicionales con las últimas
                innovaciones en estética.
              </p>
            </div>
            <ul className="grid gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                <a href="/nuestro-centro">Nuestras instalaciones</a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

