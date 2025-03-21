"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { contactInfo } from "@/lib/services-data"

export default function CoursesSection() {
  const [isPlaying, setIsPlaying] = useState(false)

    return (
      <section className="w-full py-10 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">
              Formación Profesional
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Cursos de Maderoterapia
            </h2>
            <p className="max-w-[800px] text-foreground md:text-xl/relaxed">
              Aprende las técnicas profesionales de maderoterapia y amplía tus servicios como terapeuta
            </p>
          </div>
  
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="h-full flex">
              <div className="grid w-full grid-cols-12 gap-4 h-full">
                {/* Main vertical image */}
                <div className="relative col-span-12 sm:col-span-5 h-64 sm:h-full rounded-lg overflow-hidden">
                  <div className="h-full">
                    <Image
                      src="fotos/screenshot_chat_016.webp"
                      alt="Técnica de masaje profesional"
                      width={400}
                      height={600}
                      className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Grid of smaller images */}
                <div className="col-span-12 sm:col-span-7 grid grid-rows-2 gap-4 h-full">
                  <div className="relative rounded-lg overflow-hidden h-32 sm:h-full">
                    <Image
                      src="fotos/screenshot_chat_004.webp"
                      alt="Instrumentos de maderoterapia"
                      width={640}
                      height={360}
                      className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 h-32 sm:h-full">
                    <div className="relative rounded-lg overflow-hidden h-full">
                      <Image
                        src="fotos/screenshot_chat_019.webp"
                        alt="Detalles de masaje terapéutico"
                        width={300}
                        height={300}
                        className="object-cover rounded-xl h-full w-full hover:scale-105 left-3 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="relative rounded-lg overflow-hidden h-full">
                      <Image
                        src="fotos/screenshot_chat_001.webp"
                        alt="Ambiente relajante de spa"
                        width={300}
                        height={300}
                        className="object-cover h-full w-full hover:scale-105  transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Adjust spacing for mobile */}
            <div className="space-y-6 mt-8 sm:mt-0">
              <Card className="border border-primary/20 bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">¿Qué aprenderás?</h3>
                  <ul className="space-y-3">
                    {[
                      "Fundamentos y beneficios de la maderoterapia",
                      "Técnicas de masaje con instrumentos de madera",
                      "Protocolos para tratamientos corporales y faciales",
                      "Cómo integrar la maderoterapia en tus servicios",
                      "Aspectos comerciales y de marketing",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-6 w-6 mr-2 text-accent flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-card-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
  
                  <div className="mt-8 space-y-4">
                    <h4 className="font-semibold text-lg text-primary">Detalles del curso:</h4>
                    <p className="text-card-foreground">
                      Nuestros cursos de maderoterapia están diseñados para cualquier persona que desee aprender esta
                      técnica, no se requiere experiencia previa. Ofrecemos formación teórica y práctica, con
                      certificación y seguimiento posterior.
                    </p>
                    <p className="text-card-foreground">
                      Grupos reducidos para garantizar una atención personalizada. Material incluido y posibilidad de
                      financiación.
                    </p>
                  </div>
  
                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors py-3"
                      onClick={() => window.location.href = `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                    >
                      <Phone className="mr-2 h-5 w-5 inline" />
                      Llamar para más información
                    </Button>
                    <p className="text-sm text-center mt-2 text-muted-foreground">
                      O escríbenos por WhatsApp al {contactInfo.whatsapp}
                    </p>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="border border-primary/20 bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Próximas fechas</h3>
                  <p className="text-card-foreground">
                    Consulta disponibilidad y reserva tu plaza con antelación. Plazas limitadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}

