import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "María García",
    text: "Después de 10 sesiones, los resultados son increíbles. He reducido medidas y mi piel luce mucho más firme. El equipo es muy profesional y atento.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    text: "Nunca pensé que podría mejorar tanto mi físico. Los masajes terapéuticos han aliviado mi dolor de espalda crónico y me siento con más energía.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    text: "El tratamiento facial rejuvenecedor ha sido una revelación. Mi piel luce radiante y los signos de envejecimiento han disminuido notablemente.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonios</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros clientes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre las experiencias de quienes ya han transformado su físico con nosotros.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-1">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Cliente satisfecho</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

